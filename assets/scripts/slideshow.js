//sets starting position
var Index = 1;
//calls slideshow function
slideshow(Index);

//controls for next and previous slide
function slides(n) {
    slideshow(Index += n);
}

//slideshow function for popular locations section
function slideshow(n) {
    var i;
    //Gets slides
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) { Index = 1; }
    if (n < 1) { Index = slides.length; }
    //hides slides which aren't active
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //fixes issue when going from slide 3 to slide 1
    if (slides.length == 0) {
        slides[Index].style.display = "block";
    }
    //sets current slide to display block
    else {
        slides[Index - 1].style.display = "block";
    }
}

