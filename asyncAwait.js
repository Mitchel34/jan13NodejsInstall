const fs = require('fs').promises;
async function loadData() {
    const data1 = await fs.readFile("hello.txt");
    console.log(data1.toString());
    const data2 = await fs.readFile("hello1.txt");
    console.log(data2.toString());
    const data3 = await fs.readFile("hello2.txt");
    console.log(data3.toString());
}
console.log("This is a simple Node.js script the demonstrates the use of async/await for asynchronous file reading.");
console.log();
console.log("Start");
loadData();
console.log("End");