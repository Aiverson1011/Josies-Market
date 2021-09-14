'use strict'

// this is a comment
// read code from other developers
// in-line documentation

// variables - assign a value to a dedicated word

// the variable named "name" is assigned to the value of "amanda"
//camelCase is the industry standard for variables
let name = 'amanda'; // strings
let age = 5 // number
let isItTrue = true; // bool
// // straight forward enough to know what it does
// // unique within the page
// let myName; // < variable with no value (null)

// myName = 'aoife';
// myName = 6;

// let newVar = '';

// single equal sign (=) assignment operator
// triple equal is a strict equal, comparison
let today = new Date(); // give us the date of today
let hourNow = today.getHours(); // this bit of code that i just gave you, will give you the current hour 0-23
// hourNow = -2; // override what the user puts in

// evaluate based on the hour that it currently is, let's make a greeting. 
let greeting = '';

// check what time of the day it is, and set our greeting to the proper value

// conditional Statement
// if(expression is a condition that we are evaluating)
// in an if statement the expression MUST be true for the if statemetn to run.

// the condition must be met before the code can run
// < Less than
// > Greater Than
// === is equal to (strictly)
// <= less than or equal to
// >= greater than or equal to

// If statements are read from TOP to BOTTOM!
// if the current hour is past 6pm, than we will say good evening.
if(hourNow > 18){
    // code block will be run if the first condition is true
    greeting = 'Good evening, Class!';
    // Good evening
} else if(hourNow > 12)
{
    greeting = 'Good afternoon, Class!';
}  else if(hourNow >= 0){
    greeting = 'Good morning, Class!';
} else{
    greeting = 'Welcome!'
}

// alert is "freebee"
// alert takes in an argument of a string
alert(greeting);
// if...else if...else
// if...else if
// if...else
// if...

// && = AND
// || (double pipe) OR
// if(hourNow > 12 && hourNow < 18)
// {
//     greeting = 'Good afternoon, Class!';
// }  

// guaranteed a value in greeting because of the final else.

// prompt asks our user a question, and provides for htem a text box to answer

// this line will provide the user with a popup with a text box that asks them what their name is. The user can then input their name into the textbox
let answer = prompt('What is your name?');

// using the plus sign to build a sentence is called concatenation
// document.write sends a string to the html. Means it can add HTML to an existing html file.
document.write(answer + ' \'s')
// Amanda's 
 
let favColor = prompt('What is your favorite color?');

if(favColor.toLowerCase() === 'red'){
    alert('Amanda loves red too!!!!!!');
}