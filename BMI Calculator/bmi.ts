#! /usr/bin/env node

import inquirer from "inquirer"

let weight = await inquirer.prompt(
    [
        {
            name: 'weight1',
            type: 'number',
            message: 'Enter your weight here:'
        }
    ]
); 

let height: any = await inquirer.prompt(
    [
        {
            name: 'height1',
            type: 'number',
            message: 'Enter your height here:'
        }
    ]

);

let bmi : number = weight.weight1 / (height.height1 * height.height1);

console.log(`Your BMI is : ${bmi}`);

