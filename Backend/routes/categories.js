const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Reorder categories
router.post('/reorder', async (req, res) => {
    try {
        const { order } = req.body; // array of category IDs in new order
        const pool = require('../config/db').getPool();
        for (let i = 0; i < order.length; i++) {
            await pool.query('UPDATE categories SET sortOrder = ? WHERE id = ?', [i, order[i]]);
        }
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: error.message });
    }
});

// Get single category
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({ message: error.message });
    }
});

// Create category
router.post('/', async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.status(201).json(newCategory);
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(400).json({ message: error.message });
    }
});

// Update category
router.put('/:id', async (req, res) => {
    try {
        const category = await Category.update(req.params.id, req.body);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(400).json({ message: error.message });
    }
});

// Delete category
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Category.delete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
