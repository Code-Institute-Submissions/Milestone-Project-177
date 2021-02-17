$(document).ready(function() {
    $("#newsletter-button").click(function() {
        $("#newsletter-modal").css("display", "block");
    });
    $(".close-button").click(function() {
        $("#newsletter-modal").css("display", "none");
    });
});
