// Check if user already logged in (location usage)
if (location.hash === "#dashboard") {
    showDashboard();
}

// LOGIN FUNCTION (window + location)
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        window.alert("Login Successful!");
        location.hash = "dashboard";   // using location
        showDashboard();
    } else {
        document.getElementById("loginMsg").innerHTML = "Invalid Credentials!";
    }
}

// SHOW DASHBOARD
function showDashboard() {
    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("userDisplay").innerHTML = "Admin";

    loadBrowserInfo();
    loadScreenInfo();
}

// LOGOUT (history)
function logout() {
    history.back();   // using history
    location.hash = "";
    window.location.reload();
}

// RELOAD
function reloadPage() {
    location.reload();
}

// OPEN NEW TAB (window)
function openGoogle() {
    window.open("https://google.com", "_blank");
}

// HISTORY BACK
function goBack() {
    history.back();
}

// NAVIGATOR OBJECT
function loadBrowserInfo() {
    document.getElementById("browserInfo").innerHTML =
        "Browser: " + navigator.appName +
        "<br>Platform: " + navigator.platform +
        "<br>Language: " + navigator.language;
}

// SCREEN OBJECT
function loadScreenInfo() {
    document.getElementById("screenInfo").innerHTML =
        "Width: " + screen.width +
        "<br>Height: " + screen.height +
        "<br>Color Depth: " + screen.colorDepth;
}

// LIVE CLOCK (setInterval)
setInterval(function () {
    document.getElementById("clock").innerHTML =
        new Date().toLocaleTimeString();
}, 1000);

// setTimeout example
setTimeout(function () {
    console.log("Welcome to BOM Dashboard");
}, 3000);