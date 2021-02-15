"use strict";

function hex2rgb(color) {
    const colorSplit = color.split("#");
    console.log(colorSplit);

    const hex1 = colorSplit[1].substring(0, 2);
    console.log(hex1);
    const r = Number.parseInt(hex1, 16);

    const hex2 = colorSplit[1].substring(2, 4);
    console.log(hex2);
    const g = Number.parseInt(hex2, 16);

    const hex3 = colorSplit[1].substring(4, 6);
    console.log(hex3);
    const b = Number.parseInt(hex3, 16);

    console.log("rgb: " + r, g, b);
}

console.log(hex2rgb("#bada55"));
console.log(hex2rgb("#facade"));
console.log(hex2rgb("#c0ffee"));
console.log(hex2rgb("#f00b42"));
console.log(hex2rgb("#c0de25"));