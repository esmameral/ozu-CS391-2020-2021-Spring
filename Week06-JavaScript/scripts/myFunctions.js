function validateForm() {
    var name = document.getElementById("name").value;
    if (name == null || name == "") {
        alert("Animal name must be filled out");
        return false;
    }
    var age = document.getElementById("age").value;
    if (age == null || age == "") {
        alert("Animal age must be filled out");
        return false;
    }
    var desc = document.getElementById("desc").value;
    if (desc == null || desc == "") {
        alert("Animal description must be filled out");
        return false;
    }
    saveAnimalInfo();
    return true;
}

function saveAnimalInfo() {
    var id=Math.floor(Math.random()*100);
    var name = document.getElementById("name").value;
    var breed = document.getElementById("breed").value;
    var age = document.getElementById("age").value;
    var desc = document.getElementById("desc").value;
    var sex = getAnimalSex();
    var animal = {
        "id":id,
        "breed": breed,
        "name": name,
        "age": age,
        "desc": desc,
        "sex": sex
    }
    
    localStorage.setItem(id, JSON.stringify(animal));

    console.log(animal);
}

function getAnimalSex() {
    if (document.getElementById('male').checked) {
        return document.getElementById('male').value;
    }
    else {
        return document.getElementById('female').value;
    }

}

function printAnimals(){
    var text = "<table border='1'>";
    text += "<tr><th>Name</td><th>Breed</th><th>Age</th></tr>";
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        var animal = JSON.parse(localStorage.getItem(key));
        text += "<tr><td>" + animal.name + "</td><td>" + animal.breed + "</td><td>"+animal.age+"</td></tr>";
    }
    text += "</table>"
    document.getElementById("animals").innerHTML = text;
}
