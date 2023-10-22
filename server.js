// Main nodejs file
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// ADD BODY PARSER BEFORE ALL
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>');
});

// Only for GET requests! app.get / app.post / patch / put
app.get('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>hello</h1>');
});


app.listen(3000);