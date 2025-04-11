const sharp = require('sharp');
const fs = require('fs');
const path = require('path')

const inputDir = path.join(__dirname, '../img/places');
const outputDir = path.join(__dirname, '../img/optimized-places'); 

/*
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}
*/

const images = ['napoles1.jpg', 'napoles2.jpg', 'napoles3.jpg'];

images.forEach((image) => {
  const inputFilePath = path.join(inputDir, image);
  const outputFilePath = path.join(outputDir, image.replace('.jpg', '.webp'));
  sharp(inputFilePath)
    .resize(800, 1200)
    .webp({ quality: 90 })
    .webp({ lossless: true })
    .toFile(outputFilePath, (err, info) => {
      if (err) {
        console.error('Error processing image:', err);
      } else {
        console.log('Image optimized:', info);
      }
    });
})