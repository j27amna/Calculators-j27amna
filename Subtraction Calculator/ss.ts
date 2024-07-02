#! /usr/bin/env node 

import inquirer from "inquirer"

console.log("=> You've to enter two numbers first and you'll get the answer");
console.log("=> After that you'll enter three numbers and will get the sum of all the above numbers");
console.log("Let's get started!!");

const ans1 = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter First Number"
    }
]);

const ans2 = await inquirer.prompt([
    {
        name: "num2",
        type: "number",
        message: "Enter second number"
    }
]);

let total1 : number = ans1.num1 - ans2.num2
console.log(`Your first answer : ${total1}`);

const ans3 = await inquirer.prompt([
    {
        name : "num3",
        type : "number",
       message : "Enter number"
    }
]);

const ans4 = await inquirer.prompt([
    {
        name : "num4",
        type : "number",
        message : "Enter number"
    }
]);

const ans5 = await inquirer.prompt([
    {
        name : "num5",
        type : "number",
        message : "Enter number"
    }
]);

let total2 : number = ans3.num3 - ans4.num4 - ans5.num5 - total1
console.log(`Your final answer is : ${total2}`);