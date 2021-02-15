$(document).ready(function () {
    $(".moreLessButton").each(function(i){
        $(this).click(function() {
            $(".more").toggle();
            $(".ellipsis").toggle();

            if ($(".moreLessButton").text() == "Read More") {
                $(".moreLessButton").text("Read Less");
            }
            else {
                $(".moreLessButton").text("Read More");
            }
        })
    })
})