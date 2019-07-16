let msg = "Hello";
let msg_hello = 'Hello, World!';

// let h1 = server.createElement("H1");
// h1.textContent = msg_hello.textContent;
// let h1 = server.createElement()

console.log(msg);
const http = require('http');
let server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(msg_hello);
});
server.listen(3000, '127.0.0.1')


console.log("Ми відслідковуємо Port 3000")