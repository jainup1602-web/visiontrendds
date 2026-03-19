-- Vision Trennds Database Export
-- Generated: 2026-03-04T18:02:44.329Z

-- Create Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id VARCHAR(50) PRIMARY KEY,
    displayName VARCHAR(100) NOT NULL,
    subcategories JSON,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Products Table
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
    images LONGTEXT,
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
);

-- Insert Categories
INSERT INTO categories (id, displayName, subcategories) VALUES
('mens', 'Men\'s', '[{"id":"shirts","displayName":"Shirts"},{"id":"cordsets","displayName":"Cordsets"},{"id":"kurta","displayName":"Kurta"}]'),
('womens', 'Women\'s', '[{"id":"kurtis","displayName":"Kurtis"},{"id":"short_kurtis","displayName":"Short Kurtis"},{"id":"cordsets","displayName":"Cordsets"},{"id":"dupatta_suits","displayName":"Dupatta Suits"},{"id":"anarkali","displayName":"Anarkali"},{"id":"shirts","displayName":"Shirts"}]'),
('kids', 'Kids', '[{"id":"night_suits","displayName":"Night Suits"},{"id":"cordsets","displayName":"Cordsets"},{"id":"sharara","displayName":"Sharara"},{"id":"frok","displayName":"Frok"},{"id":"lehnga_choli","displayName":"Lehnga Choli"},{"id":"lounge_wear","displayName":"Lounge Wear"}]'),
('bags', 'Bags', '[{"id":"block_print","displayName":"Block Print"}]');

-- Insert Products


-- Total products: 0