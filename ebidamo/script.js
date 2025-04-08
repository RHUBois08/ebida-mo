document.querySelector('.downloadBtn').addEventListener('click', function() {
    window.location.href = '/ebidamo/apk/eBIDAmo.apk';
    alert('Your download will start shortly!');
});

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