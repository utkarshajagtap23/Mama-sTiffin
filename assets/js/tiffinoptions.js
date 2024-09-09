function showTiffin(tiffinType) {
    // Hide all tiffin content divs
    var tiffins = document.getElementsByClassName("tiffin-content");
    for (var i = 0; i < tiffins.length; i++) {
        tiffins[i].style.display = "none";
    }

    // Show the selected tiffin content
    document.getElementById(tiffinType).style.display = "block";
}
