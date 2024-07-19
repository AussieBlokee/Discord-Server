document.addEventListener('DOMContentLoaded', () => {
    console.log('ProfilePicturesPLUS website loaded');

    // Add event listener to button
    initializeButtonEvents();
});

/**
 * Initializes event listeners for buttons on the page.
 */
function initializeButtonEvents() {
    const joinButton = document.querySelector('.button');
    
    if (joinButton) {
        joinButton.addEventListener('click', handleButtonClick);
    }
}

/**
 * Handles button click events.
 * @param {Event} event - The click event.
 */
function handleButtonClick(event) {
    alert('Button clicked!');
}
