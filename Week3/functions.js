
//DRAG AND DROP FUNCTIONS
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

//WEB STORAGE
function addToLocal() {
    if (localStorage) {
        localStorage.setItem("name1", "Eray");
        var name1 = localStorage.getItem("name1"); 
        console.log(name1);
        console.log(localStorage.length);
    }else{
        alert("Sorry, your browser do not support local storage.");
    }
}


function removeFromLocal() {
    localStorage.removeItem("name1");
}

function addToSession() {
    if (sessionStorage) {
        sessionStorage.setItem("name2", "Koray");
        var name2 = sessionStorage.getItem("name2"); 
        console.log(name2);
        console.log(sessionStorage.length);
    }else{
        alert("Sorry, your browser do not support local storage.");
    }
}

function removeFromSession() {
    sessionStorage.removeItem("name2");
}


//GEOLOCATION
function getLocation() {
    var element = document.getElementById("location");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        element.innerHTML = "Getting the position information...";
    } else {
        element.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    var coords = position.coords.latitude + "," + position.coords.longitude;
    document.getElementById("location").innerHTML = "Your location is:" + coords;
}

function showError(error) {
    var element = document.getElementById("location");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            element.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            element.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            element.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            element.innerHTML = "An unknown error occurred."
            break;
    }
}
