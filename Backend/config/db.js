const mysql = require('mysql2/promise');

let pool;

const connectDB = async () => {
    try {
        pool = mysql.createPool({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'visiontrennds',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        // Test connection
        const connection = await pool.getConnection();
        console.log('✅ MySQL Connected Successfully');
        connection.release();

        // Create tables if they don't exist
        await createTables();
    } catch (error) {
        console.error('❌ MySQL Connection Error:', error.message);
        process.exit(1);
    }
};

const createTables = async () => {
    try {
        // Create categories table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS categories (
                id VARCHAR(50) PRIMARY KEY,
                displayName VARCHAR(100) NOT NULL,
                subcategories JSON,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);

        // Create products table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS products (
                id INT AUTO_INCREMENT PRIMARY KEY,
                productId VARCHAR(50) UNIQUE NOT NULL,
                name VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                category VARCHAR(50) NOT NULL,
                subcategory VARCHAR(50) NOT NULL,
                gender ENUM('boys', 'girls', 'Unisex') DEFAULT NULL,
                price DECIMAL(10, 2) NOT NULL,
                originalPrice DECIMAL(10, 2) NOT NULL,
                discount INT DEFAULT 0,
                images JSON,
                sizes JSON,
                inStock BOOLEAN DEFAULT TRUE,
                featured BOOLEAN DEFAULT FALSE,
                ageRange VARCHAR(50) DEFAULT NULL,
                agePricing JSON DEFAULT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                INDEX idx_category (category),
                INDEX idx_subcategory (subcategory),
                INDEX idx_productId (productId),
                INDEX idx_featured (featured)
            )
        `);

        console.log('✅ MySQL Tables Created/Verified');
    } catch (error) {
        console.error('❌ Error creating tables:', error.message);
    }
};

const getPool = () => {
    if (!pool) {
        throw new Error('Database pool not initialized. Call connectDB first.');
    }
    return pool;
};

module.exports = { connectDB, getPool };
