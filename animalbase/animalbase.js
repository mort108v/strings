"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0
};

const filterButtons = document.querySelectorAll(`[data-action="filter"]`);
const sortButtons = document.querySelectorAll(`[data-action="sort"]`);

function start() {
    console.log("ready");

    // Add event-listeners to filter and sort buttons

    filterButtons.forEach((filterButton) => {
        filterButton.addEventListener("click", clickFilterButton);
    });
    sortButtons.forEach((sortButton) => {
        sortButton.addEventListener("click", clickSortButton);
    });

    loadJSON();
}

function clickFilterButton(filterButton) {
    console.log("filterClicked");

    let filter = filterButton.target.dataset.filter;

    if (filter === "cat") {
        allCats();
    } else if (filter === "dog") {
        allDogs();
    } else if (filter === "dragon") {
        allDragons();
    } else if (filter === "*") {
        allOfTheAnimals();
    }
    return filter;
}

function allCats() {
    console.log("cats clicked");
    displayList(allAnimals.filter(isCat));
}

function allDogs() {
    console.log("dogs clicked");
    displayList(allAnimals.filter(isDog));
}

function allDragons() {
    console.log("Dragons clicked");
    displayList(allAnimals.filter(isDragon));
}

function allOfTheAnimals() {
    console.log("All clicked");
    displayList(allAnimals.filter(isAll));
}

function clickSortButton(sortButton) {
    console.log("Sorting Clicked");

    let sorter = sortButton.target.dataset.sort;

    if (sorter === "name", "type", "desc") {
        console.log("Sort By ABC clicked");
        sortAlphabetically(sorter);

    } else if (sorter === "age") {
        console.log("age clicked");
        sortByNumber(sorter);
    }
}

function sortAlphabetically(sortBy) {
    console.log("Sorting the list");

    let filteredAnimals = clickFilterButton.filter;
    if (filteredAnimals === "cat") {
        displayList(isCat.sortBy).sort;
    }
    // if (sortBy === "name", "type", "desc") {
    //     console.log("Sorting Aplhabetically");
    //     filteredAnimals(sortBy).sort;
}


function isCat(animal) {
    console.log("isCat");
    if (animal.type === "cat") {
        return true;
    } else {
        return false;
    }
}

function isDog(animal) {
    console.log("isDog");
    if (animal.type === "dog") {
        return true;
    } else {
        return false;
    }
}

function isDragon(animal) {
    console.log("isDragon");
    if (animal.type === "dragon") {
        return true;
    } else {
        return false;
    }
}

function isAll() {
    console.log("isAll");
    return true;
}

async function loadJSON() {
    const response = await fetch("animals.json");
    const jsonData = await response.json();

    // when loaded, prepare data objects
    prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
    allAnimals = jsonData.map(preapareObject);

    // TODO: This might not be the function we want to call first
    displayList(allAnimals);
}

function preapareObject(jsonObject) {
    const animal = Object.create(Animal);

    const texts = jsonObject.fullname.split(" ");
    animal.name = texts[0];
    animal.desc = texts[2];
    animal.type = texts[3];
    animal.age = jsonObject.age;

    return animal;
}

function displayList(animals) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    animals.forEach(displayAnimal);
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