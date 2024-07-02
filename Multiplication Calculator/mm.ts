#! /usr/bin/env node 

import inquirer from "inquirer"

console.log("MULTIPLICATION CALCULATOR:-");

const ans1 = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter number"
    }
]);

const ans2 = await inquirer.prompt([
    {
        name : "num2",
        type : "number",
        message : "Enter number"
    }
]);

const ans3 = await inquirer.prompt([
    {
        name : "num3",
        type : "number",
        message : "Enter number"
    }
]);

let total : number = ans1.num1 * ans2.num2
console.log(`First number & Second number = ${total}`);

let total1 : number = ans2.num2 * ans3.num3
console.log(`Second number & Third number = ${total1}`);

let total2 : number = ans1.num1 * ans3.num3
console.log(`First number & Third number = ${total2}`);

let total3 : number = ans1.num1 * ans2.num2 * ans3.num3
console.log(`Your Final Answer = ${total3}`);


console.log("               POWERS:-              ");


let power1 : number = ans1.num1 ** ans2.num2
console.log(`No.1 power No.2 : ${power1} `);

let power2 : number = ans2.num2 ** ans3.num3
console.log(`No.2 power No.3 : ${power2}`);

let power3 : number = ans3.num3 ** ans1.num1
console.log(`No.3 power No.1 : ${power3}`);

let power4 : number = ans1.num1 ** ans3.num3
console.log(`No.1 power No.3 : ${power4}`);

let power5 : number = ans2.num2 ** ans1.num1
console.log(`No.2 power No.1 : ${power5}`);

let power6 : number = ans3.num3 ** ans2.num2
console.log(`No.3 power No.2 : ${power6}`);


console.log("   -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-")
