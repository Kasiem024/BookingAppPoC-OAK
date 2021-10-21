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

const Login = () => {
    const data = users.response;

    let inputName = document.getElementById('name').value;

    data.users.forEach((element, i) => {
        if (inputName == element.name) {
            console.log('Logged In')
            const tBboxNamn = document.getElementById('name')
            document.cookie = tBboxNamn.value;
            location.href = '/booking';
        } else {
            console.log('That is not a valid account');
        }
    });
}

booking.onload = () => {
    // const data = booking.response;

    // const form = document.createElement('form')
    // const tBox1 = document.createElement('input');
    const btnBook = document.createElement('button');

    // tBox1.id = 'tBoxId1';
    // tBox1.name = 'tBoxName1';
    btnBook.id = 'btnUpdateId';
    // form.id = 'formId';

    // form.action = '/';
    // form.method = 'POST';

    // tBox1.value = data.booking;
    btnBook.textContent = 'Book';

    btnBook.addEventListener('click', ButtonEventhandler);

    // document.getElementById('Exercise2').appendChild(form);
    // document.getElementById('formId').appendChild(tBox1);
    document.getElementById('formId').appendChild(btnBook);
};

const ButtonEventhandler = () => {
    console.log('Button Update pushed');
}