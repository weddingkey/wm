// Function to toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Function to show content based on ID
function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('active');

    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';

    // Scroll to the content
    window.scrollTo(0, selectedContent.offsetTop - 60);
}

// Function to open packages link (replace with your actual URL)
function openPackagesLink() {
    window.open('your-portfolio-url', '_blank');
}

// Update menu icon
document.addEventListener('DOMContentLoaded', () => {
    const iconMenu = document.querySelector('.icon-menu');
    iconMenu.innerHTML = '&#9776;';
    
    // Show 'about' content on page load
    showContent('about');
});

// Close sidebar when clicking outside
window.addEventListener('click', (event) => {
    const sidebar = document.getElementById('sidebar');
    const iconMenu = document.querySelector('.icon-menu');
    if (!sidebar.contains(event.target) && event.target !== iconMenu) {
        sidebar.classList.remove('active');
    }
});

// Rest of your existing scripts...

// Function to change slide in the slideshow
let currentSlideIndex = 0;

function changeSlide(offset) {
    const slides = document.querySelectorAll('.slide');
    currentSlideIndex += offset;

    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    } else if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }

    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlideIndex ? 'block' : 'none';
    });
}

setInterval(() => {
    changeSlide(1);
}, 5000);
