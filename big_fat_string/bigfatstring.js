"use strict";

document.addEventListener("DOMContentLoaded", init);

const inputField = document.getElementById("anyText");
const userChoiceValue = document.getElementById("choices");
const submitTheResult = document.getElementById("submit");
const outputBox = document.getElementById("output");

let nameInput;
let convertOption;
let stringResult;

function init() {
    console.log("Converter Initialized");

    submitTheResult.addEventListener("click", fetchInput);
}

function fetchInput() {
    console.log("fetchInput");

    nameInput = inputField.value;

    if (nameInput) {
        fetchUserChoice();
    } else {
        console.log("Inputfield is empty!")
    }
}

function fetchUserChoice() {
    console.log("fetchUserChoice");

    convertOption = userChoiceValue.value;

    if (convertOption == "0") {
        firstUppercase();
    } else if (convertOption == "1") {
        firstFromFull();
    } else if (convertOption == "2") {
        ifFullFindLengthOfFirst();
    } else if (convertOption == "3") {
        if3FindMiddle();
    } else if (convertOption == "4") {
        ifFileNameCheck();
    } else if (convertOption == "5") {
        hidePassword();
    } else if (convertOption == "6") {
        makeThirdUpperCase();
    } else if (convertOption == "7") {
        mkUpperCaseAfterSpaceAndHyphen();
    }

    // option.value("0") = firstUppercase();
    // option.value("1") = firstFromFull();
    // option.value("2") = ifFullFindLengthOfFirst();
    // option.value("3") = if3FindMiddle();
    // option.value("4") = ifFileNameCheck();
    // option.value("5") = hidePassword();
    // option.value("6") = makeThirdUpperCase();
    // option.value("7") = mkUpperCaseAfterSpaceAndHyphen();
}

function firstUppercase() {
    console.log("firstUppercase");

    const firstLetter = nameInput[0].toUpperCase();
    const restOfFirstName = nameInput.substring(1).toLowerCase();

    stringResult = `${firstLetter}${restOfFirstName}`;

    submitResult();
}

function firstFromFull() {
    console.log("firstFromFull");

    const firstNamePosition = nameInput.indexOf(" ");
    stringResult = nameInput.substring(0, firstNamePosition);

    submitResult();
}

function ifFullFindLengthOfFirst() {
    console.log("ifFullFindLengthOfFirst");

    const firstNamePosition = nameInput.indexOf(" ");
    stringResult = nameInput.substring(0, firstNamePosition).length;

    submitResult();
}

function if3FindMiddle() {
    console.log("if3FindMiddle");

    const firstPosition = nameInput.indexOf(" ") + 1;
    const lastPosition = nameInput.lastIndexOf(" ");

    const middleName = nameInput.substring(firstPosition, lastPosition);

    stringResult = `Middle name: ${middleName} at position ${firstPosition} and ${lastPosition}`;

    submitResult();
}

function ifFileNameCheck() {
    console.log("ifFileNameCheck");

    const fileType = nameInput.lastIndexOf(".");
    stringResult = nameInput.substring(fileType);

    submitResult();
}

function hidePassword() {
    console.log("hidePassword");

    const asteric = "*";
    stringResult = asteric.repeat(nameInput.length);

    submitResult();
}

function makeThirdUpperCase() {
    console.log("makeThirdUpperCase");

    const beforeUppercase = nameInput.substring(0, 2).toLowerCase();
    const uppercaseLetter = nameInput[2].toUpperCase();
    const afterUppercase = nameInput.substring(3).toLowerCase();

    stringResult = `${beforeUppercase}${uppercaseLetter}${afterUppercase}`;

    submitResult();
}

function mkUpperCaseAfterSpaceAndHyphen() {
    console.log("mkUpperCaseAfterSpaceAndHyphen");

    nameInput.toLowerCase();
    const firstSpace = nameInput.indexOf(" ");

    const nameBeforePart = nameInput.substring(0, firstSpace + 1);
    const character = nameInput[firstSpace + 1];
    const nameAfter = nameInput.substring(firstSpace + 2);

    const letterCapitalized = nameBeforePart +
        character.toUpperCase() +
        nameAfter;

    const firstHyphen = letterCapitalized.indexOf("-");

    const hyphenBefore = letterCapitalized.substring(0, firstHyphen + 1);
    const hyphenCharacter = letterCapitalized[firstHyphen + 1];
    const hyphenAfter = letterCapitalized.substring(firstHyphen + 2);

    const hyphenCapitalized = hyphenBefore +
        hyphenCharacter.toUpperCase() +
        hyphenAfter;

    stringResult = hyphenCapitalized;

    submitResult();
}

function submitResult() {
    console.log(stringResult);

    outputBox.textContent = stringResult;
}