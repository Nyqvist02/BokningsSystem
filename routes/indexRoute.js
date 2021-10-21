'use strict';

const express = require('express');
const router = express.Router();

const index_controller = require('../controller/homeController');

router.get('/', index_controller.index);
router.post('/login', index_controller.login);
router.get('/boka', index_controller.boka);


module.exports = router;