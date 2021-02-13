"use strict";

window.addEventListener("DOMContentLoaded", start);

const allStudents = [];

function start() {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("https://petlatkea.dk/2021/hogwarts/students.json")
        .then(response => response.json())
        .then(jsonData => {
            // when loaded, prepare objects
            prepareObjects(jsonData);
        });
}

function prepareObjects(jsonData) {
    jsonData.forEach(jsonObject => {
        // TODO: Create new object with cleaned data - and store that in the allStudents array
        const Student = {
            firstname: " ",
            middlename: "",
            lastname: " ",
            nickname: "",
            gender: " ",
            house: " ",
            image: "",
        }
        const student = Object.create(Student);

        // Student Full Name 
        const studentFullName = jsonObject.fullname.substring(0).toLowerCase().trim();
        const studentFullNameSplit = studentFullName.split(" ");

        // Indexing "Quotes" and Hyphens
        const quote = studentFullName.indexOf(`"`);
        const hyphen = studentFullName.indexOf("-");


        // Student First Name
        const studentFirstname = studentFullNameSplit[0];
        student.firstname = studentFirstname.charAt(0).toUpperCase() + studentFirstname.substring(1);

        // Student Middle Name
        if (studentFullNameSplit.length > 2) {
            const studentMiddlename = studentFullNameSplit[1];
            student.middlename = studentMiddlename.charAt(0).toUpperCase() + studentMiddlename.substring(1);
        }
        if (studentFullNameSplit.length > 2) {
            // Student Last Name
            const studentLastname = studentFullNameSplit[2];
            student.lastname = studentLastname.charAt(0).toUpperCase() + studentLastname.substring(1);
        } else if (studentFullNameSplit.length == 2) {
            const studentLastnameTwo = studentFullNameSplit[1];
            student.lastname = studentLastnameTwo.charAt(0).toUpperCase() + studentLastnameTwo.substring(1);
        }
        // Student Nickname
        if (studentFullName.includes(`"`)) {
            student.middlename = "";
            const studentNickname = studentFullNameSplit[1];
            student.nickname = `"` + studentNickname.charAt(1).toUpperCase() + studentNickname.substring(1);
        }

        // Student Gender

        const studentGender = jsonObject.gender.substring().toLowerCase();
        student.gender = studentGender.charAt(0).toUpperCase() + studentGender.substring(1);

        // student.gender = studentGenderFirst.substring(0, 1).toUpperCase();
        // Student House


        // Student Image File
        // const studentHouse = jsonObject.house.substring().toLowerCase();
        // const studentImageURL = "images/"

        // const nameLastPart = firstName.substring(1);
        // student.firstname = studentFirstLetter + studenFirstname;
        // student.middlename = studentFullName.substring(firstSpace, lastSpace);
        // student.lastname = studentFullName.substring(lastSpace + 1);
        // student.nickname = jsonObject


        // student.house = studentHouse.substring(0, 1).toUpperCase();
        // student.image = studentImageURL + lastname.toLowerCase() + "_" + firstname.substring(0, 1).toLowerCase() + ".png";


        // const firstSpace = studentFullName.indexOf(" ");
        // const lastSpace = studentFullName.lastIndexOf(" ");

        // student.name = studentFullName.substring(0, firstSpace);
        // student.desc = studentFullName.substring(firstSpace, lastSpace);
        // student.type = studentFullName.substring(lastSpace + 1);
        // student.age = jsonObject.age;

        // const studentData = jsonObject.fullname.split(" ");
        // student.name = studentData[0];
        // student.desc = studentData[2];
        // student.type = studentData[3];
        // student.age = jsonObject.age;

        allStudents.push(student);
        console.log(allStudents);
        //         const name = jsonObject.fullname;
        // const type = jsonObject.fullname;
        // const desc = jsonObject.fullname;
        // const age = jsonObject.age;
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allStudents.forEach(displayStudent);
}

function displayStudent(student) {
    // create clone
    const clone = document.querySelector("template#student").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=firstname]").textContent = student.firstname;
    clone.querySelector("[data-field=middlename]").textContent = student.middlename;
    clone.querySelector("[data-field=lastname]").textContent = student.lastname;
    clone.querySelector("[data-field=nickname]").textContent = student.nickname;
    clone.querySelector("[data-field=gender]").textContent = student.gender;
    clone.querySelector("[data-field=house]").textContent = student.house;
    clone.querySelector("[data-field=image]").textContent = student.image;

    // append clone to list
    document.querySelector("#list tbody").appendChild(clone);
}