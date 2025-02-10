//  Destructuring 

// 1. Array Destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first);  
console.log(second); 
console.log(third);  

// 2. Skipping Elements in Array Destructuring
const values = [10, 20, 30, 40];
const [x, , y] = values;
console.log(x); 
console.log(y); 

// 3. Object Destructuring 
const person = { personName: "Rutuja", age: 25, city: "Pune" };
const { personName: name, age, city } = person;
console.log(name); 
console.log(age);  
console.log(city); 