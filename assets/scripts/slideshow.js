//sets starting position
var Index = 1;
//calls slideshow function
slideshow(Index);

//controls for next and previous slide
function slides(n) {
    slideshow(Index += n);
}

function slideshow(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) { Index = 1; }
    if (n < 1) { Index = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slides.length == 0) {
        slides[Index].style.display = "block";
    }
    else {
        slides[Index - 1].style.display = "block";
    }
}