'use strict';

const express = require('express');
const router = express.Router();

const index_controller = require('../controller/homeController');

router.get('/', index_controller.index);
router.get('/booking', index_controller.booking);
router.post('/booking', index_controller.bookingTime);
router.get('/showBooking', index_controller.showBooking);
router.post('/showBooking', index_controller.cancelBooking);

module.exports = router;