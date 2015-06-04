// Example 1-9. HTTP request in Node.js

var http = require('http');

http.get('http://www.google.com', function (res) {
	console.log('got a response');
});
