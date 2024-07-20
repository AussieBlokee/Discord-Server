// script.js

// Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-button');

    accordions.forEach(button => {
        button.addEventListener('click', () => {
            const isActive = button.classList.contains('active');
            const content = button.nextElementSibling;

            // Toggle active state
            button.classList.toggle('active', !isActive);
            content.style.maxHeight = isActive ? '0' : `${content.scrollHeight}px`;
        });
    });
});
