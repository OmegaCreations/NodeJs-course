// Main nodejs file
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// ADD BODY PARSER BEFORE ALL
app.use(bodyParser.urlencoded({extended: false}));

// External routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>404. Page not found</h1>');
});

app.listen(3000);