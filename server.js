'use strict';

const express = require('express');
const app = express();

const { google } = require('googleapis')

const indexRouter = require('./routes/indexRoute');

const port = process.env.PORT || 8042;

app.use(express.json());

app.use(express.static('public'));

app.use('/', indexRouter);

const authentication = async() => {
    const auth = new google.auth.Google.Auth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    })
}

app.listen(port);

console.log('Server up and running, listening on port: ' + port);