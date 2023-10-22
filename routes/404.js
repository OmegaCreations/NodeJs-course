const path = require('path');

const express = require('express');

const rootDir = require('../util/paths');

const router = express.Router();


router.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir ,'views', '404.html'));
});


module.exports = router;