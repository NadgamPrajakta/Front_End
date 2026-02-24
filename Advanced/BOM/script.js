// 1. Location Object
document.getElementById("locationInfo").innerHTML =
"Full URL: " + location.href +
"<br>Host: " + location.hostname +
"<br>Path: " + location.pathname;

function reloadPage() {
    location.reload();
}

// 2. Navigator Object
document.getElementById("browserInfo").innerHTML =
"Browser: " + navigator.appName +
"<br>Platform: " + navigator.platform +
"<br>Language: " + navigator.language +
"<br>User Agent: " + navigator.userAgent;

// 3. Screen Object
document.getElementById("screenInfo").innerHTML =
"Width: " + screen.width +
"<br>Height: " + screen.height +
"<br>Color Depth: " + screen.colorDepth;

// 4. History Object
function goBack() {
    history.back();
}

function goForward() {
    history.forward();
}

// 5. setInterval (Clock)
setInterval(function() {
    document.getElementById("clock").innerHTML =
    new Date().toLocaleTimeString();
}, 1000);

// 6. Window Object
function showAlert() {
    window.alert("Welcome to BOM Application!");
}

function openGoogle() {
    window.open("https://www.google.com", "_blank");
}

// setTimeout Example
setTimeout(function(){
    console.log("Page loaded successfully!");
}, 3000);