/* nav bar */
function myFunction() {
    var x = document.getElementById("nlinks");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

/* video 1 */
let video = document.querySelector('video');
window.addEventListener('scroll', function () {
    let value = 1 + window.scrollY / -600;
    video.style.opacity = value;
})







