//Outer function
function multiplier(x) {
    // inner function 
    return function (y) {
        return x * y;//here x is a outer veriable 
    };
}

const double = multiplier(2);  // Creates a function that multiplies by 2
const triple = multiplier(3);  // Creates a function that multiplies by 3

console.log(double(5));  // Output: 10 (2 * 5)
console.log(triple(5));  // Output: 15 (3 * 5)
