"use strict";

const people = ["Harry", "Ron", "Hermione"];
console.log(people);

let result;

result = people.push("Draco");
console.log("push " + result);
console.log(people);

result = people.pop();
console.log("pop " + result);
console.log(people);

result = people.push("Neville");
console.log("push " + result);
console.log(people);

result = people.push("Luna");
console.log("push " + result);
console.log(people);

result = people.slice(0, 3);
console.log("slice " + result);
console.log(people);

result = people.splice(1, 0, "Cho");
console.log("splice " + result);
console.log(people);

people[1] = "ginny";
console.log("People 1 " + result);
console.log(people);

result = people.push("Fred", "George");
console.log("push " + result);
console.log(people);

result = people.indexOf("Fred");
console.log("indexOf " + result);
console.log(people);

result = people.splice(result, 1);
console.log("splice " + result);
console.log(people);

result = people.unshift(0);
console.log("unshift " + result);
console.log(people);

result = people.shift();
console.log("shift " + result);
console.log(people);

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

// Create an array based on a property of DOM Elements
const images = document.getElementsByTagName('img');
const sources = Array.from(images, image => image.src);
const insecureSources = sources.filter(link => link.startsWith('http://'));

document.addEventListener("DOMContentLoaded", sequenceGenerator);

function sequenceGenerator() {
    // Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

    console.log(range);

    // Generate numbers range 0..4
    const range1 = range(0, 4, 1);
    // [0, 1, 2, 3, 4]
    console.log(range1);

    // Generate numbers range 1..10 with step of 2
    const range2 = range(1, 10, 2);
    // [1, 3, 5, 7, 9]
    console.log(range2);

    // Generate the alphabet using Array.from making use of it being ordered as a sequence
    const range3 = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
    // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    console.log(range);
}