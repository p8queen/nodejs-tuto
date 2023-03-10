const fs = require('fs');

//reading files
fs.readFile('./docs/blog.txt', (err, data) => {
    err ? console.log(err) : console.log(data.toString());
});

//writing files
fs.writeFile('./docs/blogw.txt', 'hello world', () => {
    console.log('the file was written');
});

console.log('last line');