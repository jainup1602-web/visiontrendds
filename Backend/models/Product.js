const { getPool } = require('../config/db');

class Product {
    static async findAll(filters = {}) {
        const pool = getPool();
        let query = 'SELECT * FROM products';
        const conditions = [];
        const values = [];

        if (filters.category) {
            conditions.push('category = ?');
            values.push(filters.category);
        }

        if (filters.subcategory) {
            conditions.push('subcategory = ?');
            values.push(filters.subcategory);
        }

        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ');
        }

        query += ' ORDER BY createdAt DESC';

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
            price, originalPrice, discount, images, sizes, inStock,
            featured, ageRange, agePricing, outOfStockSizes
        } = productData;

        const [result] = await pool.query(
            `INSERT INTO products (
                productId, name, description, category, subcategory, gender,
                price, originalPrice, discount, images, sizes, inStock,
                featured, ageRange, agePricing, outOfStockSizes
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                productId, name, description, category, subcategory, gender,
                price, originalPrice, discount || 0,
                JSON.stringify(images || []),
                JSON.stringify(sizes || []),
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
        
        // First, get the existing product
        const existing = await this.findByProductId(productId);
        if (!existing) {
            throw new Error('Product not found');
        }
        
        // Merge with existing data (only update provided fields)
        const {
            name = existing.name,
            description = existing.description,
            category = existing.category,
            subcategory = existing.subcategory,
            gender = existing.gender,
            price = existing.price,
            originalPrice = existing.originalPrice,
            discount = existing.discount,
            images = existing.images,
            sizes = existing.sizes,
            inStock = existing.inStock,
            featured = existing.featured,
            ageRange = existing.ageRange,
            agePricing = existing.agePricing,
            outOfStockSizes = existing.outOfStockSizes
        } = productData;

        await pool.query(
            `UPDATE products SET
                name = ?, description = ?, category = ?, subcategory = ?, gender = ?,
                price = ?, originalPrice = ?, discount = ?, images = ?, sizes = ?,
                inStock = ?, featured = ?, ageRange = ?, agePricing = ?, outOfStockSizes = ?
            WHERE productId = ?`,
            [
                name, description, category, subcategory, gender,
                price, originalPrice, discount || 0,
                JSON.stringify(images || []),
                JSON.stringify(sizes || []),
                inStock !== false,
                featured || false,
                ageRange || null,
                agePricing ? JSON.stringify(agePricing) : null,
                outOfStockSizes ? JSON.stringify(outOfStockSizes) : JSON.stringify([]),
                productId
            ]
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
        
        return {
            ...row,
            images: typeof row.images === 'string' ? JSON.parse(row.images) : row.images,
            sizes: typeof row.sizes === 'string' ? JSON.parse(row.sizes) : row.sizes,
            agePricing: row.agePricing && typeof row.agePricing === 'string' 
                ? JSON.parse(row.agePricing) 
                : row.agePricing,
            outOfStockSizes: row.outOfStockSizes && typeof row.outOfStockSizes === 'string'
                ? JSON.parse(row.outOfStockSizes)
                : (row.outOfStockSizes || []),
            inStock: Boolean(row.inStock),
            featured: Boolean(row.featured)
        };
    }
}

module.exports = Product;
