// script.js
    document.addEventListener('DOMContentLoaded', () => {

        // --- Header Scroll Effect ---
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // --- Elegant Mobile Menu Toggle ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        mobileMenuButton.addEventListener('click', () => {
            // Toggles the .menu-open class on the header
            header.classList.toggle('menu-open');
        });

        // --- Fade-in on Scroll Animation ---
        const sections = document.querySelectorAll('.fade-in-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });
    });
