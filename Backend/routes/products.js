const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
    try {
        const { category, subcategory, page, limit } = req.query;
        const filters = {};
        if (category) filters.category = category;
        if (subcategory) filters.subcategory = subcategory;
        if (page) filters.page = page;
        if (limit) filters.limit = limit;

        // Cache key based on query params
        const cacheKey = `products:${JSON.stringify(filters)}`;
        const cached = req.app.locals.cache.get(cacheKey);
        if (cached) {
            res.set('X-Cache', 'HIT');
            return res.json(cached);
        }
        
        const result = await Product.findAll(filters);
        req.app.locals.cache.set(cacheKey, result);
        res.set('X-Cache', 'MISS');
        res.json(result);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: error.message });
    }
});

// Get single product
router.get('/:id', async (req, res) => {
    try {
        // Disable caching for single product requests
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');
        
        const product = await Product.findByProductId(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: error.message });
    }
});

// Create product
router.post('/', async (req, res) => {
    try {
        // Check if productId already exists
        const existing = await Product.findByProductId(req.body.productId);
        if (existing) {
            return res.status(400).json({ 
                message: `Product ID "${req.body.productId}" already exists. Please use a different ID.` 
            });
        }
        const newProduct = await Product.create(req.body);
        req.app.locals.cache.clear('products:'); // invalidate cache
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: `Duplicate product ID. Please refresh and try again.` });
        }
        res.status(400).json({ message: error.message });
    }
});

// Update product
router.put('/:id', async (req, res) => {
    try {
        const oldId = req.params.id;
        const newId = req.body.productId;
        
        // Clear cache immediately for this product
        req.app.locals.cache.clear('products:');

        // If ID is being changed
        if (newId && newId !== oldId) {
            const existing = await Product.findByProductId(newId);
            if (existing) {
                return res.status(400).json({ message: `Product ID "${newId}" already exists` });
            }
            const oldProduct = await Product.findByProductId(oldId);
            if (!oldProduct) return res.status(404).json({ message: 'Product not found' });

            const newProductData = { ...oldProduct, ...req.body, productId: newId };
            await Product.create(newProductData);
            await Product.delete(oldId);
            const updated = await Product.findByProductId(newId);
            return res.json(updated);
        }

        const product = await Product.update(oldId, req.body);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(400).json({ message: error.message });
    }
});

// Update colors only - dedicated endpoint
router.put('/:id/colors', async (req, res) => {
    try {
        const pool = require('../config/db').getPool();
        const { colors } = req.body;
        const productId = req.params.id;

        // Parse colors - handle array or string
        let colorsArray = [];
        if (Array.isArray(colors)) {
            colorsArray = colors;
        } else if (typeof colors === 'string') {
            try { colorsArray = JSON.parse(colors); } catch(e) {
                colorsArray = colors.split(',').map(c => c.trim()).filter(c => c);
            }
        }

        const colorsJson = JSON.stringify(colorsArray);
        await pool.query('UPDATE products SET colors = ? WHERE productId = ?', [colorsJson, productId]);
        
        req.app.locals.cache.clear('products:');
        
        // Return updated product
        const [rows] = await pool.query('SELECT productId, name, colors FROM products WHERE productId = ?', [productId]);
        if (rows.length === 0) return res.status(404).json({ message: 'Product not found' });
        
        const row = rows[0];
        let savedColors = [];
        if (row.colors) {
            if (Array.isArray(row.colors)) savedColors = row.colors;
            else if (typeof row.colors === 'string') {
                try { savedColors = JSON.parse(row.colors); } catch(e) { savedColors = []; }
            }
        }
        
        res.json({ success: true, productId, colors: savedColors });
    } catch (error) {
        console.error('Error updating colors:', error);
        res.status(500).json({ message: error.message });
    }
});

// Delete product
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Product.delete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Product not found' });
        }
        req.app.locals.cache.clear('products:');
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
