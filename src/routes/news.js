const express = require('express');
const router = express.Router();
//https://expressjs.com/en/4x/api.html#router.use
const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);

router.use('/', newsController.index);

module.exports = router;
