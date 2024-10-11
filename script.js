let index = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

// Arrow buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Show the next slide
function showNextSlide() {
    index++;
    if (index >= totalSlides) {
        index = 0; // Loop back to the first slide
    }
    updateCarousel();
}

// Show the previous slide
function showPrevSlide() {
    index--;
    if (index < 0) {
        index = totalSlides - 1; // Loop back to the last slide
    }
    updateCarousel();
}

// Update carousel to reflect the current slide
function updateCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(${-index * 100}%)`;
    carouselContainer.style.transition = 'transform 0.5s ease-in-out';
}

// Add event listeners to arrow buttons
nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);
