// --------------------
// DataTypes
// --------------------

// Task 1
let name = "Naveen";
console.log(name);

// Task 2
console.log(typeof "JavaScript");

// Task 3
let age = 22;
console.log(typeof age);

// Task 4
let isStudent = true;
console.log(typeof isStudent);

// Task 5
let salary;
console.log(salary);

// --------------------
// Array Tasks
// --------------------

// Task 6
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);

// Task 7
console.log(fruits[0]);

// Task 8
console.log(fruits[2]);

// Task 9
console.log(fruits[fruits.length - 1]);

// Task 10
let numbers = [10,20,30,40,50];
console.log(numbers[1]);
console.log(numbers[3]);

// --------------------
// Object Tasks
// --------------------

// Task 11
let person = {
    name: "John",
    age: 25,
    city: "New York"
};
console.log(person);

// Task 12
console.log(person.name);

// Task 13
person.skills = ["HTML","CSS","JS"];
console.log(person.skills[1]);

// Task 14
let carDetails = {
    brand: "Toyota",
    model: "Camry",
    price: 30000
};
console.log(carDetails.brand);

// Task 15
let fruitCategory = {
    red: ["apple","cherry"],
    yellow: ["banana","mango"],
    green: ["kiwi","grapes"]
};
console.log(fruitCategory.yellow[0]);

// --------------------
// Arithmetic Operators
// --------------------

// Task 16
let a = 8;
let b = 4;
console.log(a + b);

// Task 17
console.log(a - b);

// Task 18
console.log(a * b);

// Task 19
console.log(a / b);

// Task 20
console.log(a % b);

// --------------------
// Exponential Operator
// --------------------

// Task 21
console.log(3 ** 2);

// Task 22
console.log(2 ** 4);

// --------------------
// Increment / Decrement
// --------------------

// Task 23
let num = 5;
num++;
console.log(num);

// Task 24
let num2 = 10;
num2--;
console.log(num2);

// Task 25
let x = 6;
let y = x++;
console.log(x);
console.log(y);

// Task 26
let a2 = 4;
let b2 = ++a2;
console.log(a2);
console.log(b2);

// --------------------
// Assignment Operators
// --------------------

// Task 27
let value = 10;
value += 5;
console.log(value);

// Task 28
let value2 = 20;
value2 -= 3;
console.log(value2);

// Task 29
let value3 = 6;
value3 *= 2;
console.log(value3);

// Task 30
let value4 = 20;
value4 %= 3;
console.log(value4);

// --------------------
// Comparison Operators
// --------------------

// Task 31
console.log(10 == "10");

// Task 32
console.log(10 === "10");

// Task 33
console.log(15 > 20);

// Task 34
console.log(5 <= 5);

// --------------------
// Logical Operators
// --------------------

// Task 35
console.log(10 > 5 && 5 > 2);

// Task 36
console.log(10 < 5 || 8 > 2);

// Task 37
console.log(!(5 === "5"));

// --------------------
// Ternary Operator
// --------------------

// Task 38
let age2 = 20;
console.log(age2 >= 18 ? "Adult" : "Minor");

// Task 39
let password = 1;
console.log(password === 1 ? "Login success" : "Wrong password");

// --------------------
// String Operations
// --------------------

// Task 40
let firstName = "Spider";
let lastName = "Man";

// Concatenation
console.log(firstName + " " + lastName);

// Template String
console.log(`${firstName} ${lastName}`);