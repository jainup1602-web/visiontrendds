const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/Dev/OneDrive/Desktop/visiontrends/vt-secure-panel-x7k9';

const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // 1. Add admin-popup.js script tag if not already present
    if (!content.includes('admin-popup.js')) {
        // Add it right after config.js or before </body>
        if (content.includes('<script src="config.js">')) {
            content = content.replace(
                '<script src="config.js"></script>',
                '<script src="config.js"></script>\n    <script src="admin-popup.js"></script>'
            );
            changed = true;
        } else if (content.includes('</body>')) {
            content = content.replace(
                '</body>',
                '    <script src="admin-popup.js"></script>\n</body>'
            );
            changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(filePath, content);
        console.log('Added admin-popup.js to', file);
    }
});

console.log('Done adding popup script to all pages.');
