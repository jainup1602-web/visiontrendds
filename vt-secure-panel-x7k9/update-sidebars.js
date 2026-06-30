const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/Dev/OneDrive/Desktop/visiontrends/vt-secure-panel-x7k9';

const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'sale-settings.html' && f !== 'offer-management.html');

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('offer-management.html')) {
        content = content.replace(
            /<li><a href="sale-settings\.html">.*?<\/a><\/li>/g,
            '<li><a href="offer-management.html"><i class="fas fa-percent"></i> Offer Management</a></li>\n            <li><a href="sale-settings.html"><i class="fas fa-tags"></i> Sale Banner</a></li>'
        );
        // Also update text of sale-settings to "Sale Banner" if already added
        content = content.replace('Sale Settings</a>', 'Sale Banner</a>');
        fs.writeFileSync(filePath, content);
        console.log('Updated', file);
    }
});
console.log('Done');
