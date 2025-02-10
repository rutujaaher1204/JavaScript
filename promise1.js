let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; 
        if (success) {
            resolve("Operation Successful!");
        } else {
            reject("Operation Failed!");
        }
    }, 2000); 
});
