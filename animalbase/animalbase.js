"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];
let filter;
let filteredAnimals = [];
let sortedAnimals = [];

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

    filter = filterButton.target.dataset.filter;

    const filteredAnimals = filterAnimals();
    console.log(filteredAnimals);
    displayList(filteredAnimals);
}

function filterAnimals() {
    console.log("Filtering My Animals");

    filteredAnimals = [];

    if (filter === "cat") {
        filteredAnimals = allAnimals.filter(isCat);
    } else if (filter === "dog") {
        filteredAnimals = allAnimals.filter(isDog);
    } else if (filter === "dragon") {
        filteredAnimals = allAnimals.filter(isDragon);
    } else {
        filteredAnimals = allAnimals.filter(isAll);
    }
    return filteredAnimals;
}

function clickSortButton(sortButton) {
    console.log("Sorting Clicked");

    const sort = sortButton.target.dataset.sort;
    const sortDirection = sortButton.target.dataset.sortDirection;

    console.log("Dataset", sortButton.target.dataset);

    const sortedAnimals = sortAnimals(sort, sortDirection);
    sortButton.target.dataset.sortDirection = sortDirection === "asc" ? "desc" : "asc";
    console.log("My Sorted Animal ", sortedAnimals);

    displayList(sortedAnimals);
}

function sortAnimals(sort, sortDirection) {
    console.log("Sorting the animal list", sort, filteredAnimals);

    switch (sort) {
        case "name":
            sortedAnimals = filteredAnimals.sort((a, b) => {
                if (sortDirection === "asc") {
                    // Ascending
                    return a.name > b.name ? 1 : -1;
                } else {
                    // Implicit descending
                    return a.name > b.name ? -1 : 1;
                }
            });
            break;
        case "type":
            sortedAnimals = filteredAnimals.sort((a, b) => {
                if (sortDirection === "asc") {
                    // Ascending
                    return a.type > b.type ? 1 : -1;
                } else {
                    // Implicit descending
                    return a.type > b.type ? -1 : 1;
                }
            });
            break;
        case "desc":
            sortedAnimals = filteredAnimals.sort((a, b) => {
                if (sortDirection === "asc") {
                    // Ascending
                    return a.desc > b.desc ? 1 : -1;
                } else {
                    // Implicit descending
                    return a.desc > b.desc ? -1 : 1;
                }
            });
            break;
        case "age":
            sortedAnimals = filteredAnimals.sort((a, b) => {
                if (sortDirection === "asc") {
                    // Ascending
                    return a.age > b.age ? 1 : -1;
                } else {
                    // Implicit descending
                    return a.age > b.age ? -1 : 1;
                }
            });
            break;
        default:
            console.error("Unsupported Sorter", sort);
    }
    return sortedAnimals;
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
    filteredAnimals = allAnimals;
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
    console.log("DisplayList", animals);
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