//your JS code here. If required.
let divElement = document.getElementById("browser-info");
let browserName = navigator.appName;
let version = navigator.appVersion;
divElement.innerText = "You are using " + browserName + " version " + version;

