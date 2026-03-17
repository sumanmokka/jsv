let num = Number(prompt("Enter a number:"));
console.log(num + 10);

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
console.log(a + b);

let value = prompt("Enter any value:");
console.log(Boolean(value));

let num1= Number("123");
console.log(num1* 5);

console.log(Number(true));  
console.log(Number(false));

let text = prompt("Enter text:");
console.log(Boolean(text));

let a1 = Number("100");
let b1 = Number("50");
console.log(a - b);

console.log(Number(null));
console.log(Number(undefined));
console.log(Number(""));

console.log("10" + 20);

let num2 = Number("25");
console.log(num > 20);

let age = Number(prompt("Enter age:"));

if(age >= 18){
console.log("Eligible to vote");
}else{
console.log("Not eligible");
}

let num4= Number(prompt("Enter number"));

if(num >= 0){
console.log("Positive");
}else{
console.log("Negative");
}

let num6 = Number(prompt("Enter number"));

if(num % 2 === 0){
console.log("Even");
}else{
console.log("Odd");
}

let a4 = Number(prompt("Enter number1"));
let b4 = Number(prompt("Enter number2"));
let c = Number(prompt("Enter number3"));

console.log(Math.max(a,b,c));

let temp = Number(prompt("Enter temperature"));

if(temp > 35){
console.log("Hot day");
}else if(temp < 20){
console.log("Cold day");
}else{
console.log("Normal weather");
}

let marks = Number(prompt("Enter marks"));

if(marks >= 35){
console.log("Pass");
}else{
console.log("Fail");
}

let username = prompt("Enter username");
let password = prompt("Enter password");

if(username === "admin" && password === "1234"){
console.log("Login Successful");
}else{
console.log("Invalid Login");
}

let year = Number(prompt("Enter year"));

if(year % 4 === 0){
console.log("Leap Year");
}else{
console.log("Not Leap Year");
}

let time = Number(prompt("Enter time (0-24)"));

if(time < 12){
console.log("Morning");
}else if(time < 17){
console.log("Afternoon");
}else if(time < 20){
console.log("Evening");
}else{
console.log("Night");
}

let salary = Number(prompt("Enter salary"));

if(salary >= 50000){
console.log("Tax:", salary * 0.20);
}else if(salary >= 30000){
console.log("Tax:", salary * 0.10);
}else{
console.log("No Tax");
}

for(let i=1;i<=10;i++){
console.log(i);
}

for(let i=10;i>=1;i--){
console.log(i);
}

for(let i=1;i<=50;i++){
if(i % 2 === 0){
console.log(i);
}
}

for(let i=1;i<=50;i++){
if(i % 2 !== 0){
console.log(i);
}
}

let num = Number(prompt("Enter number"));

for(let i=1;i<=10;i++){
console.log(num * i);
}

let sum = 0;

for(let i=1;i<=100;i++){
sum += i;
}

console.log(sum);

let num = Number(prompt("Enter number"));
let fact = 1;

for(let i=1;i<=num;i++){
fact *= i;
}

console.log(fact);

let count = 0;

for(let i=1;i<=100;i++){
if(i % 5 === 0){
count++;
}
}

console.log(count);

for(let i=1;i<=10;i++){
console.log(i * i);
}

let num7 = 1234;
let reverse = 0;

while(num > 0){
let digit = num % 10;
reverse = reverse * 10 + digit;
num = Math.floor(num / 10);
}

console.log(reverse);

let fruits = ["apple","banana","orange"];

for(let fruit of fruits){
console.log(fruit);
}

let arr1 = [10,20,30,40];
console.log(arr.length);

let ar2r = [5,10,20,8];
console.log(Math.max(...arr));

let arr = [1,2,3,4];
let sum2 = 0;

for(let num of arr){
sum += num;
}

console.log(sum);

let arr9 = [2,5,8,11,20];

for(let num of arr){
if(num % 2 === 0){
console.log(num);
}
}

let person = {
name:"John",
age:25,
city:"Chennai"
};

for(let key in person){
console.log(key, person[key]);
}

let obj = {a:1,b:2,c:3};
console.log(Object.keys(obj).length);

let emp = {name:"Ram",salary:50000};

console.log("salary" in emp);

let obj = {name:"John",age:25,city:"Chennai"};

for(let key in obj){
console.log(obj[key]);
}

let employee = {
name:"Suman",
role:"Developer",
salary:50000,
department:"IT"
};

console.log(employee);


