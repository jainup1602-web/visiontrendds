const mysql = require('mysql2/promise');
require('dotenv').config();

async function addColorsColumn() {
    console.log('🔧 Adding colors and outOfStockSizes columns to products table...');
    
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    try {
        // Check if colors column exists
        const [columns] = await connection.query(`
            SELECT COLUMN_NAME 
            FROM INFORMATION_SCHEMA.COLUMNS 
            WHERE TABLE_SCHEMA = ? 
            AND TABLE_NAME = 'products' 
            AND COLUMN_NAME = 'colors'
        `, [process.env.DB_NAME]);

        if (columns.length === 0) {
            console.log('Adding colors column...');
            await connection.query(`
                ALTER TABLE products 
                ADD COLUMN colors JSON DEFAULT NULL 
                AFTER sizes
            `);
            console.log('✅ colors column added');
        } else {
            console.log('✅ colors column already exists');
        }

        // Check if outOfStockSizes column exists
        const [outOfStockColumns] = await connection.query(`
            SELECT COLUMN_NAME 
            FROM INFORMATION_SCHEMA.COLUMNS 
            WHERE TABLE_SCHEMA = ? 
            AND TABLE_NAME = 'products' 
            AND COLUMN_NAME = 'outOfStockSizes'
        `, [process.env.DB_NAME]);

        if (outOfStockColumns.length === 0) {
            console.log('Adding outOfStockSizes column...');
            await connection.query(`
                ALTER TABLE products 
                ADD COLUMN outOfStockSizes JSON DEFAULT NULL 
                AFTER agePricing
            `);
            console.log('✅ outOfStockSizes column added');
        } else {
            console.log('✅ outOfStockSizes column already exists');
        }

        // Update existing products with empty arrays
        console.log('Updating existing products...');
        await connection.query(`
            UPDATE products 
            SET colors = '[]' 
            WHERE colors IS NULL
        `);
        await connection.query(`
            UPDATE products 
            SET outOfStockSizes = '[]' 
            WHERE outOfStockSizes IS NULL
        `);
        console.log('✅ Existing products updated');

        // Show table structure
        const [structure] = await connection.query('DESCRIBE products');
        console.log('\n📋 Current table structure:');
        console.table(structure);

        console.log('\n🎉 Migration complete! Colors will now save properly.');
        
    } catch (error) {
        console.error('❌ Migration failed:', error.message);
        process.exit(1);
    } finally {
        await connection.end();
    }
}

addColorsColumn();
