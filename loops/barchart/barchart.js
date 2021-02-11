"use strict";

// const bar = document.getElementsByClassName(".bar");
const bars = document.getElementById("bars");

addEventListener("load", startBarchart);

function startBarchart() {
    console.log("Barchart startet");


    createBarElements();
    changeHeightOfBars();
}

function createBarElements() {
    console.log("My Bar Array");

    let myBarArray = Array.from({ length: 40 }, (_, i) => i + 1);
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
        console.log(i);
        bars.children[i].style.height = getMyNumberOfCustomers() + "px";
        // console.log(getMyNumberOfCustomers());
    }
}

function getMyNumberOfCustomers() {
    console.log("Get number of customers")
    return Math.floor(Math.random() * 120);
}