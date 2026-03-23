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