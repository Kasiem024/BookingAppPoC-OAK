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
    const data = booking.response;
    console.log(data.bookings[0].booked);
    if (document.cookie.split(';').some((item) => item.trim().startsWith('user='))) {
        console.log('true')
      }
};

const btnMon = () =>{
    const data = booking.response;

    console.log('mon is pressed')
    console.log(data.bookings[0].booked)

}

const btnTue = () =>{
    const data = booking.response;

    console.log('tue is pressed')
    console.log(data.bookings[1].booked)

    data.bookings[1].booked = true;
    console.log(data.bookings[1].booked)

}

const btnWed = () =>{
    const data = booking.response;

    console.log('wed is pressed')
    console.log(data.bookings[2].booked)

}