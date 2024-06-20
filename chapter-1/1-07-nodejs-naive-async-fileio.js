// Example 1-7. Naive asynchronous code. This doesn’t work!

var fs = require('fs');
var timestamp = new Date().toString();
var contents;

fs.writeFile('date.txt', timestamp, function (err) {
	if (err) throw err;
});

fs.readFile('date.txt', function (err, data) {
	if (err) throw err;
	contents = data; // 3
});

console.log('Comparing the contents'); // 1
console.assert(timestamp == contents); // 2 - FAIL!
