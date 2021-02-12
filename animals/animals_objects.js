"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start() {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
        .then(response => response.json())
        .then(jsonData => {
            // when loaded, prepare objects
            prepareObjects(jsonData);
        });
}

function prepareObjects(jsonData) {
    jsonData.forEach(jsonObject => {
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        const Animal = {
            name: " ",
            desc: " ",
            type: " ",
            age: " ",
        }
        const animal = Object.create(Animal);

        const animalFullName = jsonObject.fullname;
        const firstSpace = animalFullName.indexOf(" ");
        const lastSpace = animalFullName.lastIndexOf(" ");

        animal.name = animalFullName.substring(0, firstSpace);
        animal.desc = animalFullName.substring(firstSpace, lastSpace);
        animal.type = animalFullName.substring(lastSpace + 1);
        animal.age = jsonObject.age;

        // const animalData = jsonObject.fullname.split(" ");
        // animal.name = animalData[0];
        // animal.desc = animalData[2];
        // animal.type = animalData[3];
        // animal.age = jsonObject.age;

        allAnimals.push(animal);
        console.log(allAnimals);
        //         const name = jsonObject.fullname;
        // const type = jsonObject.fullname;
        // const desc = jsonObject.fullname;
        // const age = jsonObject.age;
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild(clone);
}