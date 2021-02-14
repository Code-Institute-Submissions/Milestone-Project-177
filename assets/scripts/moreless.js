$(document).ready(function() {
    //on click event handler
    $(".moreLessButton").click(function() {
        //toggles the visibility of the more and ellipsis classes on click
        $(".more").toggle();
        $(".ellipsis").toggle();

        //Changes text in read more / less button
        if($(".moreLessButton").text() == "Read Less") {
            $(".moreLessButton").text("Read More");
        }
        else {
            $(".moreLessButton").text("Read Less");
        }
    })
})