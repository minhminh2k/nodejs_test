const express = require('express');
const router = express.Router();
//https://expressjs.com/en/4x/api.html#router.use
const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);

router.use('/', siteController.index);

module.exports = router;
