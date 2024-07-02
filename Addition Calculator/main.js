#! /usr/bin/env node
import inquirer from "inquirer";
const ans = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter First Number"
    }
]);
const ans1 = await inquirer.prompt([
    {
        name: "num2",
        type: "number",
        message: "Enter Second Number"
    }
]);
let total = ans.num1 + ans1.num2;
console.log(`Your first answer is ${total}`);
const ans3 = await inquirer.prompt([
    {
        name: "num3",
        type: "number",
        message: "Enter Third Number"
    }
]);
const ans4 = await inquirer.prompt([
    {
        name: "num4",
        type: "number",
        message: "Enter Fourth Number"
    }
]);
const ans5 = await inquirer.prompt([
    {
        name: "num5",
        type: "number",
        message: "Enter Fifth Number"
    }
]);
let total1 = ans3.num3 + ans4.num4 + ans5.num5;
console.log(`Your second answer is ${total1}`);
