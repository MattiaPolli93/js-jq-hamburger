// Variable
var hamburger = $(".hamburger-menu");

// Displaying the Hamburger Menu
jQuery(".header-right a:last-child").click(function() {
    hamburger.addClass("active");
}
);

// Hiding the Hamburger Menu
hamburger.click(function() {
    hamburger.removeClass("active");
}
);