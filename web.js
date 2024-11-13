// Sample movie data
const movies = [
    {
        id: 1,
        title: "Movie 1",
        image: "https://source.unsplash.com/230x130/?movie",
        description: "Description for Movie 1"
    },
    {
        id: 2,
        title: "Movie 2",
        image: "https://source.unsplash.com/230x130/?film",
        description: "Description for Movie 2"
    },
    // Add more movies as needed
];

// Populate movie sliders
function populateSliders() {
    const sliderContainers = document.querySelectorAll('.slider-container');
    
    sliderContainers.forEach(container => {
        // Add 10 movie cards to each slider
        for(let i = 0; i < 10; i++) {
            const movie = movies[i % movies.length];
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.style.backgroundImage = `url(${movie.image})`;
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
            container.appendChild(card);
        }
    });
}

// Handle slider navigation
function handleSliderControls() {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach(slider => {
        const container = slider.querySelector('.slider-container');
        const leftHandle = slider.querySelector('.left-handle');
        const rightHandle = slider.querySelector('.right-handle');
        
        leftHandle.addEventListener('click', () => {
            container.scrollBy({
                left: -container.offsetWidth,
                behavior: 'smooth'
            });
        });
        
        rightHandle.addEventListener('click', () => {
            container.scrollBy({
                left: container.offsetWidth,
                behavior: 'smooth'
            });
        });
    });
}

// Header background change on scroll
function handleHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateSliders();
    handleSliderControls();
    handleHeaderScroll();
});

// Add hover effect for movie cards
document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('movie-card')) {
        const cards = document.querySelectorAll('.movie-card');
        cards.forEach(card => {
            if (card !== e.target) {
                card.style.transform = 'scale(1)';
                card.style.zIndex = '0';
            }
        });
    }
});
