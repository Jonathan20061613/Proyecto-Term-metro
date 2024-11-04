let currentSlideIndex = 0;
const carousels = document.querySelectorAll('.carousel');

function showSlide(carousel) {
    const slides = carousel.querySelectorAll('img');
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlideIndex) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(n) {
    currentSlideIndex += n;

    // Reset the index if out of bounds
    if (currentSlideIndex < 0) {
        currentSlideIndex = carousels[0].querySelectorAll('img').length - 1;
    } else if (currentSlideIndex >= carousels[0].querySelectorAll('img').length) {
        currentSlideIndex = 0;
    }

    carousels.forEach(showSlide);
}

// Initialize the first slide for each carousel
carousels.forEach(showSlide);
