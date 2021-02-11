"use strict";

const bar = document.getElementsByClassName(".bar");
let barKeep = document.getElementById("bars").children;
// let allBars = barKeep.children;

addEventListener("load", startBarchart);

function startBarchart() {
    console.log("Barchart startet");

    barKeep[2].style.height = "20px";

    myArrayOfBars();
}

function myArrayOfBars() {
    console.log("My Bar Array");

    let myBarArray = Array.from({ length: 40 }, (_, i) => i + 1)
    console.log(myBarArray);
}

function changeHeightOfBars() {
    console.log("Changing the height of my bars");


}