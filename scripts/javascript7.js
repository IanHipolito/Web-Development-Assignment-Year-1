/* nav bar */
function myFunction() {
    var x = document.getElementById("nlinks");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}