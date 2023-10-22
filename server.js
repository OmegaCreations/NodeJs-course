// Main nodejs file
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const page404 = require('./routes/404');

// ADD BODY PARSER BEFORE ALL
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// External routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(page404);

app.listen(3000);