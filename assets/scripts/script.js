$(document).ready(function () {
    $("#navbar-toggler-icon").toggle(function() {
        $("div.navbar-collapse").addClass("push-down");
    }), function() {
        $("div.navbar-collapse").removeClass("push-down");
    }
})