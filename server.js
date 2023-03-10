const http = require('http');

const server = http.createServer((req,res) => {
    console.log('A request had been made');
    console.log(req.url, req.method);

    //send response
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello NodeJs');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request in port 3000');
});