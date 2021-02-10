function moreLess() {
    var ellipsis = document.getElementById("ellipsis"); //dots
    var more = document.getElementById("more"); //section which is toggled
    var button = document.getElementById("moreLessButton"); //more/less button

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