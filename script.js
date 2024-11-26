// Function to adjust the logo width based on the current window width



// Adjust the logo width when the window is resized
window.addEventListener('resize', adjustLogoWidth);

// Initial adjustment when the page loads
adjustLogoWidth();


function adjustLogoWidth() {
    const logo = document.querySelector('.logo');
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1023) {
        // Calculate the logo width
        const logoWidth = windowWidth * 0.1;

        // Set minimum and maximum width (e.g., min 100px, max 300px)
        const adjustedWidth = Math.min(Math.max(logoWidth, 100), 300);

        // Apply the width to the logo
        logo.style.width = `${windowWidth - 312}px`;
    } else {
        logo.style.width = '';
    }




}
