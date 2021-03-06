"use strict";

console.log(`Peters Reminder 4 Signs:
    `, `
    ""X" - tekst der kommer ud på skærmen"
    `, `
    "[ ] - et array, eller noget af et array "
    `, `
    "( )- en funktion"
    `, `
    "{ }- et objekt"`);

const colorPicker = document.getElementById("color-picker");
const colorResultDIV = document.getElementById("color-result");

addEventListener("DOMContentLoaded", initColorPicker);

function initColorPicker() {
    console.log("Colorpicker Startet");

    // Init Return color from picker
    colorPicker.addEventListener("input", () => {
        console.log("Color Changed");

        if (colorPicker.value != colorResultDIV.value) {
            sendColorToResult(fetchColor());
            fetchColorsAndParse();
        }
    })
}

function fetchColorsAndParse() {

    // Fetch HEX COlor
    const hex = fetchColor();
    parseHEXToDiv(hex);
    // Init hexToRGB from colorresult
    const rgb = hexToRGB(hex);
    parseRGBToDiv(rgb);
    // init rgb to HSL
    const hsl = rgbToHSL(rgb);
    parseHSLToDiv(hsl);
    // Init cssRGB from rgb
    const css = rgbToCSS(rgb);
    parseCSSToDiv(css);

}
// Function for calculating the 5 different colors



// function for creating 5 colors from the fetched one
function create5colorsFromInitial() {
    console.log("Creating New Color From initial");

    // Make array or something of 5 colors from initial HEX

}

// Get the 5 divs to show them in
function fourRemainingColorDivs() {
    console.log("Returning constants of DIV queries");

    const colorResultDIV1 = document.getElementById("color-result0");
    const colorResultDIV2 = document.getElementById("color-result1");
    const colorResultDIV3 = document.getElementById("color-result2");
    const colorResultDIV4 = document.getElementById("color-result3");

    return { colorResultDIV1, colorResultDIV2, colorResultDIV3, colorResultDIV4 };
}

function fetchColor() {
    console.log("Fetching Color from Selector");

    // Get HEX code from div
    const colorFromPicker = colorPicker.value;
    console.log(colorFromPicker);

    return colorFromPicker;
}

// Function sendColorToResult
function sendColorToResult(colorInput) {
    console.log("Parse colorresult to DIV");

    colorResultDIV.style.backgroundColor = colorInput;
    // fiveRemainingColorDivs.style.backgroundColor = randomBackgroundColor();

}

// Function hexToRGB
function hexToRGB(hex) {
    console.log("The HEX is " + hex);

    hex = hex.substring(1);
    let r = hex.substring(0, 2);
    let g = hex.substring(2, 4);
    let b = hex.substring(4, 6);
    r = Number.parseInt(r, 16);
    g = Number.parseInt(g, 16);
    b = Number.parseInt(b, 16);

    return { r, g, b };
}
// Function rgb2hex
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
// Function rgbToHSL
function rgbToHSL({ r, g, b }) {

    r /= 256;
    g /= 256;
    b /= 256;

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

    h = Math.round(h);
    s = Math.round(s);
    l = Math.round(l);

    console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
    // return ("hsl(%f,%f%,%f%)", h, s, l);
    return { h, s, l };
}
// Function cssToRGB
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
// Function rgbToCSS
function rgbToCSS({ r, g, b }) {
    return `rgb(${r}, ${g}, ${b})`;
}
// Function HSL back to RGB
function newHSLtoRGB {
    console.log("New HSL back to RGB conversion");

    h = h;
    s = s / 100;
    l = l / 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;
    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    console.log(r, g, b);
    return { r, g, b };
}

// Functions Send HEX, RGB, CSS and HSL numbers to respective divs
function parseCSSToDiv(css) {
    document.querySelector(".css").textContent = css;
}

function parseHEXToDiv(hex) {
    hex = hex.toUpperCase();
    document.querySelector(".hex").textContent = `HEX: ${hex}`;
}

function parseRGBToDiv({ r, g, b }) {
    document.querySelector(".rgb").textContent = `R: ${r} G: ${g} B: ${b}`;
}

function parseHSLToDiv({ h, s, l }) {
    document.querySelector(".hsl").textContent = `H: ${h} S: ${s}% L: ${l}%`;
}

// Random RGB Color
function randomBackgroundColor() {
    console.log("randomBackgroundColor");

    const rRandom = Math.floor(Math.random() * 256);
    const gRandom = Math.floor(Math.random() * 256);
    const bRandom = Math.floor(Math.random() * 256);
    const aRandom = Math.ceiling(Math.random());
    return `rgb(${r},${g},${b}, ${a})`;
}