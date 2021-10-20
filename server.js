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
    });

    const client = await auth.getClient();

    const sheets = google.sheets({
        version: 'v4',
        auth: client
    });
    return { sheets }
}

const id = '1zlESD_q8esLsr3rgQi5bh6lWBKinTXApBUm8k3ijyT4';

app.get('/', async(req, res) => {
    try {
        const { sheets } = await authentication();
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: id,
            range: 'Sheet1',
        })
        res.send(response.data)
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
});

app.listen(port);

console.log('Server up and running, listening on port: ' + port);