'use strict';

console.log('app.js is alive!')

let dataURL = '../data/users.json';
let req = new XMLHttpRequest();
req.open('GET', dataURL);
req.responseType = 'json';
req.send();

const Login = () => {
    const data = req.response;

    let inputName = document.getElementById('name').value;

    data.users.forEach((element, i) => {
        if (inputName == element.name) {
            console.log('Logged In')
        } else {
            console.log('That is not a valid account');
        }
    })
}