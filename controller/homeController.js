'use strict';

exports.index = (req, res) => {
    console.log('index is alive!');

    res.sendfile('./public/index.html');
};

exports.indexBook = (req, res) => {
    console.log('indexBook is alive!');

    const test = req.body.tBoxBookTimeName;

    const test2 = JSON.stringify(test);

    const fs = require('fs');

    fs.writeFile('./public/data/booking.json', test2, function(err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });

    console.log('indexBook is alive again!');

    res.sendfile('./public/index.html');
};

exports.booking = (req, res) => {
    console.log('booking is alive!');

    res.sendfile('./public/booking.html');
};

exports.bookingPost = (req, res) => {
    console.log('bookingPost is alive!');

    const test = req.body.tBoxBookTimeName;

    const test2 = JSON.stringify(test);

    const fs = require('fs');

    fs.writeFile('./public/data/booking.json', test2, function(err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });

    console.log('indexBook is alive again!');

    res.sendfile('./public/booking.html');
};