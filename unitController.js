const convert = require("./unitConversion")
const prompt = require('prompt-sync')();

let i = 0;
do{ 
console.log("Enter your choice \n1. Length \n2. Temprature \n3. Volume \n4. Exit")
let choice = Number(prompt('enter your chice  '))
switch(choice){
    case 1:
        convert.convertLength();
        break;
    case 2:
        convert.convertTemprature();
        break;
    case 3:
        convert.convertVolum();
        break;
    case 4:
        i = 1;
        break;
    default:
        console.log('Invalid choice')
}
}while(i == 0)

