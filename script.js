const POINT = "point"
const PERCENTAGE = "percentage"
const GEOLOCATION = "geolocation"

function createButton(title, type){
    const button = document.createElement("button")
    button.className = type
    button.innerHTML = title
    document.body.appendChild(button)
}

createButton("huy", PERCENTAGE);
createButton("huy", PERCENTAGE);
createButton("huy", PERCENTAGE);
createButton("huy", PERCENTAGE);