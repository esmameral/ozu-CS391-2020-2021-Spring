function valideForm() {
    var desc = document.getElementById("description").value;
    if (desc == null || desc == "") {
        alert("Description must be filled out!")
        return false;
    }
    saveAnimal();
    return true;
}

function saveAnimal() {

    var animal = {
        "id": Math.floor(Math.random() * 100),
        "breed": document.getElementById("breed").value,
        "name": document.getElementById("name").value,
        "age": document.getElementById("age").value,
        "gender": getGender(),
        "description": document.getElementById("description").value,
    }

    console.log(animal);
    localStorage.setItem(animal.id, JSON.stringify(animal));

}

function getGender() {
    var element = document.getElementsByName("gender");
    for (i = 0; i < element.length; i++) {
        if (element[i].checked)
            return element[i].value;
    }
}

function printAnimals() {
    var text = "<table border='1'><tr><th>Name</th><th>Breed</th><th>Age</th></tr>";
    for (i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var animal = JSON.parse(localStorage.getItem(key));
        text += "<tr><td>" + animal.name + "</td><td>" + animal.breed + "</td><td>" + animal.age + "</td></tr>";
    }
    text += "</table>";
    document.getElementById("animals").innerHTML = text;
}



