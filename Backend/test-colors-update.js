// Test script to debug colors update issue
const { connectDB, getPool } = require('./config/db');

async function testColorsUpdate() {
    // Connect to database first
    await connectDB();
    const pool = getPool();
    
    try {
        console.log('🔍 Testing colors update...\n');
        
        // 1. Check if colors column exists
        console.log('1️⃣ Checking table structure:');
        const [columns] = await pool.query('DESCRIBE products');
        const colorsColumn = columns.find(col => col.Field === 'colors');
        console.log('Colors column:', colorsColumn);
        console.log('');
        
        // 2. Get a test product
        console.log('2️⃣ Fetching test product (wds14):');
        const [products] = await pool.query('SELECT productId, name, colors FROM products WHERE productId = ?', ['wds14']);
        if (products.length === 0) {
            console.log('❌ Product wds14 not found!');
            process.exit(1);
        }
        console.log('Current product:', products[0]);
        console.log('');
        
        // 3. Try to update colors directly
        console.log('3️⃣ Updating colors to ["Red", "Blue", "Green"]:');
        const testColors = JSON.stringify(['Red', 'Blue', 'Green']);
        console.log('JSON string to save:', testColors);
        
        const [updateResult] = await pool.query(
            'UPDATE products SET colors = ? WHERE productId = ?',
            [testColors, 'wds14']
        );
        console.log('Update result:', updateResult);
        console.log('');
        
        // 4. Verify the update
        console.log('4️⃣ Verifying update:');
        const [updatedProducts] = await pool.query('SELECT productId, name, colors FROM products WHERE productId = ?', ['wds14']);
        console.log('Updated product:', updatedProducts[0]);
        console.log('Colors value:', updatedProducts[0].colors);
        console.log('Colors type:', typeof updatedProducts[0].colors);
        console.log('');
        
        // 5. Parse and display
        if (updatedProducts[0].colors) {
            const parsed = typeof updatedProducts[0].colors === 'string' 
                ? JSON.parse(updatedProducts[0].colors) 
                : updatedProducts[0].colors;
            console.log('Parsed colors:', parsed);
        }
        
        console.log('\n✅ Test completed!');
        process.exit(0);
        
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

testColorsUpdate();
