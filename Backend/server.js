require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const { connectDB } = require('./config/db');

const app = express();

// Connect to MySQL
connectDB();

// ─── In-Memory Cache ───────────────────────────────────────────────────────
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function setCache(key, data) {
    cache.set(key, { data, ts: Date.now() });
}
function getCache(key) {
    const entry = cache.get(key);
    if (!entry) return null;
    if (Date.now() - entry.ts > CACHE_TTL) { cache.delete(key); return null; }
    return entry.data;
}
function clearCache(pattern) {
    for (const key of cache.keys()) {
        if (!pattern || key.includes(pattern)) cache.delete(key);
    }
}
app.locals.cache = { set: setCache, get: getCache, clear: clearCache };
// ───────────────────────────────────────────────────────────────────────────

// Gzip compression
app.use(compression({ level: 6, threshold: 1024 }));

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// ─── HTTP Cache Headers for GET requests ──────────────────────────────────
app.use((req, res, next) => {
    if (req.method === 'GET') {
        // Products/categories: cache 2 min in browser, 5 min on CDN
        if (req.path.startsWith('/api/products') || req.path.startsWith('/api/categories')) {
            res.set('Cache-Control', 'public, max-age=120, s-maxage=300');
        }
        // Health check: no cache
        if (req.path === '/api/health') {
            res.set('Cache-Control', 'no-store');
        }
    }
    next();
});
// ───────────────────────────────────────────────────────────────────────────

// Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/contact', require('./routes/contact'));

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Vision Trennds API is running', cacheSize: cache.size });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 API: http://localhost:${PORT}/api`);
    console.log(`💾 Database: MySQL`);
});

// Export for Vercel serverless
module.exports = app;
