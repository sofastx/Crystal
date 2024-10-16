// Function to handle section visibility and transparency
const sections = document.querySelectorAll('section');
const welcomeScreen = document.getElementById('welcome-screen');
const content = document.getElementById('content');

// Show content when entering
document.getElementById('enter-btn').addEventListener('click', () => {
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        content.style.display = 'block';
    }, 500);
});

// Function to adjust section visibility
const updateVisibility = () => {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2;
        section.style.opacity = isVisible ? '1' : '0.3';
    });
};

// Initial visibility check
updateVisibility();

// Update visibility on scroll
window.addEventListener('scroll', updateVisibility);
