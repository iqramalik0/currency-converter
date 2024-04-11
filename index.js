#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    THB: 39.743,
    MYR: 5.1462,
    TRY: 34.6312,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "THB", "MYR", "TRY", "PKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "THB", "MYR", "TRY", "PKR"]
    },
    {
        name: "amount",
        message: " Enter your currency",
        type: "number"
    },
]);
let fromAmount = currency[user_answer.from]; //exchange rate 
let toAmount = currency[user_answer.to]; //exchange rate 
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD base currency //4
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
