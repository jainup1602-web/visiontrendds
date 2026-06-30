const express = require('express');
const router = express.Router();
const { getPool } = require('../config/db');

// Get sale settings
router.get('/sale', async (req, res) => {
    try {
        const pool = getPool();
        const [rows] = await pool.query('SELECT value FROM settings WHERE id = "sale"');
        if (rows.length === 0) {
            return res.json({ active: false, discountType: 'percentage', discountValue: 0, bannerText: '' });
        }
        
        let settings = rows[0].value;
        if (typeof settings === 'string') {
            try { settings = JSON.parse(settings); } catch(e) {}
        }
        res.json(settings);
    } catch (error) {
        console.error('Error fetching sale settings:', error);
        res.status(500).json({ message: error.message });
    }
});

// Update sale settings
router.put('/sale', async (req, res) => {
    try {
        const pool = getPool();
        const newSettings = req.body;
        
        // Ensure values are correct types
        const settingsToSave = {
            active: Boolean(newSettings.active),
            discountType: newSettings.discountType === 'flat' ? 'flat' : 'percentage',
            discountValue: Number(newSettings.discountValue) || 0,
            bannerText: newSettings.bannerText || ''
        };

        const jsonStr = JSON.stringify(settingsToSave);
        
        await pool.query(
            'INSERT INTO settings (id, value) VALUES ("sale", ?) ON DUPLICATE KEY UPDATE value = ?', 
            [jsonStr, jsonStr]
        );
        
        res.json(settingsToSave);
    } catch (error) {
        console.error('Error updating sale settings:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
