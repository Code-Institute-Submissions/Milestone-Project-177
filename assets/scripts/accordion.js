$(document).ready(function () {
    //shows first accordion by default
    $("#first-accordion").next().css('display', 'block');

    //Accordion button click event handler
    $(".accordion").click(function () {
        //closes all other accordion boxes when one of the accordion buttons are clicked
        if ($(".accordion-box").css('display', 'block')) {
            $(".accordion-box").css('display', 'none');
        }
        //when accordion button clicked, shows the next accordion box 
        $(this).next().css('display', 'block');
    })
})