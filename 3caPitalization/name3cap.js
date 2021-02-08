"use strict";

const fullName = "Morten Bo Sixhoej";

const firstSpace = fullName.indexOf(" ");
const lastSpace = fullName.lastIndexOf(" ");

// const firstName = fullName.substring(0, firstSpace);
// const middleName = fullName.substring(firstSpace + 1, lastSpace);
// const lastName = fullName.substring(lastSpace + 1);

// console.log(`First name is ${firstName}, Middle name is ${middleName} and Last name is ${lastName}`);


const firstName = fullName.substring(0, firstSpace);
const first3 = firstName.substring(0, 3);
const uppercaseMiddle = firstName.substring(3, 4).toUpperCase();
const last2 = firstName.substring(4, 6);
const nameConcated = first3 + uppercaseMiddle + last2;
console.log(nameConcated);