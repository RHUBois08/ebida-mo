// Combined script.js and server.js
// document.querySelector('.downloadBtn').addEventListener('click', function() {
//     window.location.href = '/ebidamo/apk/eBIDAmo.apk';
//     alert('Your download will start shortly!');
// });

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const panels = document.querySelectorAll('.panel');
    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');
    let currentIndex = 0;

    function updateSliderPosition() {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : panels.length - 1;
        updateSliderPosition();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < panels.length - 1) ? currentIndex + 1 : 0;
        updateSliderPosition();
    });
});

// Server-side code
if (typeof require !== 'undefined' && typeof module !== 'undefined') {
    const express = require('express');
    const path = require('path');
    require('dotenv').config();

    const app = express();
    const PORT = process.env.PORT || 3000;

    // app.use('/ebidamo/apk', express.static(path.join(__dirname, 'apk')));
    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    // app.get('/download/eBIDAmo.apk', (req, res) => {
    //     const filePath = path.join(__dirname, 'apk', 'eBIDAmo.apk');
    //     res.download(filePath, (err) => {
    //         if (err) {
    //             console.error('Error downloading file:', err);
    //             res.status(500).send('Error downloading file.');
    //         }
    //     });
    // });

    app.use((req, res) => {
        res.status(404).send('Resource not found.');
    });

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}