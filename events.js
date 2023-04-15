function pageLoad() {
    alert("Welcome to Mammals of Estonia!")
}

let animalImage = document.getElementsByClassName("animals")

function addBorder() {
    Array.from(document.querySelectorAll(".animals")).forEach((elem) => {
        elem.addEventListener("mouseover", () => {
            elem.style.border = "dotted"
        })
        elem.addEventListener("mouseout", () => {
            elem.style.border = ''
        })
    })
}

function keyPress() {
    alert("SIKE you cant actually search anything cause this message keeps popping up")
}

function doubleClick(){
    document.getElementById("colorchange").style.color = "cyan"
}

var foxImage = document.getElementById("fox");
function enlargeImg(){
    foxImage.style.transform = "scale(1.5)";
    foxImage.style.transition = "transform 0.25s ease";
}
function resetImg() {
    foxImage.style.transform = "scale(1)";
    foxImage.style.transition = "transform 0.25s ease"
}
