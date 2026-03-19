const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Function to convert image to base64
function imageToBase64(imagePath) {
    try {
        const fullPath = path.join(__dirname, '../../Frontend', imagePath);
        if (fs.existsSync(fullPath)) {
            const imageBuffer = fs.readFileSync(fullPath);
            const base64Image = imageBuffer.toString('base64');
            const ext = path.extname(imagePath).toLowerCase();
            let mimeType = 'image/jpeg';
            
            if (ext === '.png') mimeType = 'image/png';
            else if (ext === '.webp') mimeType = 'image/webp';
            else if (ext === '.jpg' || ext === '.jpeg') mimeType = 'image/jpeg';
            
            return `data:${mimeType};base64,${base64Image}`;
        }
        return null;
    } catch (error) {
        console.error(`Error converting image ${imagePath}:`, error.message);
        return null;
    }
}

async function migrateProducts() {
    console.log('🚀 Starting product migration...\n');
    
    // Load products data from backup file
    const productsBackupPath = path.join(__dirname, '../../Frontend/products.backup.js');
    if (!fs.existsSync(productsBackupPath)) {
        console.error('❌ products.backup.js not found!');
        process.exit(1);
    }
    
    // Read and evaluate the products data
    const productsContent = fs.readFileSync(productsBackupPath, 'utf8');
    let productsData;
    
    try {
        // Use Function constructor to safely evaluate the code
        const func = new Function(productsContent + '; return productsData;');
        productsData = func();
    } catch (error) {
        console.error('❌ Error loading products data:', error.message);
        process.exit(1);
    }
    
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    try {
        let totalProducts = 0;
        let successCount = 0;
        let errorCount = 0;

        // Process each category
        for (const [category, subcategories] of Object.entries(productsData)) {
            console.log(`📦 Processing category: ${category}`);
            
            if (category === 'kids') {
                // Handle kids category with gender subcategories
                for (const [gender, genderSubcategories] of Object.entries(subcategories)) {
                    for (const [subcategory, products] of Object.entries(genderSubcategories)) {
                        if (products.length > 0) {
                            console.log(`  ├─ ${gender} > ${subcategory}: ${products.length} products`);
                            
                            for (let i = 0; i < products.length; i++) {
                                const product = products[i];
                                totalProducts++;
                                
                                try {
                                    // Convert image to base64
                                    const imageBase64 = imageToBase64(product.image);
                                    
                                    // Parse price (remove ₹ and convert to number)
                                    const price = parseFloat(product.price.replace('₹', '').replace(',', ''));
                                    const originalPrice = parseFloat(product.originalPrice.replace('₹', '').replace(',', ''));
                                    
                                    // Calculate discount
                                    const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
                                    
                                    // Prepare images array with base64
                                    const images = imageBase64 ? [imageBase64] : [];
                                    
                                    // Insert product
                                    await connection.query(
                                        `INSERT INTO products 
                                        (productId, name, description, category, subcategory, gender, price, originalPrice, discount, images, sizes, inStock, featured, ageRange, agePricing)
                                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                        [
                                            product.id,
                                            product.title,
                                            product.description,
                                            category,
                                            subcategory,
                                            product.gender || gender,
                                            price,
                                            originalPrice,
                                            discount,
                                            JSON.stringify(images),
                                            JSON.stringify(product.sizes || []),
                                            product.inStock ? 1 : 0,
                                            product.featured ? 1 : 0,
                                            product.ageRange || null,
                                            product.agePricing ? JSON.stringify(product.agePricing) : null
                                        ]
                                    );
                                    
                                    successCount++;
                                    process.stdout.write(`\r  ✓ Migrated: ${successCount}/${totalProducts}`);
                                } catch (error) {
                                    errorCount++;
                                    console.error(`\n  ✗ Error migrating product ${product.id}:`, error.message);
                                }
                            }
                        }
                    }
                }
            } else {
                // Handle other categories
                for (const [subcategory, products] of Object.entries(subcategories)) {
                    if (products.length > 0) {
                        console.log(`  ├─ ${subcategory}: ${products.length} products`);
                        
                        for (let i = 0; i < products.length; i++) {
                            const product = products[i];
                            totalProducts++;
                            
                            try {
                                // Convert image to base64
                                const imageBase64 = imageToBase64(product.image);
                                
                                // Parse price
                                const price = parseFloat(product.price.replace('₹', '').replace(',', ''));
                                const originalPrice = parseFloat(product.originalPrice.replace('₹', '').replace(',', ''));
                                
                                // Calculate discount
                                const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
                                
                                // Prepare images array with base64
                                const images = imageBase64 ? [imageBase64] : [];
                                
                                // Insert product
                                await connection.query(
                                    `INSERT INTO products 
                                    (productId, name, description, category, subcategory, gender, price, originalPrice, discount, images, sizes, inStock, featured, ageRange, agePricing)
                                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                                    [
                                        product.id,
                                        product.title,
                                        product.description,
                                        category,
                                        subcategory,
                                        product.gender || null,
                                        price,
                                        originalPrice,
                                        discount,
                                        JSON.stringify(images),
                                        JSON.stringify(product.sizes || []),
                                        product.inStock ? 1 : 0,
                                        product.featured ? 1 : 0,
                                        product.ageRange || null,
                                        product.agePricing ? JSON.stringify(product.agePricing) : null
                                    ]
                                );
                                
                                successCount++;
                                process.stdout.write(`\r  ✓ Migrated: ${successCount}/${totalProducts}`);
                            } catch (error) {
                                errorCount++;
                                console.error(`\n  ✗ Error migrating product ${product.id}:`, error.message);
                            }
                        }
                    }
                }
            }
            console.log(''); // New line after each category
        }
        
        console.log('\n✅ Migration completed!');
        console.log(`📊 Summary:`);
        console.log(`   Total products: ${totalProducts}`);
        console.log(`   Successfully migrated: ${successCount}`);
        console.log(`   Errors: ${errorCount}`);
        
    } catch (error) {
        console.error('❌ Migration failed:', error);
    } finally {
        await connection.end();
    }
}

migrateProducts();
