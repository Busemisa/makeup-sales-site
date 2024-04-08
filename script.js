document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    function updateSlider() {
        const newTransformValue = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + newTransformValue + ')';

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
});
