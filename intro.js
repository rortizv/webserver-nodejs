const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Welcome to the dark side of Node.js!');
    res.end();
}).listen(3000);

console.log('Server running on port http://localhost:3000/');