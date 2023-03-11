const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req,res) => {
    res.sendFile('./views/index.json', {root: __dirname});
});

app.get('/about', (req,res) => {
    res.sendFile('./views/about.json', {root: __dirname});
});

//redirect
app.get('/about-us', (req,res) => {
    res.redirect('/about');
});

//404 page
app.use((req,res) => {
    res.status(404).sendFile('./views/404.json', {root: __dirname});
});