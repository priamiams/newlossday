const fs = require('fs');

let galleryStr = 'export const galleryData = [\n';

for (let i = 1; i <= 70; i++) {
  let category = '';
  
  if (i >= 1 && i <= 22) {
    category = 'Pulau';
  } else if (i >= 23 && i <= 58) {
    category = 'Gunung';
  } else if (i >= 59 && i <= 70) {
    category = 'Gathering';
  }
  
  // Since we removed title and category from overlay, they aren't critical, but good to have
  galleryStr += `  { id: ${i}, image: '/img/dokumentasi/gambar${i}.jpg', category: '${category}' },\n`;
}

galleryStr += '];\n';
fs.writeFileSync('src/data/gallery.js', galleryStr);

console.log('Gallery successfully generated based on index rules.');
