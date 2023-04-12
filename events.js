function pageLoad() {
    alert("Welcome to Mammals of Estonia!")
}

function addBorder() {
    let animalImage = document.getElementById("hare")
    animalImage.style.border = 'dotted'
}

function removeBorder() {
    let animalImage = document.getElementById("hare")
    animalImage.style.border = '5px groove black'
}