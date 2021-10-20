'use strict';

console.log('app.js is alive!')

let dataURL = '../data/users.json';
let req = new XMLHttpRequest();
req.open('GET', dataURL);
req.responseType = 'json';
req.send();

req.onload = () => {
    const data = req.response;
    console.log(data.users[2].name);
}

const Login = () => {
    let inputName = document.getElementById('name').value;

    if (inputName == 'kalle') {
        console.log('Logged In')
    } else {
        console.log('That is not a valid account');
    }
}