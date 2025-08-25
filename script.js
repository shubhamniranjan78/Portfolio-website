// Replace EVERYTHING in script.js with this:
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Make sure both elements exist before adding the event listener
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggles the slide-in menu
            navLinks.classList.toggle('nav-active');

            // Toggles the hamburger animation (from lines to an "X")
            hamburger.classList.toggle('toggle');
        });
    }

    // --- Typing Animation (for homepage only) ---
    const tagline = document.querySelector('.typing-effect');
    if (tagline) {
        // ... (the rest of your typing animation code can go here)
    }

    // --- Scroll Animations ---
    const sections = document.querySelectorAll('section');
    if (sections) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        sections.forEach(section => {
            observer.observe(section);
        });
    }
});