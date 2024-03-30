#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyan.italic("\n\t\t WELCOME TO THIS FUNDAMENTAL CALCULATOR ....\n "));
let user = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "please enter the First Number:"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "please enter the Second Number:"
    },
    {
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplacation", "Division"],
        type: "list",
        message: "please select the operator to perform operation:"
    }
]);
if (user.operator == "Addition") {
    console.log(chalk.cyan.italic(`\nThe Answer Is : ${user.firstNumber + user.secondNumber}`));
}
else if (user.operator == "Subtraction") {
    console.log(chalk.cyan.italic(`\nThe Answer Is : ${user.firstNumber - user.secondNumber}`));
}
else if (user.operator == "Multiplacation") {
    console.log(chalk.cyan.italic(`\nThe Answer Is : ${user.firstNumber * user.secondNumber}`));
}
else if (user.operator == "Division") {
    console.log(chalk.cyan.italic(`\nThe Answer Is : ${user.firstNumber / user.secondNumber}`));
}
else {
    console.log(chalk.red("Please Select The Correct Operator"));
}
