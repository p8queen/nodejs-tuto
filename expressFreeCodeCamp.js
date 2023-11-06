let express = require('express');
let app = express();
let bodyParser = require('body-parser');

//use bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//get data from post request
app.post('/name', function(req, res) {
  let firstname = req.body.first;
  let lastname = req.body.last;
  res.json({name: `${firstname} ${lastname}`});
});

app.get('/', (req, res) => {
  //res.send('Hello Express');
  const absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});



// middleware to serve static file. 
app.use('/public', express.static(__dirname + '/public'));

//middleware to log the method, path and ip.
app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

//Acces the correspondig key in params
app.get('/:word/echo', (req, res) => {
  let param = req.params.word;
  res.json({echo: param});
});

//get query params from client
app.get('/name', (req, res) => {
  let firstName = req.query.first;
  let lastName = req.query.last;
  res.json({name: `${firstName} ${lastName}`});
});

// chain middleware for time server
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({"time":req.time});
});

app.get('/json', (req, res) => {
  const mySecret = process.env['MESSAGE_STYLE'];
  let response = "Hello json";
  if(mySecret==='uppercase'){
    response = response.toUpperCase();
  }
  res.json({"message": response});
});

console.log("Hello World");


module.exports = app;

