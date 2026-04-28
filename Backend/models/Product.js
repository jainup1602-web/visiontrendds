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
        
        console.log('=== UPDATE METHOD CALLED ===');
        console.log('productId:', productId);
        console.log('productData received:', JSON.stringify(productData, null, 2));
        
        // First, get the existing product
        const existing = await this.findByProductId(productId);
        if (!existing) {
            throw new Error('Product not found');
        }
        
        console.log('existing.colors:', existing.colors);
        console.log('productData.colors:', productData.colors);
        console.log('productData.colors !== undefined:', productData.colors !== undefined);
        
        // Merge with existing data (only update provided fields)
        const name = productData.name !== undefined ? productData.name : existing.name;
        const description = productData.description !== undefined ? productData.description : existing.description;
        const category = productData.category !== undefined ? productData.category : existing.category;
        const subcategory = productData.subcategory !== undefined ? productData.subcategory : existing.subcategory;
        const gender = productData.gender !== undefined ? productData.gender : existing.gender;
        const price = productData.price !== undefined ? productData.price : existing.price;
        const originalPrice = productData.originalPrice !== undefined ? productData.originalPrice : existing.originalPrice;
        const discount = productData.discount !== undefined ? productData.discount : existing.discount;
        const images = productData.images !== undefined ? productData.images : existing.images;
        const sizes = productData.sizes !== undefined ? productData.sizes : existing.sizes;
        const colors = productData.colors !== undefined ? productData.colors : existing.colors;
        const inStock = productData.inStock !== undefined ? productData.inStock : existing.inStock;
        const featured = productData.featured !== undefined ? productData.featured : existing.featured;
        const ageRange = productData.ageRange !== undefined ? productData.ageRange : existing.ageRange;
        const agePricing = productData.agePricing !== undefined ? productData.agePricing : existing.agePricing;
        const outOfStockSizes = productData.outOfStockSizes !== undefined ? productData.outOfStockSizes : existing.outOfStockSizes;

        console.log('colors after merge:', colors);
        console.log('colors type:', typeof colors, Array.isArray(colors));
        
        const colorsJson = JSON.stringify(colors || []);
        console.log('colors JSON string:', colorsJson);

        const queryParams = [
            name, description, category, subcategory, gender,
            price, originalPrice, discount || 0,
            JSON.stringify(images || []),
            JSON.stringify(sizes || []),
            colorsJson,
            inStock !== false,
            featured || false,
            ageRange || null,
            agePricing ? JSON.stringify(agePricing) : null,
            outOfStockSizes ? JSON.stringify(outOfStockSizes) : JSON.stringify([]),
            productId
        ];
        
        console.log('SQL params[10] (colors):', queryParams[10]);

        await pool.query(
            `UPDATE products SET
                name = ?, description = ?, category = ?, subcategory = ?, gender = ?,
                price = ?, originalPrice = ?, discount = ?, images = ?, sizes = ?, colors = ?,
                inStock = ?, featured = ?, ageRange = ?, agePricing = ?, outOfStockSizes = ?
            WHERE productId = ?`,
            queryParams
        );
        
        console.log('=== UPDATE QUERY EXECUTED ===');

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
            colors: row.colors && typeof row.colors === 'string' ? JSON.parse(row.colors) : (row.colors || []),
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
