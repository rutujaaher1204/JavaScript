//  Map, Filter and Reduce 

// 1.map
const numbers = [1, 2, 3, 4, 5];
const square = numbers.map(num => num * num);
console.log("square of a number is ",square); 

// 2.filter
const evenNum = numbers.filter(num => num % 2 === 0);
console.log("Even number in the array" ,evenNum); 

// 3.reduce() 
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("sum of numbers is ",sum);
