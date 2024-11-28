// Initial adjustment when the page loads
adjustLogoWidth();


// Adjust the logo width when the window is resized
window.addEventListener('resize', adjustLogoWidth);



// Function to adjust the logo width based on the current window width
function adjustLogoWidth() {
    const logo = document.querySelector('.logo');
    const nav_expand_section = document.querySelector('.nav-expand-section');



    const windowWidth = window.innerWidth;

    nav_expand_section.style.width = `${windowWidth - 19}px`;

    if (windowWidth <= 767) {

        // Apply the width to the logo
        logo.style.width = `${windowWidth - 140}px`;
        nav_expand_section.style.width = `${windowWidth}px`;


    } else if (windowWidth <= 1023) {

        // Apply the width to the logo
        logo.style.width = `${windowWidth - 312}px`;
        nav_expand_section.style.width = `${windowWidth}px`;

    } else {
        logo.style.width = '';
    }

}

$(document).ready(function () {
    const videoElement = $("#background-video");
    const imageElement = $("#background-image");

    // Owl Carousel initialization
    $("#owl-demo").owlCarousel({
        items: 6,
        slideSpeed: 300,
        pagination: false,
        loop: true,
        responsiveRefreshRate: 100,
        navigation: false
    });

    // Ensure Panel 0 (index 0) loads its video and is active on page load
    const defaultPanel = $(".menu-panel").eq(0); // Panel 0 corresponds to index 0 (0-based)
    const defaultType = defaultPanel.data("type");
    const defaultFile = defaultPanel.data("file");

    if (defaultType === "video") {
        videoElement.attr("src", defaultFile).show();
        videoElement[0].play();
    } else if (defaultType === "image") {
        imageElement.attr("src", defaultFile).show();
    }

    // Ensure that the first panel's content is pushed up on load (initial hover state)
    // defaultPanel.find('.panel-content').css('bottom', '85px');

    // Hover effect: Ignore panels 1 and 6
    $(".menu-panel").hover(
        function () {
            if ($(this).hasClass("disabled")) return; // Skip hover for disabled panels

            const fileType = $(this).data("type");
            const fileSource = $(this).data("file");

            // Handle panel hover effect for cross-fade
            if (fileType === "video") {
                imageElement.addClass("fade-out");
                setTimeout(() => {
                    imageElement.hide();
                    videoElement.show().attr("src", fileSource);
                    videoElement[0].load();
                    videoElement[0].play();
                    imageElement.removeClass("fade-out");
                }, 0);
            } else if (fileType === "image") {
                videoElement.addClass("fade-out");
                setTimeout(() => {
                    videoElement.hide();
                    imageElement.show().attr("src", fileSource);
                    imageElement.removeClass("fade-out");
                }, 0);
            }

            // Move the text of the hovered panel up
            // $(this).find('.panel-content').css('bottom', '160px');
        }

    );

    // Disable hover actions for panels 1 and 6
    $(".item").eq(0).addClass("disabled");
    $(".item").eq(5).addClass("disabled");

    // Trigger hover effect on the first panel (Panel 1) to load its video
    defaultPanel.trigger("mouseenter");
});

