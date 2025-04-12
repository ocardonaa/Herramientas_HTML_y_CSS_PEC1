const sharp = require('sharp');
const path = require('path');

function optimizeImages(inputDir, outputDir, images, x, y) {
    images.forEach((image) => {
        const inputFilePath = path.join(inputDir, image);
        const outputFilePath = path.join(outputDir, image.replace('.jpg', '.webp'));
        sharp(inputFilePath)
            .resize({
                width: x,
                height: y,
                fit: sharp.fit.inside
            })
            .webp({ quality: 80, lossless: false })
            .toFile(outputFilePath, (err, info) => {
                if (err) {
                    console.error('Error processing image:', err);
                } else {
                    console.log('Image optimized:', info);
                }
            });
    })
}

module.exports = {
    optimizeImages
};