const imagemin = require("imagemin")
const webp = require("imagemin-webp")
imagemin(['src/images/*.{jpg,png}'], {
    destination: 'dist/images',
    plugins: [
        webp(
            {
                quality: 60,
                resize: { width: 150, height: 150 }

            })
    ]
})