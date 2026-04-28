-- 🎯 Add Missing Columns to Products Table
-- Run this query in Hostinger phpMyAdmin or MySQL console

-- Step 1: Add colors column
ALTER TABLE products 
ADD COLUMN colors JSON DEFAULT NULL 
AFTER sizes;

-- Step 2: Add outOfStockSizes column (if not exists)
ALTER TABLE products 
ADD COLUMN outOfStockSizes JSON DEFAULT NULL 
AFTER agePricing;

-- Step 3: Verify columns were added
DESCRIBE products;

-- Step 4: Update existing products with empty arrays (optional)
UPDATE products 
SET colors = '[]' 
WHERE colors IS NULL;

UPDATE products 
SET outOfStockSizes = '[]' 
WHERE outOfStockSizes IS NULL;

-- ✅ Done! Now colors will save properly
