"use strict";

let x = 0;
// let result;
const range = [];
// let start = x;
// let stop = 10;
// let step = 1;
// let i;

// const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

document.addEventListener("DOMContentLoaded", theCounter);

function theCounter() {
    console.log("theCounter");

    range.unshift(x);
    x++

    if (x > 9) {
        range.pop(range);
    }

    console.log(range);

    setTimeout(theCounter, 500);
    // range = (0, 9, 1);
    // result = Array.from(range, x => x + 1)
    // console.log(result);

    // const myRange = [(0, 10, 1)];
    // console.log(myRange);
    // result = myRange.push(x);
    // x++
    // console.log(result, Array.from(myRange, x => x++));

    // let range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

    // Generate numbers range 0..9

    // [0, 1, 2, 3, 4 .....9]

    // console.log(myRange);
    // x++

    // myRange.reverse();
    // result = myRange.push(x);

    // myRange.push(result);
    // myRange.push(myRange.length);
    // myRange.reverse();

    // console.log(result, myRange);



}