"use strict";

// const bar = document.getElementsByClassName(".bar");
const bars = document.getElementById("bars");

let myBarArray = Array.from({ length: 40 }, (_, i) => { return { height: getMyNumberOfCustomers(), randomColor: randomBackgroundColor() } });

function getMyNumberOfCustomers() {
    console.log("Get number of customers")
    return Math.floor(Math.random() * 195);
}

addEventListener("load", startBarchart);

function startBarchart() {
    console.log("Barchart startet");

    createBarElements();
    changeHeightOfBars();
    // shift data
    setInterval(() => {
        shiftBarsInArray();
        // change height function
        changeHeightOfBars();
    }, 500);
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

        bars.children[i].style.height = myBarArray[i].height + "px";
        bars.children[i].innerHTML = myBarArray[i].height;
        bars.children[i].style.backgroundColor = myBarArray[i].randomColor;
        // Input random colors
    }
}

function shiftBarsInArray() {
    console.log("Shifting bars");

    const firstArrayElement = myBarArray.shift();
    myBarArray.push(firstArrayElement);

    // setTimeout(shiftBarsInArray, 500);
}

function randomBackgroundColor() {
    console.log("randomBackgroundColor");

    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    return `rgba(${x},${y},${z}, 0.65)`;
}