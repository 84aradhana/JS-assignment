// console.log("external js");

// var a = 20;
// var a = 40;
// console.log(a);

// let x = 30;
// x = 50;
// console.log(x);


// let y = 20;
// y = 70;
// console.log(y);

// x = 55;

// {
//     let x;
//     x = 30;
//     x = 50;
//     console.log(x);
// }
// console.log(x);

// function fn() {
//     var z = 66;
//     console.log(z);
// }
// fn();


// let h;
// console.log(h); 
// h = 8;
// console.log(h);

// //hoisting
// console.log(v); 
// var v;
// var v = 90;
// console.log(v);

// greet();
// function greet() {
//     console.log("Good Morning");
// }
//Data types in Javascript
// let a=10;

// console.log(typeof(a));
// console.log(a);
// let name="xyz"
// console.log(typeof(name));

// let x=true;
// console.log(typeof(x));

// let y=undefined;
// console.log(typeof(y));

// let z=null;
// console.log(typeof(z));

// let b=123n
// console.log(typeof(b));
// let s= Symbol("hii")
// console.log(typeof(s));

// //object -{key:value}

// let obj ={
//     stuName:"Aradhana",
//     branch:"BCA",
//     id:2433481
// }
// obj.address="kanpur"
// console.log(obj);

// console.log(obj.id);
// console.log(obj['id']);
// console.log(typeof(obj));

// let arr=['Aradhana',2433481,"BCA"];
// console.log(arr);


// function greet() {
//     console.log("Hello Aradhana!");
// }
// greet(); 

// Function checkNumber(a,b){
//     if(a % 2 === 0 && b % 2 === 0){
//     console.log("true");
// }
// }




// let a = 20;
// let b = 30;
// if (a % 10 === 0 && b % 10 === 0) {
//     console.log(true);
// }

// // if both are not divisible by 10 then console false.
// else if (a % 10 !== 0 && b % 10 !== 0) {
//     console.log(false);
// }

// //if one of them is divisible by 10 then console gives true.
//     else {
//     console.log(true);
// }

let a = 10;       // first number
let b = 5;        // second number
let operator = '+'; // change to +, -, *, /, or %

switch (operator) {
    case '+':
        console.log(`${a} + ${b} = ${a + b}`);
        break;
    case '-':
        console.log(`${a} - ${b} = ${a - b}`);
        break;
    case '*':
        console.log(`${a} * ${b} = ${a * b}`);
        break;
    case '/':
        if (b !== 0) {
            console.log(`${a} / ${b} = ${a / b}`);
        } else {
            console.log("Error: Division by zero");
        }
        break;
    case '%':
        console.log(`${a} % ${b} = ${a % b}`);
        break;
    default:
        console.log("Invalid operator");
}




let p=Number(prompt("Enter first number:"));
let q=Number(prompt("Enter second number:"));
let  sum=p+q;
console.log("The sum is:",sum);