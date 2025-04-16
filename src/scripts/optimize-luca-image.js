const sharp = require('sharp');

const sizes = [
    {
        'width': 300,
        'height': 450,
        'device': '-phone'
    },
    {
        'width': 600,
        'height': 900,
        'device': '-tablet'
    },
    {
        'width': 1200,
        'height': 900,
        'device': '-desktop'
    }
]

sizes.forEach((elem) => {
    const name_file = 'luca' + elem.device + '.webp';
    sharp('../img/luca/luca.png')
        .toFormat('webp', { quality: 80 })
        .resize({
            width: elem.width,
            height: elem.height,
            fit: sharp.fit.cover
        })
        .webp({ lossless: false })
        .toFile('../img/luca/' + name_file, (err, info) => {
            if (err) {
                console.error('Error processing image:', err);
            } else {
                console.log('Image optimized:', info);
            }
        });
})