// Example Of hoisted 
// only var declare veriables are hoisted 

console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();



// let and const declare veriable are not hoisted it show reference error
/* if(true){
     let z=5 ;
 }
 console.log(z);*/




// if(true){
//     const y=5 ;
// }
//  console.log(y);