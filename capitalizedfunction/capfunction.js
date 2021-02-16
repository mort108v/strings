"use strict";

// const firstName = "mOrten";

function capitalized(str) {
    // const nameToLower = str.substring(0).toLowerCase();
    // const firstCapped = nameToLower.substring(0, 1).toUpperCase();
    // const restOfName = nameToLower.substring(1);
    // const nameConcated = firstCapped + restOfName;
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

let studentName = "pOtter haRRy JamES";

let firstName = "moRten";
let middleName = "bO";
let lastName = "sixHoej";

// console.log(capitalized(firstName));
// console.log(capitalized(middleName));
// console.log(capitalized(lastName));

function fullName(lastName, firstName, middleName) {
    // console.log(firstName, lastName, middleName);
    // const firstSpace = nameStr.indexOf(" ");
    // const lastSpace = nameStr.lastIndexOf(" ");
    // let first = nameStr.substring(0, firstSpace);
    // let middle = nameStr.substring(firstSpace + 1, lastSpace);
    // let last = nameStr.substring(lastSpace + 1);

    return { firstName, middleName, lastName };
}
console.log(fullName(capitalized(studentName)));
// const firstSpace = fullName.indexOf(" ");
// const lastSpace = fullName.lastIndexOf(" ");


// console.log(`First name is ${firstName}, Middle name is ${middleName} and Last name is ${lastName}`);


// const firstName = fullName.substring(0, firstSpace);
// const first3 = firstName.substring(0, 3);
// const uppercaseMiddle = firstName.substring(3, 4).toUpperCase();
// const last2 = firstName.substring(4, 6);
// const nameConcated = first3 + uppercaseMiddle + last2;
// console.log(nameConcated);