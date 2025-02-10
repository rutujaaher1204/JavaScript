
// higher order function takes anather function as argument or it returns a function as its result 
// main Function
function applyOperation(a, b, operation) {
    return operation(a, b);
}

// Function to add two numbers
function add(x, y) {
    return x + y;
}

// Function to multiply two numbers
function multiply(x, y) {
    return x * y;
}

console.log(applyOperation(5, 3, add));     
console.log(applyOperation(5, 3, multiply));