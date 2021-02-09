"use strict";

let typedText = document.querySelector(".typewritten");
let typed;

let nthletter = 0;
let typingSpeed = 200;

let charOneSound = document.getElementById("typekey1");
let charTwoSound = document.getElementById("typekey2");
let spaceSound = document.getElementById("typespace");
let lastKeySound = document.getElementById("typelast");
let returnSound = document.getElementById("typereturn");

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init");

    // Festch txt from HTML
    typed = typedText.innerHTML;
    // Clear fetched text
    typedText.innerHTML = "";
    //Start Loop function
    typewriterLoop(typed);
}

function typewriterLoop() {
    console.log(typed);
    console.log("This letter is number (" + nthletter + ")");

    if (nthletter < typed.length) {
        console.log("The length of string is = " + typed.length);

        // - Set textContent to substring of 0 to N
        typedText.textContent += typed.charAt(nthletter);
        // Imcrement N (++) 
        nthletter++;



        // Wait before calling loop again
        setTimeout(typewriterLoop, typingSpeed);
    }
}