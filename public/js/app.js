'use strict';

console.log('app.js is alive!')

let dataURLUsers = '../data/users.json';
let users = new XMLHttpRequest();
users.open('GET', dataURLUsers);
users.responseType = 'json';
users.send();

let dataURLBooking = '../data/booking.json';
let booking = new XMLHttpRequest();
booking.open('GET', dataURLBooking);
booking.responseType = 'json';
booking.send();

window.onload = () => {
    console.log(document.cookie);
}

const Login = () => {
    const data = users.response;

    let inputName = document.getElementById('tBoxNameId').value;

    data.users.forEach((element, i) => {
        if (inputName == element.name) {
            console.log('Logged In')

            const tBoxNamn = document.getElementById('tBoxNameId')

            document.cookie = 'user=' + tBoxNamn.value;

            location.href = '/booking';
        } else {
            console.log('That is not a valid account');
        }
    });
}