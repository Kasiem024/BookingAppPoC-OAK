'use strict';

console.log('book.js is alive!')

// let dataURLUsers = '../data/users.json';
// let users = new XMLHttpRequest();
// users.open('GET', dataURLUsers);
// users.responseType = 'json';
// users.send();

let dataURLCalendarBooking = '../data/calendarBooking.json';
let calendarBooking = new XMLHttpRequest();
calendarBooking.open('GET', dataURLCalendarBooking);
calendarBooking.responseType = 'json';
calendarBooking.send();

let dataURLBooking = '../data/booking.json';
let booking = new XMLHttpRequest();
booking.open('GET', dataURLBooking);
booking.responseType = 'json';
booking.send();

window.onload = () => {
    console.log(document.cookie)
}

booking.onload = () => {
    const data = booking.response;

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

    const dataCalendar = calendarBooking.response;
    console.log(dataCalendar);

    for (let i = 0; i < dataCalendar.week.length; i++) {

        var mybr = document.createElement('br');
        document.getElementById('calendar').appendChild(mybr);

        const p = document.createElement('p');

        p.textContent = dataCalendar.week[i].day

        document.getElementById('calendar').appendChild(p);

        for (let j = 0; j < dataCalendar.week[i].times.length; j++) {
            const btn = document.createElement('button');

            btn.textContent = "Boka " + dataCalendar.week[i].times[j].time;
            btn.style.width = "80px"
            btn.style.height = "80px"

            btn.addEventListener('click', btnBookClick)

            btn.id = i + "," + j;
            btn.className = 'btnBookClass';

            document.getElementById('calendar').appendChild(btn);
        }
    }
};

const btnBookClick = (event) => {
    const id = event.target.id;
    const className = event.target.className;
    console.log(id);
    console.log(className);


    var elems = document.getElementsByClassName(className);
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = true;
    }

    document.getElementById('btnCancelId').disabled = false;
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

    var elems = document.getElementsByClassName('btnBookClass');
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = false;
    }
}

const btnMon = () => {
    const data = booking.response;
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
    const data = booking.response;
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
    const data = booking.response;
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

    document.getElementsByClassName('btnBookClass').disabled = false;
}

const btnSignOut = () => {
    console.log('SignOut pressed');

    document.cookie = "";

    location.href = '/'
}