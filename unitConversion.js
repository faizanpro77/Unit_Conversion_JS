const prompt = require('prompt-sync')();


function convertLength(){
    let repeat = 0;
    do{
    console.log('\n Enter your choice \n1. kilometre to meter\n2. kilometre to centimeter \n3. kilometre to millimetre \n4. kilometre to micrometres \n5. kilometre to nanometre \n6. kilometre to feet \n7. kilometre to inch');
    console.log(' \n8. meter to kilometre\n9. meter to centimeter \n10. meter to millimetre \n11. meter to micrometres \n12. meter to nanometre \n13. meter to feet \n14. meter to inch');
    console.log(' \n15. centimeter to kilometre\n16. centimeter to centimeter \n17. centimeter to millimetre \n18. centimeter to micrometres \n19. centimeter to nanometre \n20. centimeter to feet \n21. centimeter to inch');
    console.log('22. Exit')
    let choice = Number(prompt("Enter your choice "))
    if(choice < 22)
    var input = Number(prompt('Enter your input : '))
    switch(choice){
        case 1:
            console.log(input + ' kilometre ' + (input * 1000) + ' meter');
            break; 
        case 2:
            console.log(input + ' kilometre ' + (input * 100000) + ' centimeter');
            break;
        case 3:
            console.log(input + ' kilometre ' + (input * 1e+6) + ' millimetre');
            break;
        case 4:
            console.log(input + ' kilometre ' + (input * 1e+9) + ' micrometres');
            break;
        case 5:
            console.log(input + ' kilometre ' + (input *  1e+12) + ' nanometre');
            break;
        case 6:
            console.log(input + ' kilometre ' + (input * 3281) + ' feet');
            break;
        case 7:
            console.log(input + ' kilometre ' + (input * 39370) + ' inch');
            break;

     case 8:
            console.log(input + ' meter ' + (input / 1000) + ' kilometre');
            break; 
        case 9:
            console.log(input + ' meter ' + (input * 100) + ' centimeter');
            break;
        case 10:
            console.log(input + ' meter ' + (input * 1000) + ' millimetre');
            break;
        case 11:
            console.log(input + ' meter ' + (input * 1e+6) + ' micrometres');
            break;
        case 12:
            console.log(input + ' meter ' + (input *  1e+9) + ' nanometre');
            break;
        case 13:
            console.log(input + ' meter ' + (input * 3.281) + ' feet');
            break;
        case 14:
            console.log(input + ' meter ' + (input * 39.37) + ' inch');
            break;
        
        case 15:
            console.log(input + ' centimeter ' + (input / 100000) + ' kilometre');
            break; 
        case 16:
            console.log(input + ' centimeter ' + (input / 100) + ' meter');
            break;
        case 17:
            console.log(input + ' centimeter ' + (input * 10) + ' millimetre');
            break;
        case 18:
            console.log(input + ' centimeter ' + (input * 10000) + ' micrometres');
            break;
        case 19:
            console.log(input + ' centimeter ' + (input *  1e+7) + ' nanometre');
            break;
        case 20:
            console.log(input + ' centimeter ' + (input / 30.48) + ' feet');
            break;
        case 21:
            console.log(input + ' centimeter ' + (input / 2.54) + ' inch');
            break;
        case 22:
            repeat = 1;
            break;
        default:
            console.log('invalid choice');
       }
    }while(repeat == 0)
}

function convertTemprature(){
    let repeat = 0
    do{
    console.log('\nEnter your choice \n1.Fahrentheit to Celsius \n2.Celsius to Fahrentheit \n3.kelvin to celsius \n4.kelvin to Fahrentheit \n5.Fahrentheit to kelvin \n6.Celsius to kelvin \n7. Exit')
    let choice = Number(prompt('Enter your choice '));
    if(choice < 7)
    var input = Number(prompt('enter a valu to convert '));
    switch(choice){
        case 1:
            console.log(input + ' F ' + ((input - 32) * (5/9)) + ' C');
            break;
        case 2:
            console.log(input + ' C ' + ((input * 9/5) + 32) + ' F');  
            break;
        case 3:
            console.log(input + ' K ' + (input - 273.15 ) + ' C');  
            break;
        case 4:
            console.log(input + ' K ' + ((input - 273.15) * 9/5 + 32) + ' F');  
            break;
        case 5:
            console.log(input + ' F ' + ((input - 32) * 5/9 + 273.15) + ' K');  
            break;
        case 6:
            console.log(input + ' C ' + (input + 273.15) + ' K');  
            break;
        case 7:
            repeat = 1;
            break;
        default:
            console.log('invalid choice');
        }
    }while(repeat == 0)

}

function convertVolum(){
    let repeat = 0;
    do{
    console.log("\n Enter your choice \n1.Liter to Milliliter \n2.Milliliter to Liter  \n3.Liter to imperial gallon \n4.Liter to imp. quart \n5.Liter to imperial pint \n6.Liter to  imperial cup \n7.Liter to cubic foot \n8.Liter to cubic")
    console.log("\n9.Milliliter to imperial gallon \n10.Milliliter to imp. quart \n11.Milliliter to imperial pint \n12.Milliliter to  imperial cup \n13.Milliliter to cubic foot \n14.Milliliter to cubic inch")
    console.log('15. Exit')
    let choice = Number(prompt('Enter your choice'));
    if(choice < 15)
    var input = Number(prompt('Enter a value to convert '));
    switch(choice){
        case 1:
            console.log(input + ' Liter ' + (input * 1000) + ' Milliliter');
            break;
        case 2:
            console.log(input + ' Milliliter ' +(input/1000) + ' Liter');
            break;
        case 3:
            console.log(input + ' Liter ' +(input/4.546) + ' imperial gallon');
            break;
        case 4:
            console.log(input + ' Liter ' +(input/1.137) + ' imp. quart');
            break;
        case 5:
            console.log(input + ' Liter ' +(input*1.76) + ' imperial pint');
            break;
        case 6:
            console.log(input + ' Liter ' +(input*3.52) + ' imperial cup');
            break;
        case 7:
            console.log(input + ' Liter ' +(input/28.317) + ' cubic foot');
            break;
        case 8:
            console.log(input + ' Liter ' +(input*61.024) + ' cubic inch');
            break;

        case 9:
            console.log(input + ' Milliliter ' +(input/4546) + ' imperial gallon');
            break;
        case 10:
            console.log(input + ' Milliliter ' +(input/1137) + ' imp. quart');
            break;
        case 11:
            console.log(input + ' Milliliter ' +(input/568) + ' imperial pint');
            break;
        case 12:
            console.log(input + ' Milliliter ' +(input/284) + ' imperial cup');
            break;
        case 13:
            console.log(input + ' Milliliter ' +(input/28317) + ' cubic foot');
            break;
        case 14:
            console.log(input + ' Milliliter ' +(input/16.387) + ' cubic inch');
            break;

        case 15:
            repeat = 1;
            break;
        default:
            console.log('invalid choice')

    }
}while(repeat == 0)

}

module.exports = { convertLength,convertTemprature,convertVolum }