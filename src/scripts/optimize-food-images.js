const path = require('path')
const optimizeScript = require('./optimize-script');

const inputDir = path.join(__dirname, '../img/dishes');
const outputDir = path.join(__dirname, '../img/optimized-dishes');

const images = ['food1.jpg', 'food2.jpg', 'food3.jpg', 'food4.jpg', 'food5.jpg', 'food6.jpg'];

optimizeScript.optimizeImages(inputDir, outputDir, images, 500, 500);