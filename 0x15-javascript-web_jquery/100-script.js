// Function to change header text color to red
function changeHeaderColor() {
    // Select the <header> element using document.querySelector
    const header = document.querySelector('header');
    // Update the text color to red
    header.style.color = '#FF0000';
}

// Execute the function once the DOM content is loaded
document.addEventListener('DOMContentLoaded', changeHeaderColor);

