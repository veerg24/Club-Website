//animation for scrolling between sections
function animateScroll(elementName) {
    $('html, body').animate({
        'scrollTop' : $("#" + elementName.toLowerCase()).position().top
    });
}