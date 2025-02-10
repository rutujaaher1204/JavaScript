

// 1. Simple Try-Catch Block
try {
    let result = 10 / 0;
    console.log(result); 
} catch (error) {
    console.error("An error occurred:", error);
}

// 2. Try-Catch
try {
    let x = y + 10; 
    console.log(x);
} catch (error) {
    console.error("An error occurred:", error.message);
}

// 3. Try-Catch with Finally
try {
    console.log("trying..");
    let num=10/0;
}
catch(error){
    console.log("error",error.message);
}
    
 finally {
    console.log("This will always run .");
}
