-- ============================================
-- STEP 1: Check current table structure
-- ============================================
DESCRIBE products;

-- ============================================
-- STEP 2: Check current colors data for wds14
-- ============================================
SELECT productId, name, colors 
FROM products 
WHERE productId = 'wds14';

-- ============================================
-- STEP 3: Check the column type specifically
-- ============================================
SELECT COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_DEFAULT
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = DATABASE() 
  AND TABLE_NAME = 'products' 
  AND COLUMN_NAME = 'colors';

-- ============================================
-- STEP 4: Try manual update (TEST)
-- Run this query and check if it works
-- ============================================
UPDATE products 
SET colors = '["Red", "Blue", "Green"]' 
WHERE productId = 'wds14';

-- ============================================
-- STEP 5: Verify the update worked
-- ============================================
SELECT productId, name, colors 
FROM products 
WHERE productId = 'wds14';

-- ============================================
-- STEP 6: If Step 4 worked, colors column is fine
-- If Step 4 failed, run this to fix column type:
-- ============================================
-- ALTER TABLE products MODIFY COLUMN colors JSON DEFAULT NULL;
