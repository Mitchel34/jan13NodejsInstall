console.log("Promise is an object that represents a future value.)");
console.log("States: pending, fulfilled, rejected");


console.log("Start");
const promise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed.");
    }
}
);
promise
    .then(result => {
        console.log("Promise resolved:", result);
    })
    .catch(error => {
        console.error("Promise rejected:", error);
    })
    .finally(() => {
        console.log("Promise settled (either resolved or rejected).");
    });

console.log("End");



console.log("Start");
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data Loaded'), 200);

})
promise2.then(s => console.log(s));
console.log("End");


// Impport fs module as a promise
const fs = require('fs').promises;
console.log("Start");
fs.readFile('hello.txt')
    .then(data => console.log(data.toString()))
    .catch(err => {
        console.error('Error reading file:', err.message);
});
console.log("End");