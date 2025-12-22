// PBJ1 - Pengantar Node.js
// Student: Bunga Aprillia (23343030)

console.log('Selamat datang di Node.js');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World - Bunga Aprillia (23343030)');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
