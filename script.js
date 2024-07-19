document.addEventListener('DOMContentLoaded', () => {
    console.log('ProfilePicturesPLUS website loaded');

    // Initialize button events
    initializeButtonEvents();
});

/**
 * Initializes event listeners for buttons on the page.
 */
function initializeButtonEvents() {
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
}

/**
 * Handles button click events.
 * @param {Event} event - The click event.
 */
function handleButtonClick(event) {
    // Proceed to the link directly
    const targetUrl = event.currentTarget.getAttribute('href');
    window.open(targetUrl, '_blank');
}
