#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`
_________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`);
const answer = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "firstnumber" },
    { message: "enter your second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponentiation", "And", "OR",],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else if (answer.operator === "Modulus") {
    console.log(answer.firstnumber % answer.secondnumber);
}
else if (answer.operator === "Exponentiation") {
    console.log(answer.firstnumber ** answer.secondnumber);
}
else if (answer.operator === "And") {
    console.log(answer.firstnumber && answer.secondnumber);
}
else if (answer.operator === "OR") {
    console.log(answer.firstnumber || answer.secondnumber);
}
else {
    console.log("please select valid operator");
    console.log("The End");
}
