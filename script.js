const POINT = "point"
const PERCENTAGE = "percentage"
const GEOLOCATION = "geolocation"

fetchData("config.json", (responseText) => {
    console.log(responseText)
})


function createButton(title, type) {
    const button = document.createElement("button")
    button.className = type
    button.innerHTML = title
    document.body.appendChild(button)
}

createButton("huy", PERCENTAGE);
createButton("huy", PERCENTAGE);
createButton("huy", PERCENTAGE);
createButton("huy", PERCENTAGE);

function fetchData(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

 
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            callback(xhr.responseText)
        }
    }
       xhr.send();
}