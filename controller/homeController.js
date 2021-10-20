'use strict';

exports.index = (req, res) => {
    const express = require('express');
    const app = express();

    const { google } = require('googleapis')

    app.use(express.json());

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
    res.sendfile('public/index.html');
};