const sharp = require('sharp');
const path = require('path');

function optimizeImages(inputDir, outputDir, images, x, y, device) {
    images.forEach((image) => {
        const inputFilePath = path.join(inputDir, image);
        const outputFilePath = path.join(outputDir, image.replace('.jpg', '.webp'));
        const position = outputFilePath.length - 5;
        const finalOutputFilePath = outputFilePath.slice(0, position) + device + outputFilePath.slice(position);
        sharp(inputFilePath)
            .resize({
                width: x,
                height: y,
                fit: sharp.fit.inside
            })
            .webp({ quality: 80, lossless: false })
            .toFile(finalOutputFilePath, (err, info) => {
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