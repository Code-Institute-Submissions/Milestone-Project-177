//sets starting position
var Index = 1;
//calls slideshow function
slideshow(Index);

//controls for next and previous slide
function slides(n) {
    slideshow(Index += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
    
//starts slideshow
function slideshow(a) {
    var i;
    var slides = document.getElementsByClassName("slide");

    if (a > slides.length) { 
        slideIndex = 1 
    }
    if (a < 1) {
        Index = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //shows current slide
    slides[Index - 1].style.display = "block";
}