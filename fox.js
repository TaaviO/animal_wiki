foxImage = document.getElementById("fox");

function enlargeImg(){
    foxImage.style.transform = "scale(1.5)";
    foxImage.style.transition = "transform 0.25s ease";
}
function resetImg() {
    foxImage.style.transform = "scale(1)";
    foxImage.style.transition = "transform 0.25s ease"
}