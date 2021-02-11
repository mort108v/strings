"use strict";

// const bar = document.getElementsByClassName(".bar");
const bars = document.getElementById("bars");

let myBarArray = Array.from({ length: 40 }, (_, i) => getMyNumberOfCustomers());

function getMyNumberOfCustomers() {
    console.log("Get number of customers")
    return Math.floor(Math.random() * 120);
}

addEventListener("load", startBarchart);

function startBarchart() {
    console.log("Barchart startet");

    createBarElements();
    changeHeightOfBars();
    // shift data
    setInterval(() => {
        shiftBarsInArray();
        changeHeightOfBars();
    }, 500);
    // change height function ln13
}

function createBarElements() {
    console.log("My Bar Array");

    for (let i = 0; i < myBarArray.length; i++) {
        // Create boxes
        const bar = document.createElement("div");
        const barBox = bars.appendChild(bar);
        barBox.classList.add("bar");

    }
    // myBarArray = barKeep;
    console.log(myBarArray);
}

function changeHeightOfBars() {
    console.log("Changing the height of my bars");

    for (let i = 0; i < bars.children.length; i++) {

        bars.children[i].style.height = myBarArray[i] + "px";
        // console.log(getMyNumberOfCustomers());
    }
}

function shiftBarsInArray() {
    console.log("Shifting bars");

    const firstArrayElement = myBarArray.shift();
    myBarArray.push(firstArrayElement);

    // setTimeout(shiftBarsInArray, 500);
}