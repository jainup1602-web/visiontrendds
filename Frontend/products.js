// Products Data for Vision Trennds
// Version: 5.0 - Age-based pricing feature added for kids products
// Last Updated: 2026-02-14
'use strict';

// Configuration
const PRODUCTS_CONFIG = {
    whatsappNumber: '919829639639',
    fallbackImage: 'product/color_logo.png',
    imageLoadTimeout: 5000
};

// Products Data Structure with Comprehensive Subcategories
const productsData = {
    mens: {
        shirts: [
            {
                id: 'ms1',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Premium quality pure cotton half sleeve shirt with vibrant prints. Perfect for casual outings and daily wear. Comfortable fit with breathable fabric.',
                image: 'product/shirt/cotton_shirt1.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms2',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Stylish pure cotton half sleeve shirt with attractive prints. Ideal for casual wear with superior comfort and durability.',
                image: 'product/shirt/cotton_shirt2.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF', 
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true, 
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms3',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Elegant pure cotton half sleeve shirt featuring modern prints. Lightweight and breathable for all-day comfort.',
                image: 'product/shirt/cotton_shirt3.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms4',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Trendy pure cotton half sleeve shirt with eye-catching prints. Perfect blend of style and comfort for everyday wear.',
                image: 'product/shirt/cotton_shirt4.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms5',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Classic pure cotton half sleeve shirt with beautiful prints. Soft fabric ensures maximum comfort throughout the day.',
                image: 'product/shirt/cotton_shirt5.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms6',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Contemporary pure cotton half sleeve shirt with unique prints. Designed for comfort and style in casual settings.',
                image: 'product/shirt/cotton_shirt6.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms7',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Fashionable pure cotton half sleeve shirt with designer prints. Easy to maintain and perfect for daily use.',
                image: 'product/shirt/cotton_shirt7.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms8',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Sophisticated pure cotton half sleeve shirt with artistic prints. Combines elegance with casual comfort.',
                image: 'product/shirt/cotton_shirt8.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms9',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Vibrant pure cotton half sleeve shirt with colorful prints. Breathable fabric keeps you cool and comfortable.',
                image: 'product/shirt/cotton_shirt9.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms10',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Smart pure cotton half sleeve shirt with modern prints. Versatile design suitable for various occasions.',
                image: 'product/shirt/blue_design.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms11',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Premium pure cotton half sleeve shirt in classic blue. Timeless design with superior fabric quality.',
                image: 'product/shirt/cotton_shirt_blue.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms12',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Elegant pure cotton half sleeve shirt in pristine white. Clean look with comfortable fit for any occasion.',
                image: 'product/shirt/cotton_shirt_white.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms13',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Crisp pure cotton half sleeve shirt in white. Essential wardrobe piece with excellent breathability.',
                image: 'product/shirt/cotton_white_shirt.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms14',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Bright pure cotton half sleeve shirt in cheerful yellow. Stand out with this vibrant and comfortable design.',
                image: 'product/shirt/cotton_yellow_shirt.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms15',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Bold pure cotton half sleeve shirt in striking red. Make a statement with this eye-catching casual shirt.',
                image: 'product/shirt/cotton_red_shirt.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            },
            {
                id: 'ms16',
                title: 'Pure cotton Printed Half sleeves Shirt',
                description: 'Stylish pure cotton half sleeve shirt with premium quality fabric. Perfect for casual wear with lasting comfort.',
                image: 'product/shirt/cotton_shirt1.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹999',
                badge: '35% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure cotton Printed Half sleeves Shirt.'
            }
        ],
        cordsets: [],
        kurta: [],
        jacket_sets: [],
        short_kurta: []
    },
    womens: {
        kurtis: [],
        short_kurtis: [
            {
                id: 'wsk1',
                title: 'Short Kurta Fabric Staple',
                description: 'Short kurta fabric staple (no shrinkage). Very comfortable for daily wear.',
                image: 'product/set/0012.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹850',
                badge: '24% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Short Kurta Fabric Staple.'
            },
            {
                id: 'wsk2',
                title: 'Peplum Short Kurti with Embroidery',
                description: 'Peplum short kurti, detailed with embroidery. Pure cotton fabric.',
                image: 'product/set/001.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹850',
                badge: '24% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Peplum Short Kurti with Embroidery.'
            },
            {
                id: 'wsk3',
                title: 'Cotton A-line Short Kurta',
                description: 'Cotton A-line short kurta. Comfortable and stylish for casual wear.',
                image: 'product/set/006.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹850',
                badge: '24% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Cotton A-line Short Kurta.'
            },
            {
                id: 'wsk4',
                title: 'Cotton A-line Short Kurta',
                description: 'Cotton A-line short kurta. Perfect for summer season.',
                image: 'product/set/0018.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹850',
                badge: '24% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Cotton A-line Short Kurta.'
            },
            {
                id: 'wsk5',
                title: 'Cotton A-line Short Kurta Golden Print',
                description: 'Cotton A-line short kurta with golden print. Elegant and comfortable.',
                image: 'product/set/0011.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹850',
                badge: '24% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Cotton A-line Short Kurta Golden Print.'
            },
            {
                id: 'wsk6',
                title: 'Cotton Peplum Short Kurta',
                description: 'Cotton peplum short kurta. Stylish design for casual occasions.',
                image: 'product/set/004.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹590',
                originalPrice: '₹790',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Cotton Peplum Short Kurta.'
            },
            {
                id: 'wsk7',
                title: 'Cotton Sleeveless Short Kurta',
                description: 'Cotton sleeveless short kurta. Perfect for hot summer days.',
                image: 'product/set/0010.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹850',
                badge: '24% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Cotton Sleeveless Short Kurta.'
            },
            {
                id: 'wsk8',
                title: 'Short Kurta Fabric Staple',
                description: 'Short kurta fabric staple (no shrinkage). Comfortable and durable.',
                image: 'product/set/009.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹850',
                badge: '24% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Short Kurta Fabric Staple.'
            },
            {
                id: 'wsk9',
                title: 'Glass Tissue Fabric Shirts with Inner',
                description: 'Glass tissue fabric shirts with inner. Elegant and comfortable.',
                image: 'product/set/008.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1490',
                originalPrice: '₹1990',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['36', '38', '40'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Glass Tissue Fabric Shirts with Inner.'
            }
        ],
        shirts: [],
        meedees: [],
        jumpsuits: [],
        cordsets: [
            {
                id: 'wc1',
                title: 'Block n Floral Prints Comfortable Cordset',
                description: 'Long cordset with block and floral prints. Perfect for casual and semi-casual occasions. Made from pure 60/60 cotton fabric for maximum comfort. Summer collection.',
                image: 'product/cardset/cardser1.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1590',
                originalPrice: '₹2199',
                badge: '28% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Block n Floral Prints Comfortable Cordset.'
            },
            {
                id: 'wc3',
                title: 'Block n Floral Prints Comfortable Cordset',
                description: 'Elegant long cordset with beautiful block and floral prints. Suitable for casual and semi-casual looks. Premium 60/60 cotton fabric. Summer collection.',
                image: 'product/cardset/cardset3.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1590',
                originalPrice: '₹2199',
                badge: '28% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Block n Floral Prints Comfortable Cordset.'
            },
            {
                id: 'wc4',
                title: 'Block n Floral Prints Comfortable Cordset',
                description: 'Trendy long cordset with eye-catching block and floral prints. Perfect for casual and semi-casual events. Pure 60/60 cotton material. Summer collection.',
                image: 'product/cardset/cardset4.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1590',
                originalPrice: '₹2199',
                badge: '28% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Block n Floral Prints Comfortable Cordset.'
            },
            {
                id: 'wc5',
                title: 'Block n Floral Prints Comfortable Cordset',
                description: 'Classic long cordset with attractive block and floral prints. Great for casual and semi-casual occasions. Comfortable 60/60 cotton fabric. Summer collection.',
                image: 'product/cardset/cardset5.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1590',
                originalPrice: '₹2199',
                badge: '28% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Block n Floral Prints Comfortable Cordset.'
            },
            {
                id: 'wc6',
                title: 'Block n Floral Prints Comfortable Cordset',
                description: 'Contemporary long cordset with unique block and floral prints. Designed for casual and semi-casual wear. Pure 60/60 cotton quality. Summer collection.',
                image: 'product/cardset/cardset6.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1590',
                originalPrice: '₹2199',
                badge: '28% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Block n Floral Prints Comfortable Cordset.'
            },
            {
                id: 'wc7',
                title: 'Block n Floral Prints Comfortable Cordset',
                description: 'Fashionable long cordset with designer block and floral prints. Perfect for casual and semi-casual settings. Premium 60/60 cotton. Summer collection.',
                image: 'product/cardset/cardset7.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1590',
                originalPrice: '₹2199',
                badge: '28% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Block n Floral Prints Comfortable Cordset.'
            },
            {
                id: 'wc8',
                title: 'Block n Floral Prints Comfortable Cordset',
                description: 'Sophisticated long cordset with artistic block and floral prints. Ideal for casual and semi-casual looks. Pure 60/60 cotton fabric. Summer collection.',
                image: 'product/cardset/cardset8.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1590',
                originalPrice: '₹2199',
                badge: '28% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Block n Floral Prints Comfortable Cordset.'
            },
            {
                id: 'wc9',
                title: 'Block n Floral Prints Comfortable Cordset',
                description: 'Vibrant long cordset with colorful block and floral prints. Great for casual and semi-casual occasions. Breathable 60/60 cotton. Summer collection.',
                image: 'product/cardset/cardset9.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1590',
                originalPrice: '₹2199',
                badge: '28% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Block n Floral Prints Comfortable Cordset.'
            },
            {
                id: 'wc10',
                title: 'Block n Floral Prints Comfortable Cordset',
                description: 'Smart long cordset with modern block and floral prints. Suitable for casual and semi-casual wear. Pure 60/60 cotton material. Summer collection.',
                image: 'product/cardset/cardset10.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1590',
                originalPrice: '₹2199',
                badge: '28% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Block n Floral Prints Comfortable Cordset.'
            },
            {
                id: 'wc11',
                title: 'Block n Floral Prints Comfortable Cordset',
                description: 'Premium long cordset with elegant block and floral prints. Perfect for casual and semi-casual events. Comfortable 60/60 cotton. Summer collection.',
                image: 'product/cardset/cardset11.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1590',
                originalPrice: '₹2199',
                badge: '28% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Block n Floral Prints Comfortable Cordset.'
            },
            {
                id: 'wc12',
                title: 'Block n Floral Prints Comfortable Cordset',
                description: 'Stylish long cordset with premium block and floral prints. Ideal for casual and semi-casual looks. Pure 60/60 cotton quality. Summer collection.',
                image: 'product/cardset/cardset12.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1590',
                originalPrice: '₹2199',
                badge: '28% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Block n Floral Prints Comfortable Cordset.'
            },
            {
                id: 'wc13',
                title: 'Cotton Silk Cord Sets',
                description: 'Cotton silk cord sets. Very comfortable and home washable.',
                image: 'product/cardset/14.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1290',
                originalPrice: '₹1790',
                badge: '28% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Cotton Silk Cord Sets.'
            },
            {
                id: 'wc14',
                title: 'Cotton Embroidered Cordsets',
                description: 'Cotton embroidered cordsets. Beautiful embroidery work.',
                image: 'product/cardset/13.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1490',
                originalPrice: '₹1990',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Cotton Embroidered Cordsets.'
            },
            {
                id: 'wc15',
                title: 'Premium Cotton Embroidered Cordsets',
                description: 'Premium cotton Embroidered cordsets. Classy party wear.',
                image: 'product/cardset/12.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2490',
                originalPrice: '₹3290',
                badge: '24% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Premium Cotton Embroidered Cordsets.'
            },
            {
                id: 'wc18',
                title: 'A-line Cordsets for Women',
                description: 'A-line cords sets for women. Casual and semi casual style. Fabric 60/60 cotton.',
                image: 'product/cardset/0023.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1490',
                originalPrice: '₹1990',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the A-line Cordsets for Women.'
            },
            {
                id: 'wc19',
                title: 'A-line Cordsets for Women',
                description: 'A-line cords sets for women. Casual and semi casual style. Fabric 60/60 cotton.',
                image: 'product/cardset/0024.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1490',
                originalPrice: '₹1990',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the A-line Cordsets for Women.'
            },
            {
                id: 'wc20',
                title: 'A-line Cordsets for Women',
                description: 'A-line cords sets for women. Casual and semi casual style. Fabric 60/60 cotton.',
                image: 'product/cardset/0025.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1490',
                originalPrice: '₹1990',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the A-line Cordsets for Women.'
            },
            {
                id: 'wc21',
                title: 'A-line Long Cords',
                description: 'A-line long cords for women. Casual and semi casual style. Fabric 60/60 cotton.',
                image: 'product/cardset/0036.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1450',
                originalPrice: '₹1590',
                badge: '9% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', '2XL', '3XL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the A-line Long Cords.'
            },
            {
                id: 'wc22',
                title: 'Cotton Long Co-ords',
                description: 'Cotton Long Co-ords for women. Casual and semi casual style. Fabric 60/60 cotton.',
                image: 'product/cardset/0026.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1450',
                originalPrice: '₹1590',
                badge: '9% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', '2XL', '3XL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Cotton Long Co-ords.'
            },
            {
                id: 'wc23',
                title: 'Cotton Long Co-ords',
                description: 'Cotton Long Co-ords for women. Casual and semi casual style. Fabric 60/60 cotton.',
                image: 'product/cardset/0022.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1450',
                originalPrice: '₹1590',
                badge: '9% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', '2XL', '3XL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Cotton Long Co-ords.'
            },
            {
                id: 'wc24',
                title: 'A-line Cordsets for Women',
                description: 'A-line cords sets for women. Casual and semi casual style. Fabric 60/60 cotton.',
                image: 'product/cardset/0020.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1590',
                originalPrice: '₹2190',
                badge: '27% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the A-line Cordsets for Women.'
            },
            {
                id: 'wc25',
                title: 'Pure Cotton Kurta with Pant',
                description: 'Pure Cotton Kurta with Pant for women. Comfortable and stylish.',
                image: 'product/cardset/0037.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1400',
                originalPrice: '₹1550',
                badge: '10% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', '2XL', '3XL'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure Cotton Kurta with Pant.'
            },
            {
                id: 'wc26',
                title: 'Pure Cotton Kurta with Pant',
                description: 'Pure Cotton Kurta with Pant for women. Comfortable and stylish.',
                image: 'product/cardset/0027.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1400',
                originalPrice: '₹1550',
                badge: '10% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', '2XL', '3XL'],
                inStock: true,  
                whatsappMessage: 'Hi! I\'m interested in the Pure Cotton Kurta with Pant.'
            },
            {
                id: 'wc27',
                title: 'Linen Kurta with Pant and Dupatta',
                description: 'Linen kurta with pant and dupatta. Premium quality fabric.',
                image: 'product/cardset/0032.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2990',
                originalPrice: '₹3490',
                badge: '14% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,  
                whatsappMessage: 'Hi! I\'m interested in the Linen Kurta with Pant and Dupatta.'
            },
            {
                id: 'wc28',
                title: 'Pure Tissue Kurta with Banarsi Dupatta',
                description: 'Pure Tissue Kurta and Divider with Banarsi Dupatta. Elegant ethnic wear.',
                image: 'product/cardset/0030.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹4390',
                originalPrice: '₹5490',
                badge: '20% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,  
                whatsappMessage: 'Hi! I\'m interested in the Pure Tissue Kurta with Banarsi Dupatta.'
            },
            {
                id: 'wc29',
                title: 'Pure Silk Kurta with Banarsi Dupatta',
                description: 'Pure Silk Kurta and Divider with Banarsi Dupatta. Premium ethnic collection.',
                image: 'product/cardset/0028.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹4390',
                originalPrice: '₹5490',
                badge: '20% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,  
                whatsappMessage: 'Hi! I\'m interested in the Pure Silk Kurta with Banarsi Dupatta.'
            },
            {
                id: 'wc30',
                title: 'Linen Kurta with Pant and Dupatta',
                description: 'Linen kurta with pant and dupatta. Comfortable and stylish.',
                image: 'product/cardset/0029.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2490',
                originalPrice: '₹2990',
                badge: '17% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'], 
                inStock: true,  
                whatsappMessage: 'Hi! I\'m interested in the Linen Kurta with Pant and Dupatta.'
            },
            {
                id: 'wc31',
                title: 'Linen Kurta with Pant and Dupatta',
                description: 'Linen kurta with pant and dupatta. Premium quality.',
                image: 'product/cardset/0031.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2790',
                originalPrice: '₹3290',
                badge: '15% OFF',
                badgeType: 'sale',
                sizes: ['M', 'L', 'XL', 'XXL'],
                inStock: true,  
                whatsappMessage: 'Hi! I\'m interested in the Linen Kurta with Pant and Dupatta.'
            }
        ],
        dresses: [],
        dupatta_suits: [
            {
                id: 'wds1',
                title: 'Mul Cotton Dupatta Set with Lining',
                description: 'Mul cotton dupatta set with lining. Hand block print. Very comfortable and classy.',
                image: 'product/set/0013.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2490',
                originalPrice: '₹3290',
                badge: '24% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Mul Cotton Dupatta Set with Lining.'
            },
            {
                id: 'wds2',
                title: 'Cotton Block Print Dupatta Set',
                description: 'Cotton block print dupatta set. Beautiful traditional design.',
                image: 'product/set/005.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2090',
                originalPrice: '₹2790',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Cotton Block Print Dupatta Set.'
            },
            {
                id: 'wds3',
                title: 'Elegant Applic Work Suits with Tissue Dupatta',
                description: 'Elegant applic work suits with tissue dupatta. Perfect for special occasions.',
                image: 'product/set/003.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2490',
                originalPrice: '₹3290',
                badge: '24% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Elegant Applic Work Suits with Tissue Dupatta.'
            },
            {
                id: 'wds4',
                title: 'Gajji Silk Dupatta Set with Cotton Lining',
                description: 'Gajji silk dupatta set with cotton lining. Summery fabric, very comfortable.',
                image: 'product/set/0014.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2490',
                originalPrice: '₹3290',
                badge: '24% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Gajji Silk Dupatta Set with Cotton Lining.'
            },
            {
                id: 'wds5',
                title: 'Mul Chanderi Dupatta Sets',
                description: 'Mul chanderi dupatta sets. Embroidery in A-line kurta and scalloping in dupatta.',
                image: 'product/set/002.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2390',
                originalPrice: '₹3190',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Mul Chanderi Dupatta Sets.'
            },
            {
                id: 'wds6',
                title: 'Mul Chanderi A-line Suits',
                description: 'Mul chanderi A-line suits with beautiful neckline. Elegant design.',
                image: 'product/set/0017.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2690',
                originalPrice: '₹3590',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Mul Chanderi A-line Suits.'
            },
            {
                id: 'wds7',
                title: 'Cotton Silk with Katdana Work Doriya Dupatta Set',
                description: 'Cotton silk with katdana work doriya dupatta set. Beautiful traditional design.',
                image: 'product/set/0015.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2090',
                originalPrice: '₹2790',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Cotton Silk with Katdana Work Doriya Dupatta Set.'
            },
            {
                id: 'wds8',
                title: 'Hand Block Anarkali Dupatta Sets',
                description: 'Hand block anarkali dupatta sets. Self print in base. Very elegant.',
                image: 'product/set/0019.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2690',
                originalPrice: '₹3590',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Hand Block Anarkali Dupatta Sets.'
            },
            {
                id: 'wds9',
                title: 'Hand Block Dupatta Set',
                description: 'Hand block dupatta set. No shrinkage, no colour bleeding.',
                image: 'product/cardset/10.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2090',
                originalPrice: '₹2790',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Hand Block Dupatta Set.'
            },
            {
                id: 'wds10',
                title: 'Hand Block Dupatta Set',
                description: 'Hand block dupatta set. No shrinkage, no colour bleeding. Color option.',
                image: 'product/cardset/11.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2090',
                originalPrice: '₹2790',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44', '46'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Hand Block Dupatta Set.'
            }
        ],
        pant_sets: [],
        lounge_wear: [],
        anarkali: [
            {
                id: 'wa1',
                title: 'Pure Cotton Angrakha Anarkali with Pant Dupatta',
                description: 'Pure cotton Angrakha Anarkali with pant dupatta. Perfect for festive occasions.',
                image: 'product/set/007.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2990',
                originalPrice: '₹3990',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Pure Cotton Angrakha Anarkali with Pant Dupatta.'
            },
            {
                id: 'wa2',
                title: 'Hand Block Katdana Work Anarkali',
                description: 'Hand block katdana work anarkali. Full sleeves with pant dupatta. Very elegant.',
                image: 'product/set/0016.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹2990',
                originalPrice: '₹3990',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['38', '40', '42', '44'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Hand Block Katdana Work Anarkali.'
            }
        ],
        heavy_suits: [],
        quilted_jackets: [],
        sets: []
    },
    kids: {
        boys: {
            night_suits: [
                {
                    id: 'bns1',
                    title: 'Kids Unisex Night Dress',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage.',
                    image: 'product/kids/6.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹650',
                    originalPrice: '₹890',
                    badge: '27% OFF',
                    badgeType: 'sale',
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-15 years',
                    gender: 'Unisex',
                    agePricing: {
                        '1-2': { price: 650, size: '16-18' },
                        '2-3': { price: 650, size: '18-20' },
                        '3-4': { price: 650, size: '20-22' },
                        '4-5': { price: 690, size: '22-24' },
                        '5-6': { price: 690, size: '24-26' },
                        '6-7': { price: 750, size: '26-28' },
                        '8-9': { price: 750, size: '28-30' },
                        '10-11': { price: 790, size: '30-32' },
                        '12-13': { price: 790, size: '32-34' },
                        '13-14': { price: 890, size: '34-36' },
                        '14-15': { price: 990, size: '36' }
                    },
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Kids Unisex Night Dress.'
                },
                {
                    id: 'bns2',
                    title: 'Kids Unisex Night Dress',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage.',
                    image: 'product/kids/23.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹650',
                    originalPrice: '₹890',
                    badge: '27% OFF',
                    badgeType: 'sale',
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-15 years',
                    gender: 'Unisex',
                    agePricing: {
                        '1-2': { price: 650, size: '16-18' },
                        '2-3': { price: 650, size: '18-20' },
                        '3-4': { price: 650, size: '20-22' },
                        '4-5': { price: 690, size: '22-24' },
                        '5-6': { price: 690, size: '24-26' },
                        '6-7': { price: 750, size: '26-28' },
                        '8-9': { price: 750, size: '28-30' },
                        '10-11': { price: 790, size: '30-32' },
                        '12-13': { price: 790, size: '32-34' },
                        '13-14': { price: 890, size: '34-36' },
                        '14-15': { price: 990, size: '36' }
                    },
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Kids Unisex Night Dress.'
                },
                {
                    id: 'bns3',
                    title: 'Kids Unisex Night Dress',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage.',
                    image: 'product/kids/8.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹650',
                    originalPrice: '₹890',
                    badge: '27% OFF',
                    badgeType: 'sale',
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-15 years',
                    gender: 'Unisex',
                    agePricing: {
                        '1-2': { price: 650, size: '16-18' },
                        '2-3': { price: 650, size: '18-20' },
                        '3-4': { price: 650, size: '20-22' },
                        '4-5': { price: 690, size: '22-24' },
                        '5-6': { price: 690, size: '24-26' },
                        '6-7': { price: 750, size: '26-28' },
                        '8-9': { price: 750, size: '28-30' },
                        '10-11': { price: 790, size: '30-32' },
                        '12-13': { price: 790, size: '32-34' },
                        '13-14': { price: 890, size: '34-36' },
                        '14-15': { price: 990, size: '36' }
                    },
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Kids Unisex Night Dress.'
                },
                {
                    id: 'bns4',
                    title: 'Kids Unisex Night Dress',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage.',
                    image: 'product/kids/37.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹650',
                    originalPrice: '₹890',
                    badge: '27% OFF',
                    badgeType: 'sale',
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-15 years',
                    gender: 'Unisex',
                    agePricing: {
                        '1-2': { price: 650, size: '16-18' },
                        '2-3': { price: 650, size: '18-20' },
                        '3-4': { price: 650, size: '20-22' },
                        '4-5': { price: 690, size: '22-24' },
                        '5-6': { price: 690, size: '24-26' },
                        '6-7': { price: 750, size: '26-28' },
                        '8-9': { price: 750, size: '28-30' },
                        '10-11': { price: 790, size: '30-32' },
                        '12-13': { price: 790, size: '32-34' },
                        '13-14': { price: 890, size: '34-36' },
                        '14-15': { price: 990, size: '36' }
                    },
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Kids Unisex Night Dress.'
                },
                {
                    id: 'bns5',
                    title: 'Kids Unisex Night Dress',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage.',
                    image: 'product/kids/38.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹650',
                    originalPrice: '₹890',
                    badge: '27% OFF',
                    badgeType: 'sale',
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-15 years',
                    gender: 'Unisex',
                    agePricing: {
                        '1-2': { price: 650, size: '16-18' },
                        '2-3': { price: 650, size: '18-20' },
                        '3-4': { price: 650, size: '20-22' },
                        '4-5': { price: 690, size: '22-24' },
                        '5-6': { price: 690, size: '24-26' },
                        '6-7': { price: 750, size: '26-28' },
                        '8-9': { price: 750, size: '28-30' },
                        '10-11': { price: 790, size: '30-32' },
                        '12-13': { price: 790, size: '32-34' },
                        '13-14': { price: 890, size: '34-36' },
                        '14-15': { price: 990, size: '36' }
                    },
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Kids Unisex Night Dress.'
                },
                {
                    id: 'bns6',
                    title: 'Kids Unisex Night Dress',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage.',
                    image: 'product/kids/39.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹650',  
                    originalPrice: '₹890',
                    badge: '27% OFF',
                    badgeType: 'sale',
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-15 years',
                    gender: 'Unisex',
                    agePricing: {
                        '1-2': { price: 650, size: '16-18' },
                        '2-3': { price: 650, size: '18-20' },
                        '3-4': { price: 650, size: '20-22' },
                        '4-5': { price: 690, size: '22-24' },
                        '5-6': { price: 690, size: '24-26' },
                        '6-7': { price: 750, size: '26-28' },
                        '8-9': { price: 750, size: '28-30' },
                        '10-11': { price: 790, size: '30-32' },
                        '12-13': { price: 790, size: '32-34' },
                        '13-14': { price: 890, size: '34-36' },
                        '14-15': { price: 990, size: '36' }
                    },
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Kids Unisex Night Dress.'
                },
                {
                    id: 'bns7',
                    title: 'Kids Unisex Night Dress',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage.',
                    image: 'product/kids/31.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹650',
                    originalPrice: '₹890',
                    badge: '27% OFF',
                    badgeType: 'sale',
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-15 years',
                    gender: 'Unisex',
                    agePricing: {
                        '1-2': { price: 650, size: '16-18' },
                        '2-3': { price: 650, size: '18-20' },
                        '3-4': { price: 650, size: '20-22' },
                        '4-5': { price: 690, size: '22-24' },
                        '5-6': { price: 690, size: '24-26' },
                        '6-7': { price: 750, size: '26-28' },
                        '8-9': { price: 750, size: '28-30' },
                        '10-11': { price: 790, size: '30-32' },
                        '12-13': { price: 790, size: '32-34' },
                        '13-14': { price: 890, size: '34-36' },
                        '14-15': { price: 990, size: '36' }
                    },
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Kids Unisex Night Dress.'
                },
                {
                    id: 'bns8',
                    title: 'Kids Unisex Night Dress',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage.',
                    image: 'product/kids/20.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹650',
                    originalPrice: '₹890',
                    badge: '27% OFF',
                    badgeType: 'sale',
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-15 years',
                    gender: 'Unisex',
                    agePricing: {
                        '1-2': { price: 650, size: '16-18' },
                        '2-3': { price: 650, size: '18-20' },
                        '3-4': { price: 650, size: '20-22' },
                        '4-5': { price: 690, size: '22-24' },
                        '5-6': { price: 690, size: '24-26' },
                        '6-7': { price: 750, size: '26-28' },
                        '8-9': { price: 750, size: '28-30' },
                        '10-11': { price: 790, size: '30-32' },
                        '12-13': { price: 790, size: '32-34' },
                        '13-14': { price: 890, size: '34-36' },
                        '14-15': { price: 990, size: '36' }
                    },
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Kids Unisex Night Dress.'
                },
                {
                    id: 'bns9',
                    title: 'Kids Unisex Night Dress',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage.',
                    image: 'product/kids/6.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹650',
                    originalPrice: '₹890',
                    badge: '27% OFF',
                    badgeType: 'sale',
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-15 years',
                    gender: 'Unisex',
                    agePricing: {
                        '1-2': { price: 650, size: '16-18' },
                        '2-3': { price: 650, size: '18-20' },
                        '3-4': { price: 650, size: '20-22' },
                        '4-5': { price: 690, size: '22-24' },
                        '5-6': { price: 690, size: '24-26' },
                        '6-7': { price: 750, size: '26-28' },
                        '8-9': { price: 750, size: '28-30' },
                        '10-11': { price: 790, size: '30-32' },
                        '12-13': { price: 790, size: '32-34' },
                        '13-14': { price: 890, size: '34-36' },
                        '14-15': { price: 990, size: '36' }
                    },
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Kids Unisex Night Dress.'
                },
                
            ],
            cordsets: [
                {
                    id: 'bc1',
                    title: 'Boys Cordsets',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage.',
                    image: 'product/kids/25.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹690',
                    originalPrice: '₹890',
                    badge: '22% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '1-2': { price: 690, size: '16-18' },
                        '2-3': { price: 690, size: '18-20' },
                        '3-4': { price: 750, size: '20-22' },
                        '4-5': { price: 750, size: '22-24' },
                        '5-6': { price: 790, size: '24-26' },
                        '6-7': { price: 790, size: '26-28' },
                        '8-9': { price: 850, size: '28-30' },
                        '10-11': { price: 850, size: '30-32' },
                        '11-12': { price: 890, size: '32-34' },
                        '13-14': { price: 990, size: '34-36' }
                    },
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-14 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Boys Cordsets.'
                },
                {
                    id: 'bc2',
                    title: 'Boys Cordsets',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage.',
                    image: 'product/kids/5.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹690',
                    originalPrice: '₹990',
                    badge: '30% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '1-2': { price: 690, size: '16-18' },
                        '2-3': { price: 690, size: '18-20' },
                        '3-4': { price: 750, size: '20-22' },
                        '4-5': { price: 750, size: '22-24' },
                        '5-6': { price: 790, size: '24-26' },
                        '6-7': { price: 790, size: '26-28' },
                        '8-9': { price: 850, size: '28-30' },
                        '10-11': { price: 850, size: '30-32' },
                        '11-12': { price: 890, size: '32-34' },
                        '13-14': { price: 990, size: '34-36' }
                    },
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-14 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Boys Cordsets.'
                },
                {
                    id: 'bc3',
                    title: 'Boys Cordsets',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage.',
                    image: 'product/kids/3.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹690',
                    originalPrice: '₹1090',
                    badge: '37% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '1-2': { price: 690, size: '16-18' },
                        '2-3': { price: 690, size: '18-20' },
                        '3-4': { price: 750, size: '20-22' },
                        '4-5': { price: 750, size: '22-24' },
                        '5-6': { price: 790, size: '24-26' },
                        '6-7': { price: 790, size: '26-28' },
                        '8-9': { price: 850, size: '28-30' },
                        '10-11': { price: 850, size: '30-32' },
                        '11-12': { price: 890, size: '32-34' },
                        '13-14': { price: 990, size: '34-36' }
                    },
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-14 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Boys Cordsets.'
                },
                {
                    id: 'bc4',
                    title: 'Boys Cordsets',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage.',
                    image: 'product/kids/4.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹690',
                    originalPrice: '₹1190',
                    badge: '42% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '1-2': { price: 690, size: '16-18' },
                        '2-3': { price: 690, size: '18-20' },
                        '3-4': { price: 750, size: '20-22' },
                        '4-5': { price: 750, size: '22-24' },
                        '5-6': { price: 790, size: '24-26' },
                        '6-7': { price: 790, size: '26-28' },
                        '8-9': { price: 850, size: '28-30' },
                        '10-11': { price: 850, size: '30-32' },
                        '11-12': { price: 890, size: '32-34' },
                        '13-14': { price: 990, size: '34-36' }
                    },
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-14 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Boys Cordsets.'
                },
                {
                    id: 'bc5',
                    title: 'Boys Cordsets',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage.',
                    image: 'product/kids/35.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹690',
                    originalPrice: '₹1290', 
                    badge: '47% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '1-2': { price: 690, size: '16-18' },
                        '2-3': { price: 690, size: '18-20' },
                        '3-4': { price: 750, size: '20-22' },
                        '4-5': { price: 750, size: '22-24' },
                        '5-6': { price: 790, size: '24-26' },
                        '6-7': { price: 790, size: '26-28' },
                        '8-9': { price: 850, size: '28-30' },
                        '10-11': { price: 850, size: '30-32' },
                        '11-12': { price: 890, size: '32-34' },
                        '13-14': { price: 990, size: '34-36' }
                    },
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-14 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Boys Cordsets.'
                }
            ],
            shirts: [],
            kurta: [],
            jacket_sets: [],
            dhoti_kurta: []
        },
        girls: {
            sharara: [
                {
                    id: 'gs1',
                    title: 'Girls Sharara Set - Festive Collection',
                    description: 'Festive collection sharara set. Fabric silk with chiffon dupatta. No maintenance, no colour bleeding, no shrinkage.',
                    image: 'product/kids/21.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹1390',
                    originalPrice: '₹1890',
                    badge: '26% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '4-5': { price: 1390, size: '22-24' },
                        '5-6': { price: 1450, size: '24-26' },
                        '6-7': { price: 1450, size: '26-28' },
                        '8-9': { price: 1490, size: '28-30' },
                        '10-11': { price: 1490, size: '30-32' },
                        '12-13': { price: 1590, size: '32-34' },
                        '13-14': { price: 1590, size: '34-36' },
                        '15-16': { price: 1690, size: '36' },
                        'M/38': { price: 1890, size: '38' }
                    },
                    sizes: ['22', '24', '26', '28', '30', '32', '34', '36', '38'],
                    ageRange: '4-16 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Girls Sharara Set - Festive Collection.'
                },
                {
                    id: 'gs2',
                    title: 'Girls Sharara Set - Festive Collection',
                    description: 'Festive collection sharara set. Fabric silk with chiffon dupatta. No maintenance, no colour bleeding, no shrinkage.',
                    image: 'product/kids/7.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹1390',
                    originalPrice: '₹2290',
                    badge: '39% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '4-5': { price: 1390, size: '22-24' },
                        '5-6': { price: 1450, size: '24-26' },
                        '6-7': { price: 1450, size: '26-28' },
                        '8-9': { price: 1490, size: '28-30' },
                        '10-11': { price: 1490, size: '30-32' },
                        '12-13': { price: 1590, size: '32-34' },
                        '13-14': { price: 1590, size: '34-36' },
                        '15-16': { price: 1690, size: '36' },
                        'M/38': { price: 1890, size: '38' }
                    },
                    sizes: ['22', '24', '26', '28', '30', '32', '34', '36', '38'],
                    ageRange: '4-16 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Girls Sharara Set - Festive Collection.'
                },
                {
                    id: 'gs3',
                    title: 'Girls Sharara Set - Cotton',
                    description: 'Festive collection sharara set. Pure cotton with chiffon dupatta. No colour bleeding, no shrinkage.',
                    image: 'product/kids/18.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹1390',
                    originalPrice: '₹1890',
                    badge: '26% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '4-5': { price: 1390, size: '22-24' },
                        '5-6': { price: 1450, size: '24-26' },
                        '6-7': { price: 1450, size: '26-28' },
                        '8-9': { price: 1490, size: '28-30' },
                        '10-11': { price: 1490, size: '30-32' },
                        '12-13': { price: 1590, size: '32-34' },
                        '13-14': { price: 1590, size: '34-36' },
                        '15-16': { price: 1690, size: '36' },
                        'M/38': { price: 1890, size: '38' }
                    },
                    sizes: ['22', '24', '26', '28', '30', '32', '34', '36', '38'],
                    ageRange: '4-16 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Girls Sharara Set - Cotton.'
                }
            ],
            cordsets: [
                {
                    id: 'gc1',
                    title: 'Butterfly Cordsets for Girls',
                    description: 'Butterfly cords for angels of your family. Pure cotton fabric, no shrinkage.',
                    image: 'product/kids/15.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹750',
                    originalPrice: '₹1090',
                    badge: '31% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '6-12m': { price: 750, size: '14' },
                        '1-2': { price: 790, size: '16-18' },
                        '3-4': { price: 850, size: '20-22' },
                        '4-5': { price: 850, size: '22-24' },
                        '5-6': { price: 890, size: '24-26' },
                        '6-7': { price: 890, size: '26-28' },
                        '8-9': { price: 950, size: '28-30' },
                        '10-11': { price: 950, size: '30-32' },
                        '12-13': { price: 1050, size: '32-34' },
                        '13-14': { price: 1050, size: '34-36' },
                        '14-15': { price: 1150, size: '36' }
                    },
                    sizes: ['14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '6 months to 16 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Butterfly Cordsets for Girls.'
                },
                {
                    id: 'gc2',
                    title: 'Butterfly Cordsets for Girls',
                    description: 'Butterfly cords for angels of your family. Pure cotton fabric, no shrinkage.',
                    image: 'product/kids/16.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹750',
                    originalPrice: '₹1190',
                    badge: '37% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '6-12m': { price: 750, size: '14' },
                        '1-2': { price: 790, size: '16-18' },
                        '3-4': { price: 850, size: '20-22' },
                        '4-5': { price: 850, size: '22-24' },
                        '5-6': { price: 890, size: '24-26' },
                        '6-7': { price: 890, size: '26-28' },
                        '8-9': { price: 950, size: '28-30' },
                        '10-11': { price: 950, size: '30-32' },
                        '12-13': { price: 1050, size: '32-34' },
                        '13-14': { price: 1050, size: '34-36' },
                        '14-15': { price: 1150, size: '36' }
                    },
                    sizes: ['14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '6 months to 16 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Butterfly Cordsets for Girls.'
                },
                {
                    id: 'gc3',
                    title: 'Butterfly Cordsets for Girls',
                    description: 'Butterfly cords for angels of your family. Pure cotton fabric, no shrinkage.',
                    image: 'product/kids/26.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹750',
                    originalPrice: '₹1290',
                    badge: '42% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '6-12m': { price: 750, size: '14' },
                        '1-2': { price: 790, size: '16-18' },
                        '3-4': { price: 850, size: '20-22' },
                        '4-5': { price: 850, size: '22-24' },
                        '5-6': { price: 890, size: '24-26' },
                        '6-7': { price: 890, size: '26-28' },
                        '8-9': { price: 950, size: '28-30' },
                        '10-11': { price: 950, size: '30-32' },
                        '12-13': { price: 1050, size: '32-34' },
                        '13-14': { price: 1050, size: '34-36' },
                        '14-15': { price: 1150, size: '36' }
                    },
                    sizes: ['14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '6 months to 16 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Butterfly Cordsets for Girls.'
                },
                {
                    id: 'gc4',
                    title: 'Butterfly Cordsets for Girls',
                    description: 'Butterfly cords for angels of your family. Pure cotton fabric, no shrinkage.',
                    image: 'product/kids/17.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹750',
                    originalPrice: '₹1390',
                    badge: '46% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '6-12m': { price: 750, size: '14' },
                        '1-2': { price: 790, size: '16-18' },
                        '3-4': { price: 850, size: '20-22' },
                        '4-5': { price: 850, size: '22-24' },
                        '5-6': { price: 890, size: '24-26' },
                        '6-7': { price: 890, size: '26-28' },
                        '8-9': { price: 950, size: '28-30' },
                        '10-11': { price: 950, size: '30-32' },
                        '12-13': { price: 1050, size: '32-34' },
                        '13-14': { price: 1050, size: '34-36' },
                        '14-15': { price: 1150, size: '36' }
                    },
                    sizes: ['14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '6 months to 16 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Butterfly Cordsets for Girls.'
                },
                {
                    id: 'gc5',
                    title: 'Butterfly Cordsets for Girls',
                    description: 'Butterfly cords for angels of your family. Pure cotton fabric, no shrinkage.',
                    image: 'product/kids/34.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹750',
                    originalPrice: '₹1490',
                    badge: '50% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '6-12m': { price: 750, size: '14' },
                        '1-2': { price: 790, size: '16-18' },
                        '3-4': { price: 850, size: '20-22' },
                        '4-5': { price: 850, size: '22-24' },
                        '5-6': { price: 890, size: '24-26' },
                        '6-7': { price: 890, size: '26-28' },
                        '8-9': { price: 950, size: '28-30' },
                        '10-11': { price: 950, size: '30-32' },
                        '12-13': { price: 1050, size: '32-34' },
                        '13-14': { price: 1050, size: '34-36' },
                        '14-15': { price: 1150, size: '36' }
                    },
                    sizes: ['14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '6 months to 16 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Butterfly Cordsets for Girls.'
                },
                {
                    id: 'gc6',
                    title: 'Coat Cordsets for Girls',
                    description: 'Coat cords for cutiepie of your family, some different look. Pure cotton fabric, no shrinkage.',
                    image: 'product/kids/42.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹750',
                    originalPrice: '₹1090',
                    badge: '31% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '6-12m': { price: 750, size: '14' },
                        '1-2': { price: 790, size: '16-18' },
                        '3-4': { price: 850, size: '20-22' },
                        '4-5': { price: 850, size: '22-24' },
                        '5-6': { price: 890, size: '24-26' },
                        '6-7': { price: 890, size: '26-28' },
                        '8-9': { price: 950, size: '28-30' },
                        '10-11': { price: 950, size: '30-32' },
                        '12-13': { price: 1050, size: '32-34' },
                        '13-14': { price: 1050, size: '34-36' },
                        '14-15': { price: 1150, size: '36' }
                    },
                    sizes: ['14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '6 months to 16 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Coat Cordsets for Girls.'
                },
                {
                    id: 'gc7',
                    title: 'Coat Cordsets for Girls',
                    description: 'Coat cords for cutiepie of your family, some different look. Pure cotton fabric, no shrinkage.',
                    image: 'product/kids/33.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹750',
                    originalPrice: '₹1190',
                    badge: '37% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '6-12m': { price: 750, size: '14' },
                        '1-2': { price: 790, size: '16-18' },
                        '3-4': { price: 850, size: '20-22' },
                        '4-5': { price: 850, size: '22-24' },
                        '5-6': { price: 890, size: '24-26' },
                        '6-7': { price: 890, size: '26-28' },
                        '8-9': { price: 950, size: '28-30' },
                        '10-11': { price: 950, size: '30-32' },
                        '12-13': { price: 1050, size: '32-34' },
                        '13-14': { price: 1050, size: '34-36' },
                        '14-15': { price: 1150, size: '36' }
                    },
                    sizes: ['14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '6 months to 16 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Coat Cordsets for Girls.'
                },
                {
                    id: 'gc8',
                    title: 'Coat Cordsets for Girls',
                    description: 'Coat cords for cutiepie of your family, some different look. Pure cotton fabric, no shrinkage.',
                    image: 'product/kids/28.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹750',
                    originalPrice: '₹1290',
                    badge: '42% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '6-12m': { price: 750, size: '14' },
                        '1-2': { price: 790, size: '16-18' },
                        '3-4': { price: 850, size: '20-22' },
                        '4-5': { price: 850, size: '22-24' },
                        '5-6': { price: 890, size: '24-26' },
                        '6-7': { price: 890, size: '26-28' },
                        '8-9': { price: 950, size: '28-30' },
                        '10-11': { price: 950, size: '30-32' },
                        '12-13': { price: 1050, size: '32-34' },
                        '13-14': { price: 1050, size: '34-36' },
                        '14-15': { price: 1150, size: '36' }
                    },
                    sizes: ['14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '6 months to 16 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Coat Cordsets for Girls.'
                },
                {
                    id: 'gc9',
                    title: 'Coat Cordsets for Girls',
                    description: 'Coat cords for cutiepie of your family, some different look. Pure cotton fabric, no shrinkage.',
                    image: 'product/kids/40.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹750',
                    originalPrice: '₹1390',
                    badge: '46% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '6-12m': { price: 750, size: '14' },
                        '1-2': { price: 790, size: '16-18' },
                        '3-4': { price: 850, size: '20-22' },
                        '4-5': { price: 850, size: '22-24' },
                        '5-6': { price: 890, size: '24-26' },
                        '6-7': { price: 890, size: '26-28' },
                        '8-9': { price: 950, size: '28-30' },
                        '10-11': { price: 950, size: '30-32' },
                        '12-13': { price: 1050, size: '32-34' },
                        '13-14': { price: 1050, size: '34-36' },
                        '14-15': { price: 1150, size: '36' }
                    },
                    sizes: ['14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '6 months to 16 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Coat Cordsets for Girls.'
                }
            ],
            lehnga_choli: [
                {
                    id: 'gd1',
                    title: 'Dhoti Set for Girls',
                    description: 'Dhoti sets for girls. Glaze cotton fabric detailed with sequence lace.',
                    image: 'product/kids/24.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    price: '₹890',
                    originalPrice: '₹1190',
                    badge: '25% OFF',
                    badgeType: 'sale',
                    sizes: ['14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '6 months to 16 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Dhoti Set for Girls.'
                }
            ],
            kurtis: [],
            pants: [],
            lounge_wear: [
                {
                    id: 'gu1',
                    title: 'Kids Unisex Summer Wear',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage. For both boys and girls.',
                    image: 'product/kids/29.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    price: '₹650',
                    originalPrice: '₹890',
                    badge: '27% OFF',
                    badgeType: 'sale',
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-15 years',
                    gender: 'Unisex',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Kids Unisex Summer Wear.'
                },
                {
                    id: 'gu2',
                    title: 'Kids Unisex Summer Wear',
                    description: 'Best product for summer. Best item for gifts. Pure cotton, home washable, no shrinkage. For both boys and girls.',
                    image: 'product/kids/23.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    price: '₹990',
                    originalPrice: '₹1390',
                    badge: '29% OFF',
                    badgeType: 'sale',
                    sizes: ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36'],
                    ageRange: '1-15 years',
                    gender: 'Unisex',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Kids Unisex Summer Wear.'
                }
            ],
            frok: [
                {
                    id: 'gf1',
                    title: 'Summer Frock for Girls',
                    description: 'Cute girl tunics, summer frock. Pure cotton half sleeves dress, very comfortable, washable.',
                    image: 'product/kids/13.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹490',
                    originalPrice: '₹790',
                    badge: '38% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '3-4': { price: 490, size: '22' },
                        '4-5': { price: 490, size: '24' },
                        '5-6': { price: 590, size: '26' },
                        '7-8': { price: 590, size: '28' }
                    },
                    sizes: ['22', '24', '26', '28'],
                    ageRange: '4-8 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Summer Frock for Girls.'
                },
                {
                    id: 'gf2',
                    title: 'Summer Frock for Girls',
                    description: 'Cute girl tunics, summer frock. Pure cotton half sleeves dress, very comfortable, washable.',
                    image: 'product/kids/1.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹490',
                    originalPrice: '₹790',
                    badge: '38% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '3-4': { price: 490, size: '22' },
                        '4-5': { price: 490, size: '24' },
                        '5-6': { price: 590, size: '26' },
                        '7-8': { price: 590, size: '28' }
                    },
                    sizes: ['22', '24', '26', '28'],
                    ageRange: '4-8 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Summer Frock for Girls.'
                },
                {
                    id: 'gf3',
                    title: 'Summer Frock for Girls',
                    description: 'Cute girl tunics, summer frock. Pure cotton half sleeves dress, very comfortable, washable.',
                    image: 'product/kids/14.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹490',
                    originalPrice: '₹790',
                    badge: '38% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '3-4': { price: 490, size: '22' },
                        '4-5': { price: 490, size: '24' },
                        '5-6': { price: 590, size: '26' },
                        '7-8': { price: 590, size: '28' }
                    },
                    sizes: ['22', '24', '26', '28'],
                    ageRange: '4-8 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Summer Frock for Girls.'
                },
                {
                    id: 'gf4',
                    title: 'Summer Frock for Girls',
                    description: 'Cute girl tunics, summer frock. Pure cotton half sleeves dress, very comfortable, washable.',
                    image: 'product/kids/30.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹490',
                    originalPrice: '₹790',
                    badge: '38% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '3-4': { price: 490, size: '22' },
                        '4-5': { price: 490, size: '24' },
                        '5-6': { price: 590, size: '26' },
                        '7-8': { price: 590, size: '28' }
                    },
                    sizes: ['22', '24', '26', '28'],
                    ageRange: '4-8 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Summer Frock for Girls.'
                },
                {
                    id: 'gf5',
                    title: 'Summer Frock for Girls',
                    description: 'Cute girl tunics, summer frock. Pure cotton half sleeves dress, very comfortable, washable.',
                    image: 'product/kids/27.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹490',
                    originalPrice: '₹790',
                    badge: '38% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '3-4': { price: 490, size: '22' },
                        '4-5': { price: 490, size: '24' },
                        '5-6': { price: 590, size: '26' },
                        '7-8': { price: 590, size: '28' }
                    },
                    sizes: ['22', '24', '26', '28'],
                    ageRange: '4-8 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Summer Frock for Girls.'
                },
                {
                    id: 'gf6',
                    title: 'Summer Frock for Girls',
                    description: 'Cute girl tunics, summer frock. Pure cotton half sleeves dress, very comfortable, washable.',
                    image: 'product/kids/19.webp',
                    fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                    category: 'kids',
                    price: '₹490',
                    originalPrice: '₹790',
                    badge: '38% OFF',
                    badgeType: 'sale',
                    agePricing: {
                        '3-4': { price: 490, size: '22' },
                        '4-5': { price: 490, size: '24' },
                        '5-6': { price: 590, size: '26' },
                        '7-8': { price: 590, size: '28' }
                    },
                    sizes: ['22', '24', '26', '28'],
                    ageRange: '4-8 years',
                    inStock: true,
                    whatsappMessage: 'Hi! I\'m interested in the Summer Frock for Girls.'
                }
            ],
            anarkali: []
        }
    },
    bags: {
        block_print: [
            {
                id: 'bh1',
                title: 'Cross Body Style Hand Bag',
                description: 'Cross body style hand bag, traditional indian textile art.',
                image: 'product/bags/1.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹990',
                originalPrice: '₹1290',
                badge: '23% OFF',
                badgeType: 'sale',
                sizes: ['One Size'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Cross Body Style Hand Bag.'
            },
            {
                id: 'bh2',
                title: 'Printed Sling Bag',
                description: 'Printed sling bag, vibrant paisley pattern.',
                image: 'product/bags/2.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹790',
                originalPrice: '₹1090',
                badge: '28% OFF',
                badgeType: 'sale',
                sizes: ['One Size'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Printed Sling Bag.'
            },
            {
                id: 'bh3',
                title: 'Patch Work Sling Bag',
                description: 'Patch work sling bag. Spacious bag.',
                image: 'product/bags/3.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹690',
                originalPrice: '₹990',
                badge: '30% OFF',
                badgeType: 'sale',
                sizes: ['One Size'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Patch Work Sling Bag.'
            },
            {
                id: 'bh4',
                title: 'Indigo Leaf Print Set Handbag',
                description: 'Indigo Leaf Print Set: A larger structured handbag with a matching wallet, featuring a classic indigo and white leaf pattern. Accented with dark brown handles and gold-toned hardware.',
                image: 'product/bags/4.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹990',
                originalPrice: '₹1290',
                badge: '23% OFF',
                badgeType: 'sale',
                sizes: ['One Size'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Indigo Leaf Print Set Handbag.'
            },
            {
                id: 'bh5',
                title: 'Sling Bag Easy to Carry',
                description: 'Sling bag, easy to carry. Compact and stylish.',
                image: 'product/bags/8.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹650',
                originalPrice: '₹890',
                badge: '27% OFF',
                badgeType: 'sale',
                sizes: ['One Size'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Sling Bag Easy to Carry.'
            },
            {
                id: 'bh6',
                title: 'Utility Kit Variety Print Bags Set of 3',
                description: 'Utility kit, variety print bags. Set of 3. Water proof.',
                image: 'product/bags/5.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹590',
                originalPrice: '₹890',
                badge: '34% OFF',
                badgeType: 'sale',
                sizes: ['One Size'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Utility Kit Variety Print Bags Set of 3.'
            },
            {
                id: 'bh7',
                title: 'Detachable Sling Bag Block Print',
                description: 'Detachable sling bag, block print bag.',
                image: 'product/bags/6.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹690',
                originalPrice: '₹990',
                badge: '30% OFF',
                badgeType: 'sale',
                sizes: ['One Size'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Detachable Sling Bag Block Print.'
            },
            {
                id: 'bh8',
                title: 'Laptop Block Print Bag',
                description: 'Laptop block print bag. Spacious and protective.',
                image: 'product/bags/9.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1090',
                originalPrice: '₹1490',
                badge: '27% OFF',
                badgeType: 'sale',
                sizes: ['One Size'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Laptop Block Print Bag.'
            },
            {
                id: 'bh9',
                title: 'Katha Work Printed Laptop Bag',
                description: 'Katha work printed laptop bag. Detachable sling.',
                image: 'product/bags/10.webp',
                fallbackImage: PRODUCTS_CONFIG.fallbackImage,
                price: '₹1490',
                originalPrice: '₹1990',
                badge: '25% OFF',
                badgeType: 'sale',
                sizes: ['One Size'],
                inStock: true,
                whatsappMessage: 'Hi! I\'m interested in the Katha Work Printed Laptop Bag.'
            },
           
        ]
    },
    bedsheets: {
        block_print: []
    },
    accessories: {
        dupatta: [],
        stole: [],
        shawl: [],
        cotton_pants: [],
        cotton_skirts: []
    }
};

// Utility functions for products
const productUtils = {
    // Generate WhatsApp URL with product image
    generateWhatsAppURL(message, productImage = null) {
        let fullMessage = message;
        
        if (productImage) {
            const currentDomain = window.location.origin;
            const fullImageURL = `${currentDomain}/${productImage}`;
            // Add image URL for reference
            fullMessage = `${message}\n\n🖼️ Image: ${fullImageURL}`;
        }
        
        return `https://wa.me/${PRODUCTS_CONFIG.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    },

    // Get all products as flat array
    getAllProducts() {
        const allProducts = [];
        
        Object.keys(productsData).forEach(category => {
            if (category === 'kids') {
                Object.keys(productsData.kids).forEach(gender => {
                    Object.keys(productsData.kids[gender]).forEach(subcategory => {
                        productsData.kids[gender][subcategory].forEach(product => {
                            allProducts.push({
                                ...product,
                                category: 'kids',
                                gender,
                                subcategory
                            });
                        });
                    });
                });
            } else {
                Object.keys(productsData[category]).forEach(subcategory => {
                    productsData[category][subcategory].forEach(product => {
                        allProducts.push({
                            ...product,
                            category,
                            subcategory
                        });
                    });
                });
            }
        });
        
        return allProducts;
    },

    // Get product by ID
    getProductById(productId) {
        const allProducts = this.getAllProducts();
        return allProducts.find(product => product.id === productId);
    },

    // Get products by category
    getProductsByCategory(category) {
        if (!productsData[category]) return [];
        
        const products = [];
        
        if (category === 'kids') {
            Object.keys(productsData.kids).forEach(gender => {
                Object.keys(productsData.kids[gender]).forEach(subcategory => {
                    productsData.kids[gender][subcategory].forEach(product => {
                        products.push({
                            ...product,
                            category: 'kids',
                            gender,
                            subcategory
                        });
                    });
                });
            });
        } else {
            Object.keys(productsData[category]).forEach(subcategory => {
                productsData[category][subcategory].forEach(product => {
                    products.push({
                        ...product,
                        category,
                        subcategory
                    });
                });
            });
        }
        
        return products;
    },

    // Get products by subcategory
    getProductsBySubcategory(category, subcategory) {
        if (!productsData[category]) return [];
        
        if (category === 'kids') {
            const products = [];
            Object.keys(productsData.kids).forEach(gender => {
                if (productsData.kids[gender][subcategory]) {
                    productsData.kids[gender][subcategory].forEach(product => {
                        products.push({
                            ...product,
                            category: 'kids',
                            gender,
                            subcategory
                        });
                    });
                }
            });
            return products;
        }
        
        if (!productsData[category][subcategory]) return [];
        
        return productsData[category][subcategory].map(product => ({
            ...product,
            category,
            subcategory
        }));
    },

    // Search products
    searchProducts(query) {
        const allProducts = this.getAllProducts();
        const searchTerm = query.toLowerCase();
        
        return allProducts.filter(product => 
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.subcategory.toLowerCase().includes(searchTerm)
        );
    }
};

