const path = require('path');

const express = require('express');

const rootDir = require('../util/paths');

const router = express.Router();

// /admin/add-product ==> GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir ,'views', 'add-product.html'));
});

// Only for GET requests!
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;