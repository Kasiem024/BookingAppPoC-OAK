'use strict';

exports.index = (req, res) => {
    console.log('index is alive!');

    res.sendfile('./public/index.html');
};

exports.booking = (req, res) => {
    console.log('booking is alive!');

    res.sendfile('./public/booking.html');
};

exports.bookingTime = (req, res) => {
    console.log('bookingPost is alive!');

    const fs = require('fs');
    // Sends what the value of tBoxBookTimeName to calendarBooking
    // The value of tBoxBookTimeName is basically a whole JSON file
    fs.writeFile('./public/data/calendarBooking.json', req.body.tBoxBookTimeName, function(err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });

    res.sendfile('./public/booking.html');
};

exports.showBooking = (req, res) => {
    console.log('showBooking is alive!');

    res.sendfile('./public/showBooking.html');
};

exports.cancelBooking = (req, res) => {
    console.log('cancelBooking is alive!');

    const fs = require('fs');

    fs.writeFile('./public/data/calendarBooking.json', req.body.tBoxBookTimeName, function(err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });

    res.sendfile('./public/booking.html');
};