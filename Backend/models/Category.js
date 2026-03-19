const { getPool } = require('../config/db');

class Category {
    static async findAll() {
        const pool = getPool();
        const [rows] = await pool.query('SELECT * FROM categories ORDER BY displayName');
        return rows.map(row => ({
            ...row,
            subcategories: typeof row.subcategories === 'string' 
                ? JSON.parse(row.subcategories) 
                : row.subcategories
        }));
    }

    static async findById(id) {
        const pool = getPool();
        const [rows] = await pool.query('SELECT * FROM categories WHERE id = ?', [id]);
        if (rows.length === 0) return null;
        
        const row = rows[0];
        return {
            ...row,
            subcategories: typeof row.subcategories === 'string' 
                ? JSON.parse(row.subcategories) 
                : row.subcategories
        };
    }

    static async create(categoryData) {
        const pool = getPool();
        const { id, displayName, subcategories } = categoryData;

        await pool.query(
            'INSERT INTO categories (id, displayName, subcategories) VALUES (?, ?, ?)',
            [id, displayName, JSON.stringify(subcategories || [])]
        );

        return await this.findById(id);
    }

    static async update(id, categoryData) {
        const pool = getPool();
        const { displayName, subcategories } = categoryData;

        await pool.query(
            'UPDATE categories SET displayName = ?, subcategories = ? WHERE id = ?',
            [displayName, JSON.stringify(subcategories || []), id]
        );

        return await this.findById(id);
    }

    static async delete(id) {
        const pool = getPool();
        const [result] = await pool.query('DELETE FROM categories WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = Category;
