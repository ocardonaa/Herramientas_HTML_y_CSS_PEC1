const path = require('path')
const optimizeScript = require('./optimize-script');

const inputDir = path.join(__dirname, '../img/places');
const outputDir = path.join(__dirname, '../img/optimized-places/');

const images = ['napoles1.jpg', 'napoles2.jpg', 'napoles3.jpg'];

optimizeScript.optimizeImages(inputDir, outputDir, images, 300, 450, '-phone');
optimizeScript.optimizeImages(inputDir, outputDir, images, 400, 600, '-tablet');
optimizeScript.optimizeImages(inputDir, outputDir, images, 500, 550, '-desktop');