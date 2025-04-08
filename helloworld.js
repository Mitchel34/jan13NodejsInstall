console.log("Hello, World!");
console.log("This is a simple Node.js script.");
console.log("Node is ansychronous. What is sync? Implement commands line by line. What is async? Send info to user when it is ready, not necessarily in sycnonous order.");
console.log("Node is single thread. Sends info to the compiler then Node will build a queue then the queue send back information when its ready.");
console.log("Callback function: the function is a parameter in another function. In one function we can manipulate another function becuase the manipulator function is a callback function passed into the manupulated function");
console.log();
console.log("Example of callback function:");
// f is a callback function
const fn = (a, f) => {
    f(a);
}
fn(1, a => console.log(a)); // 1
//Loading data, in callback function we can manipulate the data.

// Impport fs module
const fs = require('fs');

console.log("Start");
fs.readFile('hello.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }
    console.log(data.toString());
})
console.log("End");
console.log("This is a simple Node.js script the demonstrates the use of callback functions and asynchronous file reading.");