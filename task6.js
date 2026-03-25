 // 🔹 Task 1: Username Formatter
let username = " naveen kumar ";
let formatted = username.trim().toUpperCase().replaceAll(" ", "_");
console.log("Task 1:", formatted);


// 🔹 Task 2: Email Validator
let email = "test@gmail.com";
if(email.includes("@") && email.endsWith(".com")){
  console.log("Task 2: Valid Email");
}else{
  console.log("Task 2: Invalid Email");
}


// 🔹 Task 3: Word Counter
let sentence = "javascript is very powerful language";
let wordCount = sentence.split(" ").length;
console.log("Task 3:", wordCount);


// 🔹 Task 4: Replace Second Word Only
let str = "python python developer";
let words = str.split(" ");
if(words[1] === "python"){
  words[1] = "javascript";
}
console.log("Task 4:", words.join(" "));


// 🔹 Task 5: Password Strength Checker
let password = "Test1234";
let strong =
  password.length >= 8 &&
  /[A-Z]/.test(password) &&
  /[a-z]/.test(password) &&
  /[0-9]/.test(password);

console.log("Task 5:", strong ? "Strong" : "Weak");


// 🔹 Task 6: Reverse String
let text = "hello";
let reversed = text.split("").reverse().join("");
console.log("Task 6:", reversed);


// 🔹 Task 7: Find Day of Birth
let year = 2000, month = 5, day = 15;

if(month < 1 || month > 12 || day < 1 || day > 31){
  console.log("Task 7: Invalid Date");
}else{
  let date = new Date(year, month - 1, day);
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  console.log("Task 7: You were born on " + days[date.getDay()]);
}


// 🔹 Task 8: Live Digital Clock
setInterval(() => {
  let time = new Date().toLocaleTimeString();
  console.log("Task 8:", time);
}, 1000);


// 🔹 Task 9: Date Difference Calculator
let d1 = new Date("2024-01-01");
let d2 = new Date("2024-01-10");

let diffDays = (d2 - d1) / (1000 * 60 * 60 * 24);
console.log("Task 9:", diffDays + " days");


// 🔹 Task 10: Character Frequency Counter
let inputStr = "javascript";
let freq = {};

for(let char of inputStr){
  freq[char] = (freq[char] || 0) + 1;
}

console.log("Task 10:", freq);