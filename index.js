#! /usr/bin/env node
import inquirer from "inquirer";
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
