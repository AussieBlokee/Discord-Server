document.addEventListener('DOMContentLoaded', () => {
    console.log('ProfilePicturesPLUS website loaded');

    // Initialize button click events
    setupButtonEventListeners();

    // Initialize accordion panels if needed
    setupAccordionPanels();
});

/**
 * Sets up event listeners for all buttons on the page.
 */
function setupButtonEventListeners() {
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('click', openLinkInNewTab);
    });
}

/**
 * Opens the link from the button's href attribute in a new tab.
 * @param {Event} event - The click event.
 */
function openLinkInNewTab(event) {
    event.preventDefault(); // Prevent default link behavior
    const targetUrl = event.currentTarget.getAttribute('href');
    window.open(targetUrl, '_blank');
}

/**
 * Sets up event listeners for accordion panels.
 */
function setupAccordionPanels() {
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const content = button.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
}
