// 🔹 Spread & Rest

let merged = [...[10,20], ...[30,40], 50];

let original = [1,2,3];
let clone = [...original];
clone.push(4);

let obj1 = {salary:1000};
let obj2 = {salary:2000};
let mergedObj = {...obj1, ...obj2};

function sum(...nums){
  return nums.reduce((a,b)=>a+b,0);
}

function restExample(a,b,...rest){
  console.log(rest);
}


// 🔹 Destructuring

let arr1 = [5,10,15,20];
let [first,,,last] = arr1;

let x = 10, y = 20;
[x,y] = [y,x];

let nested = [1,[2,[3,[4]]]];
let [,[,[,[val]]]] = nested;

let {name:userName, age} = {name:"John", age:25};

let {city="Hyderabad"} = {};


// 🔹 Basic Array Operations

let arr2 = [1,2,3,4,5];
arr2.push(6,7);

let lastVal = arr2.pop();

arr2.shift();

arr2.unshift(0);

let arr3 = [1,2,3,4,5,6];
arr3.splice(2,2);


// 🔹 Slice / Splice / Flat

let salaryArr = [1000,2000,3000,4000,5000,6000];
let sliced = salaryArr.slice(3,6);

let arr4 = [1,2,3,4];
arr4.splice(1,2,99,100);

let deep = [1,[2,[3,[4]]]];
let flatAll = deep.flat(Infinity);

let flatOne = deep.flat(1);

arr4.splice(2,0,500);


// 🔹 Searching & Checking

let arr5 = [1,2,3,4,5];
arr5.includes(100);

arr5.indexOf(3,2);

[1,5,3,5,2].lastIndexOf(5);

arr5.every(x => x > 0);

arr5.some(x => x > 50);


// 🔹 Sorting

[10,5,100,1].sort((a,b)=>a-b);

[10,5,100,1].sort((a,b)=>b-a);

let employees = [
  {name:"A", salary:30000},
  {name:"B", salary:50000}
];

employees.sort((a,b)=>a.salary - b.salary);

employees.reverse();


// 🔹 Higher Order Functions

let nums = [1,2,3];

nums.forEach(x => console.log(x));

let forEachResult = nums.forEach(x => x*2); // undefined

let doubled = nums.map(x => x*2);

let names = ["john","ram"];
let upper = names.map(n => n.toUpperCase());

let salaries = employees.map(e => e.salary);

let filtered = employees.filter(e => e.salary > 30000);

let evens = nums.filter(x => x % 2 === 0);

let longStr = ["hello","welcome","hi"].filter(s => s.length > 5);

let found = nums.find(x => x > 2);

let lowSalary = employees.find(e => e.salary < 40000);


// 🔥 Reduce

let total = [10,20,30].reduce((a,b)=>a+b,0);

let max = [10,50,20].reduce((m,x)=> x>m?x:m);

let count = nums.reduce(c => c+1,0);

let objFromArr = ["a","b"].reduce((o,v)=>{o[v]=true; return o;},{});

let totalSalary = employees.reduce((sum,e)=>sum+e.salary,0);


// 🔹 Conversion

[1,2,3].toString();

[1,2,3].join(" - ");

"1,2,3".split(",");

deep.flat(Infinity).join(",");

["I","love","JS"].map(w=>w).join(" ");


// 🟣 Bonus

let cart = [{price:100},{price:200}];
let cartTotal = cart.reduce((sum,item)=>sum+item.price,0);

let products = [
  {name:"Phone", price:1000},
  {name:"Pen", price:50}
];

let under500 = products.filter(p => p.price < 500);

let search = products.filter(p => p.name.includes("Ph"));

let unique = [...new Set([1,2,2,3])];

let grouped = employees.reduce((acc,e)=>{
  let key = e.salary > 30000 ? "high" : "low";
  acc[key] = acc[key] || [];
  acc[key].push(e);
  return acc;
},{});