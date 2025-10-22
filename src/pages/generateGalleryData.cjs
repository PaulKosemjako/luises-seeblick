const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '..', '..', 'public', 'images', 'gallery');

const outputFile = path.join(__dirname, 'galleryData.json');

const data = [];

fs.readdirSync(galleryDir).forEach((folderName) => {
  const folderPath = path.join(galleryDir, folderName);
  if (fs.statSync(folderPath).isDirectory()) {
    const images = fs.readdirSync(folderPath).filter(file =>
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );

    images.forEach(image => {
      data.push({
        src: `/images/gallery/${folderName}/${image}`,
        alt: `${folderName} - ${image}`,
        category: folderName
      });
    });
  }
});

fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
console.log(`✅ galleryData.json mit ${data.length} Bildern erstellt.`);
