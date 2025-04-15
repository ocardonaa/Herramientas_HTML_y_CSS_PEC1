const path = require('path')
const sharp = require('sharp');

const dir = path.join(__dirname, '../img/luca');
const lucaDir = path.join(dir, 'luca_hd.png')

const sizes = [
    {
        'device': '-phone',
        'width': 300,
        'height': 450,
        'number': '1'
    },
    {
        'device': '-tablet',
        'width': 600,
        'height': 900,
        'number': '2'
    },
    {
        'device': '-desktop',
        'width': 1200,
        'height': 900,
        'number': '3'
    }
]

sizes.forEach((elem) => {
    const name_file = 'luca' + elem.number + '.webp';
    sharp('../img/luca/luca_hd.png')
        .toFormat('webp', { quality: 80 })
        .resize({
            width: elem.width,
            height: elem.height,
            fit: sharp.fit.cover,
            position: 'center'
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