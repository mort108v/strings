"use strict";

const fullName = "morten bo sixhoej";

const firstSpace = fullName.indexOf(" ");
const firstName = fullName.substring(0, firstSpace);
const firstWithUpCase = firstName.charAt(0).toUpperCase();
const nameLastPart = firstName.substring(1);

const fullFirstName = firstWithUpCase + nameLastPart;

console.log(fullFirstName);

// const firstName = fullName.substring(0, firstSpace);
// const first3 = firstName.substring(0, 1).toUpperCase();
// const uppercaseMiddle = firstName.substring(3, 4);
// const last2 = firstName.substring(4, 6);
// const nameConcated = first3 + uppercaseMiddle + last2;
// console.log(nameConcated);

// const firstName = fullName.substring(0, firstSpace);
// const middleName = fullName.substring(firstSpace + 1, lastSpace);
// const lastName = fullName.substring(lastSpace + 1);

// console.log(`First name is ${firstName}, Middle name is ${middleName} and Last name is ${lastName}`);