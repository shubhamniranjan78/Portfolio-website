document.addEventListener('DOMContentLoaded', function() {
    // --- Typing Animation ---
    const tagline = document.querySelector('.typing-effect');
    const lines = [
        "DevOps & Automation Engineer",
        "Building Scalable Cloud Infra",
        "CI/CD & IaC Enthusiast"
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < lines[lineIndex].length) {
            tagline.textContent += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            tagline.textContent = lines[lineIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            lineIndex = (lineIndex + 1) % lines.length;
            setTimeout(type, 500);
        }
    }

    type();


    // --- Scroll Animations ---
    const sections = document.querySelectorAll('section');

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

});
document.addEventListener('DOMContentLoaded', function() {
    // This script is for the typing animation on the homepage.
    const tagline = document.querySelector('.typing-effect');

    // Only run the script if the typing element exists on the page
    if (tagline) {
        const lines = [
            "DevOps & Automation Engineer",
            "Building Scalable Cloud Infra",
            "CI/CD & IaC Enthusiast"
        ];

        let lineIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < lines[lineIndex].length) {
                tagline.textContent += lines[lineIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                tagline.textContent = lines[lineIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                lineIndex = (lineIndex + 1) % lines.length;
                setTimeout(type, 500);
            }
        }
        
        type();
    }
});