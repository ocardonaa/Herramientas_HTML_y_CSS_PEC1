const sharp = require('sharp');
const path = require('path');

function optimizeImages(inputDir, outputDir, images, x, y, device) {
    images.forEach((image) => {
        const inputFilePath = path.join(inputDir, image);
        const finalImgName = image.replace('.jpg', '');
        sharp(inputFilePath)
            .toFormat('webp', { quality: 80 })
            .resize({
                width: x,
                height: y,
                fit: sharp.fit.cover
            })
            .webp({ lossless: false })
            .toFile(outputDir + finalImgName + device + '.webp', (err, info) => {
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