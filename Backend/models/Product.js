const { getPool } = require('../config/db');

class Product {
    static async findAll(filters = {}) {
        const pool = getPool();
        const { category, subcategory, page, limit } = filters;
        
        let query = 'SELECT * FROM products';
        const conditions = [];
        const values = [];

        if (category) {
            conditions.push('category = ?');
            values.push(category);
        }
        if (subcategory) {
            conditions.push('subcategory = ?');
            values.push(subcategory);
        }
        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ');
        }
        query += ' ORDER BY createdAt DESC';

        // Server-side pagination
        const pageNum = parseInt(page) || null;
        const limitNum = parseInt(limit) || null;

        if (pageNum && limitNum) {
            const offset = (pageNum - 1) * limitNum;
            // Get total count
            let countQuery = 'SELECT COUNT(*) as total FROM products';
            if (conditions.length > 0) countQuery += ' WHERE ' + conditions.join(' AND ');
            const [countRows] = await pool.query(countQuery, values);
            const total = countRows[0].total;

            query += ` LIMIT ? OFFSET ?`;
            const [rows] = await pool.query(query, [...values, limitNum, offset]);
            return {
                products: rows.map(row => this.parseJsonFields(row)),
                total,
                page: pageNum,
                limit: limitNum,
                totalPages: Math.ceil(total / limitNum)
            };
        }

        try {
            const [rows] = await pool.query(query, values);
            return rows.map(row => this.parseJsonFields(row));
        } catch (err) {
            if (err.code === 'ETIMEDOUT' || err.code === 'ECONNRESET' || err.code === 'PROTOCOL_CONNECTION_LOST') {
                console.warn('DB connection lost, retrying...');
                const [rows] = await pool.query(query, values);
                return rows.map(row => this.parseJsonFields(row));
            }
            throw err;
        }
    }

    static async findByProductId(productId) {
        const pool = getPool();
        const [rows] = await pool.query('SELECT * FROM products WHERE productId = ?', [productId]);
        return rows.length > 0 ? this.parseJsonFields(rows[0]) : null;
    }

    static async create(productData) {
        const pool = getPool();
        const {
            productId, name, description, category, subcategory, gender,
            price, originalPrice, discount, images, sizes, colors, inStock,
            featured, ageRange, agePricing, outOfStockSizes
        } = productData;

        const [result] = await pool.query(
            `INSERT INTO products (
                productId, name, description, category, subcategory, gender,
                price, originalPrice, discount, images, sizes, colors, inStock,
                featured, ageRange, agePricing, outOfStockSizes
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                productId, name, description, category, subcategory, gender,
                price, originalPrice, discount || 0,
                JSON.stringify(images || []),
                JSON.stringify(sizes || []),
                JSON.stringify(colors || []),
                inStock !== false,
                featured || false,
                ageRange || null,
                agePricing ? JSON.stringify(agePricing) : null,
                outOfStockSizes ? JSON.stringify(outOfStockSizes) : JSON.stringify([])
            ]
        );

        return await this.findByProductId(productId);
    }

    static async update(productId, productData) {
        const pool = getPool();
        
        const existing = await this.findByProductId(productId);
        if (!existing) throw new Error('Product not found');

        // Helper to safely get value
        const val = (key) => productData[key] !== undefined ? productData[key] : existing[key];

        // Helper to safely stringify JSON fields
        const toJson = (v) => {
            if (v === null || v === undefined) return JSON.stringify([]);
            if (Array.isArray(v)) return JSON.stringify(v);
            if (typeof v === 'string') {
                try { JSON.parse(v); return v; } catch(e) { return JSON.stringify([]); }
            }
            return JSON.stringify([]);
        };

        const name = val('name');
        const description = val('description');
        const category = val('category');
        const subcategory = val('subcategory');
        const gender = val('gender');
        const price = val('price');
        const originalPrice = val('originalPrice');
        const discount = val('discount') || 0;
        const images = toJson(val('images'));
        const sizes = toJson(val('sizes'));
        const colors = toJson(val('colors'));
        const inStock = val('inStock') !== false;
        const featured = val('featured') || false;
        const ageRange = val('ageRange') || null;
        const agePricingRaw = val('agePricing');
        const agePricing = agePricingRaw ? (typeof agePricingRaw === 'string' ? agePricingRaw : JSON.stringify(agePricingRaw)) : null;
        const outOfStockSizes = toJson(val('outOfStockSizes'));

        await pool.query(
            `UPDATE products SET
                name=?, description=?, category=?, subcategory=?, gender=?,
                price=?, originalPrice=?, discount=?, images=?, sizes=?, colors=?,
                inStock=?, featured=?, ageRange=?, agePricing=?, outOfStockSizes=?
            WHERE productId=?`,
            [name, description, category, subcategory, gender,
             price, originalPrice, discount, images, sizes, colors,
             inStock, featured, ageRange, agePricing, outOfStockSizes,
             productId]
        );

        return await this.findByProductId(productId);
    }

    static async delete(productId) {
        const pool = getPool();
        const [result] = await pool.query('DELETE FROM products WHERE productId = ?', [productId]);
        return result.affectedRows > 0;
    }

    static parseJsonFields(row) {
        if (!row) return null;
        
        // Helper function to safely parse JSON fields
        const safeJsonParse = (field, defaultValue = []) => {
            if (!field) return defaultValue;
            if (Array.isArray(field)) return field;
            if (typeof field === 'object') return field;
            if (typeof field === 'string') {
                try {
                    return JSON.parse(field);
                } catch (e) {
                    console.error('JSON parse error for field:', field, e);
                    return defaultValue;
                }
            }
            return defaultValue;
        };
        
        return {
            ...row,
            images: safeJsonParse(row.images, []),
            sizes: safeJsonParse(row.sizes, []),
            colors: safeJsonParse(row.colors, []),
            agePricing: safeJsonParse(row.agePricing, null),
            outOfStockSizes: safeJsonParse(row.outOfStockSizes, []),
            inStock: Boolean(row.inStock),
            featured: Boolean(row.featured)
        };
    }
}

module.exports = Product;
