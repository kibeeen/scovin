$(".owl-wrapper").addClass("display-flex");






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


    } else if (windowWidth <= 1023) {

        // Apply the width to the logo
        logo.style.width = `${windowWidth - 312}px`;
        nav_expand_section.style.width = `${windowWidth}px`;

    } else if (windowWidth <= 1024) {


    } else if (windowWidth <= 1256) {

        $(".owl-wrapper").addClass("display-flex");


    } else {
        logo.style.width = '';
    }

}

$(document).ready(function () {
    const videoElement = $("#background-video");
    const imageElement = $("#background-image");

    // Owl Carousel initialization
    $("#owl-demo").owlCarousel({
        items: 4,
        autoplay: false,
        autoplayTimeout: 5000,
        loop: false,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1024: {
                items: 4
            },
            2440: {
                items: 4
            }
        }
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


    $(".menu-panel").hover(
        function () {
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

            // Show the CTA for this specific panel
            $(this).find(".actions").css({
                opacity: 1,
                visibility: "visible",
            });

            // Optionally, you can move the text of the hovered panel up
            // $(this).find('.panel-content').css('bottom', '160px');
        },
        function () {
            if ($(this).hasClass("disabled")) return; // Skip hover for disabled panels

            // Hide the CTA for this specific panel
            $(this).find(".actions").css({
                opacity: 0,
                visibility: "hidden",
            });

            // Optionally reset the text position when hover ends
            // $(this).find('.panel-content').css('bottom', 'initial');
        }
    );

    // Trigger hover effect on the first panel (Panel 1) to load its video
    defaultPanel.trigger("mouseenter");




    $(document).ready(function () {
        $("#owl-demo-mobile").owlCarousel({
            items: 1,
            dots: true,
            autoplay: true,
            loop: true,
            video: true,
        });
    });


    // Listen to owl events


    // Trigger the initial background setup
    owl.trigger('changed.owl.carousel', { item: { index: 0 } });


});




// $(document).ready(function () {
//     $(document).ready(function () {
//         var owl = $('.owl-carousel');
//         owl.owlCarousel({
//             items: 1,
//             loop: true,
//             autoplay: false,
//             nav: true,
//             navText: ["<", ">"],
//             dots: true,
//         });

//
//     });

// });
