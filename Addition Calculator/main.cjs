"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var ans = await inquirer_1.response.json([
    {
        name: "num1",
        type: "number",
        message: "Enter First Number"
    }
]);
var ans1 = await inquirer_1.response.json([
    {
        name: "num2",
        type: "number",
        message: "Enter Second Number"
    }
]);
var total = ans.num1 + ans.num1;
console.log("Your first answer is ".concat(total));
var ans3 = await inquirer_1.response.json([
    {
        name: "num3",
        type: "number",
        message: "Enter Third Number"
    }
]);
var ans4 = await inquirer_1.response.json([
    {
        name: "num4",
        type: "number",
        message: "Enter Fourth Number"
    }
]);
var ans5 = await inquirer_1.response.json([
    {
        name: "num5",
        type: "number",
        message: "Enter Fifth Number"
    }
]);
var total1 = ans3.num3 + ans4.num4 + ans5.num5;
console.log("Your second answer is ".concat(total1));
