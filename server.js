const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
	console.log('A request had been made');
	console.log(req.url, req.method);

	//send response
	res.setHeader('Content-Type', 'application/json');
	let path = './views/'
	switch(req.url) {
		case '/':
				path += 'index.json';
				res.statusCode = 200;
				break;
		case '/about':
				path += 'about.json';
				res.statusCode = 200;
				break;
		case '/about-me':
			res.statusCode = 301;
			res.setHeader('Location', '/about');
			res.end();
			break;
		default:
			path += '404.json';
			res.statusCode = 404;
			break;
    }
    //send the file
	const data = require(path);
	try {
		res.end(JSON.stringify(data));    
	}catch (e){
		console.log('error res.end()');
	}
    
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request in port 3000');
});