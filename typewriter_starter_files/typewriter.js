"use strict";

let typedText = document.querySelector(".typewritten");
let typed;
let somethingHappened;

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init");

    // Festch txt from HTML
    typed = typedText.innerHTML;
    // Clear fetched text
    typedText.innerHTML = "";
    //Start Loop function
    myLoop(typed);
}

function myLoop() {
    console.log(typed);

    // Show the N'th letter

    // - Set textContent to substring of 0 to N

    // Imcrement N (++) 

    // Wait before calling loop again

    if (somethingHappened) {
        setTimeout(myLoop, 500);
    }
}