// 1. Spread Operator with Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newarr = [...arr1, ...arr2];
console.log(newarr); 

// 2. Spread Operator with Objects
const person = { name: "Rutuja", age: 22 };
const updatedPerson = { ...person, city: "Pune" };
console.log(updatedPerson); 

//  Rest Operator in Array Destructuring
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); 
console.log(second); 
console.log(rest); 

// Rest Operator in Object Destructuring
const student = { id: 101, name: "kalyani", grade: "A", age: 20 };
const { id, name, ...otherDetails } = student;
console.log(id); 
console.log(name); 
console.log(otherDetails); 
