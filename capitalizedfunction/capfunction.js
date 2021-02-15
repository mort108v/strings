"use strict";

// const firstName = "mOrten";

function capitalized(str) {
    // const nameToLower = str.substring(0).toLowerCase();
    // const firstCapped = nameToLower.substring(0, 1).toUpperCase();
    // const restOfName = nameToLower.substring(1);
    // const nameConcated = firstCapped + restOfName;

    const result = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    console.log(result);
}

fullName("Potter", "Harry", "James");

let firstName = "moRten";
let middleName = "bO";
let lastName = "sixHoej";

function fullName(lastName, firstName, middleName) {


    const result = firstName + " " + middleName + " " + lastName;

    // const firstSpace = fullName.indexOf(" ");
    // const lastSpace = fullName.lastIndexOf(" ");

    // const first = firstName.substring(0, firstSpace);
    // const middle = middleName.substring(firstSpace + 1, lastSpace);
    // const last = lastName.substring(lastSpace + 1);


    console.log(result);
}
// const firstSpace = fullName.indexOf(" ");
// const lastSpace = fullName.lastIndexOf(" ");


// console.log(`First name is ${firstName}, Middle name is ${middleName} and Last name is ${lastName}`);


// const firstName = fullName.substring(0, firstSpace);
// const first3 = firstName.substring(0, 3);
// const uppercaseMiddle = firstName.substring(3, 4).toUpperCase();
// const last2 = firstName.substring(4, 6);
// const nameConcated = first3 + uppercaseMiddle + last2;
// console.log(nameConcated);