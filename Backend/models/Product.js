const { getPool } = require('../config/db');

class Product {
    static async findAll(filters = {}) {
        const pool = getPool();
        // Exclude full images from list - Base64 images are huge (each ~500KB)
        // Frontend uses fallback image for list, full image only on detail page
        let query = `SELECT productId, name, description, category, subcategory, gender,
                     price, originalPrice, discount, sizes, inStock, featured,
                     ageRange, agePricing, createdAt
                     FROM products`;
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

        const [rows] = await pool.query(query, values);
        return rows.map(row => this.parseJsonFieldsLight(row));
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
            featured, ageRange, agePricing
        } = productData;

        // Store images as LONGTEXT (Base64 data URLs)
        const [result] = await pool.query(
            `INSERT INTO products (
                productId, name, description, category, subcategory, gender,
                price, originalPrice, discount, images, sizes, inStock,
                featured, ageRange, agePricing
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                productId, name, description, category, subcategory, gender,
                price, originalPrice, discount || 0,
                JSON.stringify(images || []), // Base64 data URLs stored as JSON array
                JSON.stringify(sizes || []),
                inStock !== false,
                featured || false,
                ageRange || null,
                agePricing ? JSON.stringify(agePricing) : null
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
            agePricing = existing.agePricing
        } = productData;

        await pool.query(
            `UPDATE products SET
                name = ?, description = ?, category = ?, subcategory = ?, gender = ?,
                price = ?, originalPrice = ?, discount = ?, images = ?, sizes = ?,
                inStock = ?, featured = ?, ageRange = ?, agePricing = ?
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
            inStock: Boolean(row.inStock),
            featured: Boolean(row.featured)
        };
    }

    // Light parse for list queries - no images field
    static parseJsonFieldsLight(row) {
        if (!row) return null;
        return {
            ...row,
            images: [],  // empty - frontend uses fallback, detail page fetches full
            sizes: typeof row.sizes === 'string' ? JSON.parse(row.sizes) : (row.sizes || []),
            agePricing: row.agePricing && typeof row.agePricing === 'string'
                ? JSON.parse(row.agePricing)
                : row.agePricing,
            inStock: Boolean(row.inStock),
            featured: Boolean(row.featured)
        };
    }
}

module.exports = Product;
