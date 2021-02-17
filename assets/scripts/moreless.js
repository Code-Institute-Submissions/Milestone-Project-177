$(document).ready(function() {
    //More / less button click handler
    $(".moreLessButton").click(function() {
        //hides #more section
        $(this).prev().prev().toggle();

        //changes inner html of read more / less button
        if($(this).text()=="Read More"){
            $(this).text("Read Less");
        }
        else if($(this).text()=="Read Less"){
            $(this).text("Read More");
        }
    });
});