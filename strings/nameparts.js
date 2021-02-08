"use strict";

const fullName = "Morten Bo Sixhoej";

const firstSpace = fullName.indexOf(" ");
const lastSpace = fullName.lastIndexOf(" ");

const firstName = fullName.substring(0, firstSpace);
const middleName = fullName.substring(firstSpace + 1, lastSpace);
const lastName = fullName.substring(lastSpace + 1);

console.log(`First name is ${firstName}, Middle name is ${middleName} and Last name is ${lastName}`);