"use strict";

// From 1 to 10
// let counterUp;
for (let counterUp = 0; counterUp < 10; counterUp++) {
    console.log(counterUp);
}
// console.log(`After the loop, the counter is ${counterUp}`);

// From 10 to 0, and after 0 it console.logs the text: “liftoff”
// let counterDown;
for (let counterDown = 10; counterDown >= 0; counterDown--) {
    console.log(counterDown);
    if (counterDown == 0) {
        console.log("LiftOff");
    }
}
// console.log(`After the loop, the counter is ${counterDown}`);

// From 1 to 19, but only counts odd numbers (no if-statement, change the increment!)
for (let counterUpper = 1; counterUpper < 20; counterUpper += 2) {
    console.log(counterUpper);
}
// From 1 to 16777216, but doubling each time (2, 4, 8, 16 …)
for (let counterUpper = 1; counterUpper < 16777216; counterUpper *= 2) {
    console.log(counterUpper);
}
// From 111 to 138, in steps of 3 (meaning the second number is 114 (111+3))
for (let counterUpper = 111; counterUpper <= 138; counterUpper += 3) {
    console.log(counterUpper);
}
// From 100 down to 0 in steps of 10
for (let counterDown = 100; counterDown >= 0; counterDown -= 10) {
    console.log(counterDown);
}