// Animate Smooth Scroll for view gallery

$('#view-work').on('click', function() {
    const images = $('#images').position().top;

    $('html, body').animate(
        {
            scrollTop: images
        },
        900
    )
})


// Animate Smooth Scroll for view contact

$('#view-contact').on('click', function() {
    const contactInfo = $('#contact-info').position().top;

    $('html, body').animate(
        {
            scrollTop: contactInfo
        },
        900
    )
})