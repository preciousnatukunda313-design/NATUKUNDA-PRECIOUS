console.log("My name is Precious");

// variables
// Declaring a variable uses the var, let, or const keywords

// var is function-scoped and can be declared and can be redeclared and updated
var name = "Precious";
console.log(name);
name = "Natukunda Precious";
console.log(name);

// let is block-scoped and can be updated but not redeclared 
let age = 25;
console.log(age);
age = 18;
console.log("My age has changed because I am just a girl");

// const is block-scoped and cannot be updated or redeclared
const country = "Uganda";
console.log(country);
//country = "Kenya"// This will be through an error because const cannot be redeclared

// Data Types
// Javascript has several data types
// 1. String
let greeting = "How are you"
console.log(greeting);
console.log(typeof greeting);

// 2. Number
let x = 10;
let y = "12"
console.log(x);
console.log(y);
console.log(typeof x);
console.log(typeof y);

// conditions in Javascript
// If statement
// definition of if statement
let condition = true;
let condition1 = false;
let condition2 = false;
let condition3 = true;
if (condition) {
    // code to be executed if condition is true
}

// if-else statement
// definition of if-else statement
if (condition){
    // code to be executed if condition is true
} else{
    // code to be executed if condition is false
}

// else-if statement
// definition of else-if statement
if (condition1) {
     // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
}


// Practice examples
let mark = 75;
if(mark > 69) {
    console.log("Very good, you have passed the exam")
}

if (mark >= 70){
    console.log("you have passed the exam")
} else{
    console.log("you have failed the exam")
}

// Comparison Operators
// 1. Equal to (=)
// Example of Equal to Operator
if (name= "John") // This will assign "John" to name and always evaluate
// 2. Equal to (==)
// 3. Not equal to (!=)
// 4. Strict equal to (===)
// 5. strict not equal to (!==)
// 5. Greater than (>)
// 6. Less than(<)
// 7. Greater than or equal to (>=)
// 8. Less than or equal to (<=)

// Arrays
["Volvo", "Benz", "Toyota"]
[1, 2, 3, 4, 5]
//["Vision", 25, "Uganda", true, null, undefined,]
let cars = ["volvo", "Benz", "Toyota"];
console.log(cars);
console.log(cars[2]);

//Objects
{}// an empty object

let person = {
    name: "Linda",
    age: 30,
    district: "kampala",
    isStudent: true,
    hobbies: ["codding", "travelling"],
    address: {
        street: "123 Main St",
        city: "kampala",
        country: "Uganda"
    }
}
console.log(person);
console.log(person["name"]); // Accessng for new property
console.log(person.hobbies);// Accessing the second hobby