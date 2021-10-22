'use strict';

console.log('book.js is alive!')

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

booking.onload = () => {
    const data = JSON.parse(booking.response);

    console.log(data)
    const tBoxData = document.getElementById('tBoxBookTimeId')

    const btnBook = document.createElement('button');
    btnBook.id = 'btnBookId';
    btnBook.textContent = 'Confirm';

    document.getElementById('formId').appendChild(btnBook);

    tBoxData.style.display = 'none';
    btnBook.disabled = true;

    if (data.bookings[0].booked == true) {
        document.getElementById('btnMonId').disabled = true;
    }

    if (data.bookings[1].booked == true) {
        document.getElementById('btnTueId').disabled = true;
    }

    if (data.bookings[2].booked == true) {
        document.getElementById('btnWedId').disabled = true;
    }
};

const btnMon = () => {
    const data = JSON.parse(booking.response);
    console.log(data.bookings[0].booked)

    console.log('mon is pressed')

    data.bookings[0].booked = true;
    data.bookings[0].bookedBy = document.cookie
        .split('; ')
        .find(row => row.startsWith('user='))
        .split('=')[1];;

    console.log(data.bookings[0].booked)

    let tBoxData = document.getElementById('tBoxBookTimeId')

    let dataTemp = JSON.stringify(data)
    tBoxData.value += dataTemp;

    document.getElementById('btnCancelId').disabled = false;
    document.getElementById('btnBookId').disabled = false;
    document.getElementById('btnMonId').disabled = true;
    document.getElementById('btnTueId').disabled = true;
    document.getElementById('btnWedId').disabled = true;
}

const btnTue = () => {
    const data = JSON.parse(booking.response);
    console.log(data.bookings[1].booked)

    console.log('tue is pressed')

    data.bookings[1].booked = true;
    data.bookings[1].bookedBy = document.cookie
        .split('; ')
        .find(row => row.startsWith('user='))
        .split('=')[1];;

    console.log(data.bookings[1].booked)

    let tBoxData = document.getElementById('tBoxBookTimeId')

    let dataTemp = JSON.stringify(data)
    tBoxData.value += dataTemp;

    document.getElementById('btnCancelId').disabled = false;
    document.getElementById('btnBookId').disabled = false;
    document.getElementById('btnMonId').disabled = true;
    document.getElementById('btnTueId').disabled = true;
    document.getElementById('btnWedId').disabled = true;
}

const btnWed = () => {
    const data = JSON.parse(booking.response);
    console.log(data.bookings[2].booked)

    console.log('wed is pressed')

    data.bookings[2].booked = true;
    data.bookings[2].bookedBy = document.cookie
        .split('; ')
        .find(row => row.startsWith('user='))
        .split('=')[1];;

    console.log(data.bookings[2].booked)

    let tBoxData = document.getElementById('tBoxBookTimeId')

    let dataTemp = JSON.stringify(data)
    tBoxData.value += dataTemp;

    document.getElementById('btnCancelId').disabled = false;
    document.getElementById('btnBookId').disabled = false;
    document.getElementById('btnMonId').disabled = true;
    document.getElementById('btnTueId').disabled = true;
    document.getElementById('btnWedId').disabled = true;
}

const btnCancel = () => {
    console.log('btnCancel pressed');
    let tBoxData = document.getElementById('tBoxBookTimeId');
    tBoxData.value = '';

    document.getElementById('btnCancelId').disabled = true;
    document.getElementById('btnBookId').disabled = true;
    document.getElementById('btnMonId').disabled = false;
    document.getElementById('btnTueId').disabled = false;
    document.getElementById('btnWedId').disabled = false;
}

const btnSignOut = () => {
    console.log('SignOut pressed');

    document.cookie = "";

    location.href = '/'
}