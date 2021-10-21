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
        } else {
            console.log('That is not a valid account');
        }
    })
}

const Book = () => {
    const data = booking.response;

    console.log('book clicked');

    const form = document.getElementById('form');

    form.action = '/';
    form.method = 'POST';

    const tBoxBook = document.getElementById('bookTimeId');

    console.log(tBoxBook.value);

}
booking.onload = () => {
    const data = booking.response;

    const form = document.getElementById('form')
    const tBox1 = document.createElement('input');
    const btnUpdate = document.createElement('button');

    tBox1.id = 'tBoxId1';
    tBox1.name = 'tBoxName1';
    btnUpdate.id = 'btnUpdateId';
    form.id = 'formId';

    form.action = '/';
    form.method = 'POST';

    tBox1.value = data.booking;
    btnUpdate.textContent = 'Update';

    btnUpdate.addEventListener('click', ButtonEventhandler);

    document.getElementById('Exercise2').appendChild(form);
    document.getElementById('formId').appendChild(tBox1);
    document.getElementById('formId').appendChild(btnUpdate);
};

const ButtonEventhandler = () => {
    console.log('Button Update pushed');
}