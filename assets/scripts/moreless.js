$(document).ready(function() {
    $(".moreLessButton").click(function() {
        $(this).prev().toggle();
        $(this).siblings(".ellipsis").toggle();

        if($(this).text()=="Read More"){
            $(this).text("Read Less");
        }
        else if($(this).text()=="Read Less"){
            $(this).text("Read More");
        }
    })
})