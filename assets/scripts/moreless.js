function moreLess() {
    var ellipsis = document.getElementById("ellipsis");
    var more = document.getElementById("more");
    var button = document.getElementById("moreLessButton");

    if (ellipsis.style.display === "none") {
        ellipsis.style.display = "inline";
        more.style.display = "none";
        button.innerHTML = "Read More"
    } else {
        ellipsis.style.display = "none";
        more.style.display = "inline";
        button.innerHTML = "Read Less"
    }
}