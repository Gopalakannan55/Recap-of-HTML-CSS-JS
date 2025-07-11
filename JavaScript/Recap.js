//greetings Hello World
console.log("Hello, World!");

// Variables
var x = 10;
let y = 20;
const z = 30;
console.log(x, y, z);

// Data Types
let name = "AAA";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "gaming"];
let person = { name: "AAA", age: 25 };

// Operators
console.log(5+3); 
console.log(5-3); 
console.log(5 === "5"); 
console.log(true && false); 

// Conditional Statements
//if
let mark=60;
if (mark==60) {
  console.log("Pass");
}

//if-else
let score = 70;
if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Loops
//for 
for (let i = 0; i < 3; i++) {
  console.log("Loop", i);
}
//while
let i = 0;
while (i < 3) {
  console.log("While", i);
  i++;
}

//do-while
do{
  console.log("While", i);
  i++;
}while(i < 3);


// 7. Functions
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Bob"));


// 10. Arrays
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

// 11. Objects
let car = {
  brand: "Toyota",
  start: function() {
    return "Car started";
  }
};
console.log(car.start());

// 13. String Methods
let text = "JavaScript";
console.log(text.toUpperCase());

// 14. Date & Time
let now = new Date();
console.log(now.toDateString());

// 15. Math
console.log(Math.sqrt(16));
console.log(Math.floor(Math.random() * 10));

// 16. setTimeout and setInterval
setTimeout(() => console.log("Waited 1 sec"), 1000);
let interval = setInterval(() => console.log("Every sec"), 1000);
setTimeout(() => clearInterval(interval), 5000);

// 17. Try Catch
try {
  notDefinedVar;
} catch (e) {
  console.log("Caught error:", e.message);
}

// 19. JSON
let json = JSON.stringify({ lang: "JS" });
let obj = JSON.parse(json);
console.log(obj);


// 19. ES6 Features
let arrow = name => `Hi, ${name}`;
console.log(arrow("Alex"));

let [a, b] = [1, 2];
console.log(a, b);

let { brand, model } = car;
console.log(brand, model);

let nums = [1, 2, 3];
let moreNums = [...nums, 4, 5];
console.log(moreNums);

let updatedPerson = { ...person, city: "NY" };
console.log(updatedPerson);

// 10. Arrays
let numbers = [1, 2, 3];
numbers.push(4);
numbers.pop();
numbers.shift();
numbers.unshift(0);
console.log(numbers);

// Array Methods
console.log(numbers.length);
console.log(numbers.includes(2));
console.log(numbers.indexOf(2));
console.log(numbers.join("-"));
console.log(numbers.map(n => n * 2));
console.log(numbers.filter(n => n > 1));
console.log(numbers.find(n => n > 1));
numbers.forEach(n => console.log("Each:", n));

// 11. Objects
let car = {
  brand: "Toyota",
  model: "Corolla",
  start: function() {
    return "Car started";
  }
};
console.log(car.brand);
console.log(car["model"]);
console.log(car.start());

// Object Methods
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

// 12. String Methods
let text = "JavaScript is Fun";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.slice(0, 10));
console.log(text.substring(0, 10));
console.log(text.replace("Fun", "Awesome"));
console.log(text.includes("Java"));
console.log(text.split(" "));

// 13. Date & Time
let now = new Date();
console.log(now.toDateString());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.toLocaleString());

// 14. Math Methods
console.log(Math.PI);
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.max(3, 6, 9));
console.log(Math.min(3, 6, 9));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));

