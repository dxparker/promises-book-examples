// Example 1-5. Using synchronous code to write and read a file in Node.js

var fs = require('fs');
var timestamp = new Date().toString();
var contents;

fs.writeFileSync('date.txt', timestamp);
contents = fs.readFileSync('date.txt');
console.log('Checking the contents');            // 1
console.assert(contents == timestamp);           // 2

console.log('I am the last line of the script'); // 3

// Console output:
// Checking the contents
// I am the last line of the script