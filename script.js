//let userEmail=prompt("Enter your email:");
//let userName=prompt("Enter your name:");
/*let salary=prompt("Enter your salary:");
const SERVER_NAME = "canvas.com/students";

console.log(userName);
console.log(`Welcome to the system ${userName}`);

document.write(`<p>Your email is: ${userEmail}</p>
                <p>Your name is: ${userName}</p>
                <p>Your salary is: ${salary}</p>
            `);*/


//----------------- example 1 -----------
/*if(confirm("Are you " +userName+ "?")){
    console.log("Hello" + userName);
}else{
    console.log("Then what is you name?");
}*/

// ---------- example 2 ------------
let number = 99;
if(number == 99){
    console.log("The number is correct");
}

// ---------- example 3 (get the numbers from the prompt)----------
let num1 = Number(prompt("Type the number 1: "));
let num2 = Number(prompt("Type the number 2: "));
let num3 = Number(prompt("Type the number 3: "));
let notTrue = false;

if(num1<num2 && num3>num2){
    console.log("num1 is smaller than num2 AND num3 is larger than num2");
}

if(num1 == 1 || num2 == 1 || num3 == 1){
    console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
}

if(!notTrue){
    console.log("not not true is true!");
}