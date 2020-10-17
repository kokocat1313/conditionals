
let age = Number(prompt("Enter your age"));

switch(age){
case age < 0:
    console.log("Please enter valid number");
    break;
case age === 21:
    console.log ("Happy Bday!");
    break;
case age % 2 !== 0:
    console.log ("Your age is odd.");
    break;
case age % Math.sqrt(age) === 0:
    console.log("Your age is a perfect square.");
default:
    console.log("having fun?");
}


