'use strict';

const express = require('express');
const router = express.Router();

const index_controller = require('../controller/homeController');

router.get('/', index_controller.index);
router.post('/', index_controller.indexBook);
router.get('/booking', index_controller.booking);
router.post('/booking', index_controller.bookingPost);

module.exports = router;