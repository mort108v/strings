"use strict";

const colorPicker = document.getElementById("color-picker");
const colorResultDIV = document.getElementById("result");

addEventListener("DOMContentLoaded", initColorPicker);

function initColorPicker() {
    console.log("Colorpicker Startet");

    // Init Return color from picker
    colorPicker.addEventListener("change", () => {
        console.log("Color Changed");

        fetchColor();
        if (fetchColor(result) != colorResultDIV.value) {
            sendColorToResult(fetchColor(result));
        }
    })

    // Init hexToRGB from colorresult
    hexToRGB(fetchColor(result));

    // init rgb to HSL
    rgbToHSL(hexToRGB(r, g, b))
        // Init Send HEX, RGB and HSL numbers to respective divs
}


function fetchColor() {
    console.log("Fetching Color from Selector");

    // Get HEX code from div
    const result = colorPicker.value;
    console.log(result);

    return result;
}

// Function sendColorToResult
function sendColorToResult(colorInput) {
    console.log("Parse colorresult to DIV");

    colorResultDIV.style.backgroundColor = colorInput;
}

// Function hexToRGB
function hexToRGB(hex) {
    hex = hex.substring(1);
    let r = hex.substring(0, 2);
    let g = hex.substring(2, 4);
    let b = hex.substring(4, 6);
    r = Number.parseInt(r, 16);
    g = Number.parseInt(g, 16);
    b = Number.parseInt(b, 16);
    return { r, g, b };
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
    const result = `#${hexPart1}${hexPart2}${hexPart3}`;
    console.log(result);

    return `#${hexPart1}${hexPart2}${hexPart3}`;

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
    return ("hsl(%f,%f%,%f%)", h, s, l);
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
    console.log(r, g, b);
    return (r, g, b);
}

// Function Send HEX, RGB and HSL numbers to respective divs



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