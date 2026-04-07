const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
    try {
        const { category, subcategory } = req.query;
        const filters = {};
        
        if (category) filters.category = category;
        if (subcategory) filters.subcategory = subcategory;
        
        const products = await Product.findAll(filters);
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: error.message });
    }
});

// Get single product
router.get('/:id', async (req, res) => {
    try {
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
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(400).json({ message: error.message });
    }
});

// Update product
router.put('/:id', async (req, res) => {
    try {
        const oldId = req.params.id;
        const newId = req.body.productId;

        // If ID is being changed
        if (newId && newId !== oldId) {
            // Check new ID doesn't already exist
            const existing = await Product.findByProductId(newId);
            if (existing) {
                return res.status(400).json({ message: `Product ID "${newId}" already exists` });
            }
            // Get old product data, merge with new data
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

// Delete product
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Product.delete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
