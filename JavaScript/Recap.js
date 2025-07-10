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

