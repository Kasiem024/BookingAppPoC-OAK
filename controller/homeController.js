'use strict';

exports.index = (req, res) => {
    console.log('index is alive!');

    res.sendfile('public/index.html');
};
exports.indexBook = (req, res) => {
    console.log('index is alive!');

    const fs = require('fs');

    const booking = req.body.bookTimeName;

    const tempText = { booking };

    const newJsonText = JSON.stringify(tempText);

    fs.writeFile('./public/data/users.json', newJsonText, function(err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });

    console.log('editUpdate is alive again!');

    res.sendfile('public/index.html');
};