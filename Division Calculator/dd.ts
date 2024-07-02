#! /usr/bin/env node

import inquirer from "inquirer"

console.log("       DIVISION:-     ");

const ans1 = await inquirer.prompt([
    {
        name : "num1",
        type : "number",
        message : "Enter your number"
    }
]);

const ans2 = await inquirer.prompt([
    {
        name : "num2",
        type: "number",
        message: "Enter your number"
    }
]);

let total : number = ans1.num1 / ans2.num2
console.log(`Your answer = ${total}`);

let remainder : number = ans1.num1 % ans2.num2
console.log(`And ${remainder} is your remainder.`);
