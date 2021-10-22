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
    console.log(document.cookie)
}

const Login = () => {
    const data = users.response;

    let inputName = document.getElementById('name').value;

    data.users.forEach((element, i) => {
        if (inputName == element.name) {
            console.log('Logged In')
            const tBboxNamn = document.getElementById('name')
            document.cookie = 'user=' + tBboxNamn.value;
            location.href = '/booking';
        } else {
            console.log('That is not a valid account');
        }
    });
}

booking.onload = () => {
    const data = JSON.parse(booking.response);

    console.log(data)
    const tBoxData = document.getElementById('tBoxBookTimeId')
        // const temptest = JSON.stringify(data);
        // tBoxData.value = temptest;

    const btnBook = document.createElement('button');
    btnBook.id = 'btnBookId';
    btnBook.textContent = 'Confirm';

    btnBook.addEventListener('click', ButtonEventhandler);
    document.getElementById('formId').appendChild(btnBook);

    tBoxData.style.display = 'none';
    btnBook.disabled = true;
};

const ButtonEventhandler = () => {
    console.log('Button Book pushed');
}

const btnMon = () => {
    const data = JSON.parse(booking.response);
    console.log(data.bookings[0].booked)

    console.log('mon is pressed')

    data.bookings[0].booked = true;
    console.log(data.bookings[0].booked)

    let tBoxData = document.getElementById('tBoxBookTimeId')

    let dataTemp = JSON.stringify(data)
    tBoxData.value += dataTemp;

    document.getElementById('btnCancelId').disabled = false;
    document.getElementById('btnBookId').disabled = false;
}

const btnTue = () => {
    const data = JSON.parse(booking.response);
    console.log(data.bookings[1].booked)

    console.log('tue is pressed')

    data.bookings[1].booked = true;
    console.log(data.bookings[1].booked)

    let tBoxData = document.getElementById('tBoxBookTimeId')

    let dataTemp = JSON.stringify(data)
    tBoxData.value += dataTemp;

    document.getElementById('btnCancelId').disabled = false;
    document.getElementById('btnBookId').disabled = false;
}

const btnWed = () => {
    const data = JSON.parse(booking.response);
    console.log(data.bookings[2].booked)

    console.log('wed is pressed')

    console.log(data.bookings[2].booked)
    data.bookings[2].booked = true;

    let tBoxData = document.getElementById('tBoxBookTimeId')

    let dataTemp = JSON.stringify(data)
    tBoxData.value += dataTemp;

    document.getElementById('btnCancelId').disabled = false;
    document.getElementById('btnBookId').disabled = false;
}

const btnCancel = () => {
    console.log('btnCancel pressed');
    let tBoxData = document.getElementById('tBoxBookTimeId');
    tBoxData.value = '';
}