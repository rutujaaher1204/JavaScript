function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched"), 2000);
    });
}
async function getData() {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data); // Output: Data fetched
}
getData();