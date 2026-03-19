const express = require('express');
const router = express.Router();
const multer = require('multer');

// Configure multer to store in memory (not file system)
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit (Base64 encoding increases size by ~33%)
    },
    fileFilter: function (req, file, cb) {
        // Accept images only
        const allowedTypes = /jpeg|jpg|png|gif|webp/;
        const extname = allowedTypes.test(file.originalname.toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'));
        }
    }
});

// Upload single image - Convert to Base64
router.post('/image', upload.single('image'), (req, res) => {
    try {
        console.log('Upload request received');
        
        if (!req.file) {
            console.log('No file in request');
            return res.status(400).json({ message: 'No file uploaded' });
        }

        console.log('File received:', {
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size
        });

        // Convert buffer to base64
        const base64Image = req.file.buffer.toString('base64');
        const mimeType = req.file.mimetype;
        
        // Create data URL format: data:image/png;base64,iVBORw0KG...
        const dataUrl = `data:${mimeType};base64,${base64Image}`;

        console.log('Image converted to Base64, size:', dataUrl.length, 'characters');

        res.json({
            message: 'Image uploaded successfully',
            imageData: dataUrl,
            size: req.file.size,
            mimeType: mimeType
        });
    } catch (error) {
        console.error('Error in upload route:', error);
        res.status(500).json({ message: error.message, stack: error.stack });
    }
});

// Upload multiple images - Convert to Base64
router.post('/images', upload.array('images', 5), (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'No files uploaded' });
        }

        const imageDataArray = req.files.map(file => {
            const base64Image = file.buffer.toString('base64');
            const mimeType = file.mimetype;
            return `data:${mimeType};base64,${base64Image}`;
        });

        res.json({
            message: 'Images uploaded successfully',
            imageData: imageDataArray
        });
    } catch (error) {
        console.error('Error in multi-upload route:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

module.exports = router;
