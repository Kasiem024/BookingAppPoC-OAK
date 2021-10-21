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
    console.log('This is booking.onload')
        // const data = booking.response;
        // console.log(data.bookings[0].booked);
        // if (document.cookie.split(';').some((item) => item.trim().startsWith('user='))) {
        //     console.log('true')
        //   }

    const btnBook = document.createElement('button');
    btnBook.id = 'btnUpdateId';
    btnBook.textContent = 'Booking';

    btnBook.addEventListener('click', ButtonEventhandler);

    document.getElementById('formBookId').appendChild(btnBook);
};

const btnMon = () => {
    let data = booking.response;
    console.log(data.bookings[0].booked)

    console.log('mon is pressed')

    data.bookings[0].booked = true;
    console.log(data.bookings[0].booked)

    let tBoxData = document.getElementById('txtDataId')

    let dataTemp = JSON.stringify(data)
    tBoxData.value += dataTemp;
}

const btnTue = () => {
    let data = booking.response;
    console.log(data.bookings[1].booked)

    console.log('tue is pressed')

    data.bookings[1].booked = true;
    console.log(data.bookings[1].booked)

    let tBoxData = document.getElementById('txtDataId')

    let dataTemp = JSON.stringify(data)
    tBoxData.value += dataTemp;
}

const btnWed = () => {
    let data = booking.response;
    console.log(data.bookings[2].booked)

    console.log('wed is pressed')

    console.log(data.bookings[2].booked)
    data.bookings[2].booked = true;

    let tBoxData = document.getElementById('txtDataId')

    let dataTemp = JSON.stringify(data)
    tBoxData.value += dataTemp;
}