document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.1s';
        });

        section.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        if (currentIndex < 2) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = 2;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const newPosition = -currentIndex * 320;
        carousel.style.transform = `translateX(${newPosition}px)`;
    }

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', function() {
            alert('Product added to cart!');
        });
    });
});
