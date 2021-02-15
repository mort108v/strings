"use strict";

document.querySelector(".selector").addEventListener("change", fetchColor);

function fetchColor() {
    console.log("Fetching Color")

    let currentColor = window.getComputedStyle(color, null).getPropertyValue('background-color');
    console.log(currentColor);
}

function rgb2hex(color) {
    const firstSpace = color.indexOf(" ");
    const lastSpace = color.lastIndexOf(" ");

    let r = color.substring(0, firstSpace);
    //adds leading 0 to single-digit codes
    let hexPart1 = Number(parseInt(r, 10)).toString(16);
    if (hexPart1.length == 1) {
        hexPart1 = ("0" + hexPart1);
    }

    let g = color.substring(firstSpace + 1, lastSpace);
    let hexPart2 = Number(parseInt(g, 10)).toString(16);
    if (hexPart2.length == 1) {
        hexPart2 = ("0" + hexPart2);
    }

    let b = color.substring(lastSpace + 1);
    let hexPart3 = Number(parseInt(b, 10)).toString(16);
    if (hexPart3.length == 1) {
        hexPart3 = ("0" + hexPart3);
    }
    const hexColor = "#" + hexPart1 + hexPart2 + hexPart3;
    console.log(hexColor);
}

function rgbToHSL(r, g, b) {

    r /= 255;
    g /= 255;
    b /= 255;

    let h, s, l;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (max === min) {
        h = 0;
    } else
    if (max === r) {
        h = 60 * (0 + (g - b) / (max - min));
    } else
    if (max === g) {
        h = 60 * (2 + (b - r) / (max - min));
    } else
    if (max === b) {
        h = 60 * (4 + (r - g) / (max - min));
    }

    if (h < 0) { h = h + 360; }

    l = (min + max) / 2;

    if (max === 0 || min === 1) {
        s = 0;
    } else {
        s = (max - l) / (Math.min(l, 1 - l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
}

function cssToRGB(rgbFromCSS) {
    const parStart = rgbFromCSS.indexOf("(");
    const parEnd = rgbFromCSS.indexOf(")");

    const numbersOnly = rgbFromCSS.substring(parStart + 1, parEnd);
    // console.log(numbersOnly);

    const firstSpace = numbersOnly.indexOf(" ");
    const secondSpace = numbersOnly.lastIndexOf(" ");

    const firstNumber = numbersOnly.substring(0, firstSpace - 1);
    const r = Number(parseInt(firstNumber)).toString();

    const secondNumber = numbersOnly.substring(firstSpace + 1, secondSpace + 1);
    const g = Number(parseInt(secondNumber)).toString();

    const thirdNumber = numbersOnly.substring(secondSpace);
    const b = Number(parseInt(thirdNumber)).toString();

    // const rgbColorString = r + " " + g + " " + b;
    console.log(rgbToHSL(r, g, b));
}
// console.log(cssToRGB("rgb(2, 14, 1)"));
// console.log(cssToRGB("rgb(12, 213, 211)"));
// console.log(cssToRGB("rgb(192, 1, 12)"));


// function cleanCSS(cssColor) {
//     const parStart = cssColor.indexOf("(");
//     const parEnd = cssColor.indexOf(")");
//     const rgbColorString = cssColor.substring(parStart + 1, parEnd);
//     console.log(rgbColorString);
// }
// console.log(cleanCSS("rgb(192, 13, 1)"));