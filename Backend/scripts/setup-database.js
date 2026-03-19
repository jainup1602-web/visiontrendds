const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function setupDatabase() {
    console.log('🔧 Setting up database...');
    
    // Connect without database to create it
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        multipleStatements: true
    });

    try {
        // Create database if it doesn't exist
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
        console.log(`✅ Database '${process.env.DB_NAME}' created/verified`);

        // Use the database
        await connection.query(`USE ${process.env.DB_NAME}`);

        // Drop existing tables to recreate them
        console.log('🗑️  Dropping existing tables...');
        await connection.query('DROP TABLE IF EXISTS products');
        await connection.query('DROP TABLE IF EXISTS categories');

        // Read and execute SQL file
        const sqlFile = path.join(__dirname, '..', 'visiontrennds_export.sql');
        const sql = fs.readFileSync(sqlFile, 'utf8');
        
        await connection.query(sql);
        console.log('✅ Tables created and data imported');
        console.log('🎉 Database setup complete!');
        
    } catch (error) {
        console.error('❌ Setup failed:', error.message);
        process.exit(1);
    } finally {
        await connection.end();
    }
}

setupDatabase();
