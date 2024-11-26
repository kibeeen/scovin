// Initial adjustment when the page loads
adjustLogoWidth();


// Adjust the logo width when the window is resized
window.addEventListener('resize', adjustLogoWidth);



// Function to adjust the logo width based on the current window width
function adjustLogoWidth() {
    const logo = document.querySelector('.logo');
    const nav_expand_section = document.querySelector('.nav-expand-section');

    
    
    const windowWidth = window.innerWidth;

    nav_expand_section.style.width = `${windowWidth}px`;

    if (windowWidth <= 767) {
        
        // Apply the width to the logo
        logo.style.width = `${windowWidth - 140}px`;
        nav_expand_section.style.width = `${windowWidth}px`;
        

    } else if(windowWidth <= 1023) {

        // Apply the width to the logo
        logo.style.width = `${windowWidth - 312}px`;
        nav_expand_section.style.width = `${windowWidth}px`;
        
    } else {
        logo.style.width = '';
    }
}
