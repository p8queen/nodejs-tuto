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
            break;
        case '/about':
            path += 'about.json';
            break;
        default:
            path += '404.json';
            break;
    }
    //send the file
    console.log('path: ', path);
    const data = require(path);
    console.log(data);
    try {
        res.end(JSON.stringify(data));    
    }catch (e){
        console.log('error res.end()');
    }


    // fs.readFile(path, (err,data) => {
    //     if(err){
    //         console.log(err);
    //         res.end();
    //         }else{
    //             const obj = JSON.parse(data.toString());
    //             const jsonData = JSON.stringify(obj);
    //             res.end(jsonData);
                
    //         }
    // }); // readfile
    
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request in port 3000');
});