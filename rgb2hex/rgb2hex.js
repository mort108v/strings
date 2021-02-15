"use strict";

function rgb2hex(color) {
    const firstSpace = color.indexOf(" ");
    const lastSpace = color.lastIndexOf(" ");

    const r = color.substring(0, firstSpace);
    const hexPart1 = Number(parseInt(r, 10)).toString(16);

    const g = color.substring(firstSpace + 1, lastSpace);
    const hexPart2 = Number(parseInt(color, 10)).toString(16);

    const b = color.substring(lastSpace + 1);
    const hexPart3 = Number(parseInt(color, 10)).toString(16);

    const rgbColor = hexPart1 + hexPart2 + hexPart3;

    //         const g = color.substring(r, +1, b);
    // const b = color.lastIndexOf(" ").substring[0];
    // const rgb = r + g + b;
    // const hexColor = "#" + rgb;
    // console.log(colorSplit);

    // const hex1 = colorSplit[1].substring(0, 2);
    // console.log(hex1);
    // const r = Number.parseInt(hex1, 16);

    // const hex2 = colorSplit[1].substring(2, 4);
    // console.log(hex2);
    // const g = Number.parseInt(hex2, 16);

    // const hex3 = colorSplit[1].substring(4, 6);
    // console.log(hex3);
    // const b = Number.parseInt(hex3, 16);

    console.log("#" + rgbColor);
}

console.log(rgb2hex("186 218 85"));
console.log(rgb2hex("250 202 222"));
console.log(rgb2hex("192 255 238"));
console.log(rgb2hex("240 11	66"));
console.log(rgb2hex("192 222 37"));
console.log(rgb2hex("12	2 17"));
console.log(rgb2hex("1 2 3"));
console.log(rgb2hex("9 0 37"));