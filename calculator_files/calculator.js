 "use strict"

 const calculateButton = document.querySelector("#calculate");

 document.addEventListener("DOMContentLoaded", initCalc);

 function initCalc() {
     console.log("initCalc");
     // Init calc
     // Listen for click "Calculate"
     calculateButton.addEventListener("click", () => readNumbers());
 }

 function readNumbers() {
     console.log("readNumbers");

     //  parse(firstNumber), calc();
     //  parse.number(secondNumber), calc(); 
     //  parse.innerText(operator), calc();

     // Read first number
     let firstNumber = document.getElementsByName("firstnumber").value;
     // Read second number
     let secondNumber = document.getElementsByName("secondnumber").value;
     // Read Operator choice
     let operator = document.getElementsByName("operator").innerText;

     calc(firstNumber, secondNumber, operator);
 }

 function calc() {
     console.log("calc");
     // IF/ELSE
     // Calc 1.+2. add 
     // Calc 1.+2. multiply
     // Calc 1.+2. subtract
     // Calc 1.+2. divide 
     // round result?
     // IF/ELSE - Rounding/ No
     // Spit out

     decimalCount();
 }

 function decimalCount() {
     console.log("decimalCount");
     // Count Number of decimals
     // Spit out

     roundResult();
 }

 function roundResult() {
     console.log("roundResult");
     // Round decimal down picked
     // Spit out in first number field
     // Append to end of list 
     // Scroll down to end

     clearOutputs();
 }

 function clearOutputs() {
     console.log("clearOutputs");
     // Clear all entries and outputs. results

     end();
 }

 function end() {
     console.log("end");

 }