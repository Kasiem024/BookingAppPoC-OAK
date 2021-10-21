'use strict';

exports.index = (req, res) => {
    console.log('index is alive!');

    res.sendfile('./public/index.html');
};
exports.indexBook = (req, res) => {
    console.log('editUpdate is alive!');

    const fs = require('fs');

    const booking = req.body.tBoxName1;

    const tempText = { booking };

    const newJsonText = JSON.stringify(tempText);

    fs.writeFile('./public/data/booking.json', newJsonText, function(err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });

    console.log('editUpdate is alive again!');

    res.sendfile('./public/index.html');
};