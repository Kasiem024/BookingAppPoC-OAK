'use strict';


console.log('shwoBook.js is alive!')

let dataURLCalendarBooking = '../data/calendarBooking.json';
let calendarBooking = new XMLHttpRequest();
calendarBooking.open('GET', dataURLCalendarBooking);
calendarBooking.responseType = 'json';
calendarBooking.send();

const cookieUser = document.cookie
    .split('; ')
    .find(row => row.startsWith('user='))
    .split('=')[1];

calendarBooking.onload = () => {
    console.log(document.cookie);

    const dataCalendar = calendarBooking.response;
    console.log(dataCalendar)

    for (let i = 0; i < dataCalendar.week.length; i++) {

        for (let j = 0; j < dataCalendar.week[i].times.length; j++) {

            if (dataCalendar.week[i].times[j].bookedBy == cookieUser) {

                const p = document.createElement('p');
                p.textContent = 'You have booked on ' + dataCalendar.week[i].day + ' at ' + dataCalendar.week[i].times[j].time;
                document.getElementById('bookings').appendChild(p);
            }
        }
    }

    const tBoxData = document.getElementById('tBoxBookTimeId')

    const btnBook = document.createElement('button');
    btnBook.id = 'btnBookId';
    btnBook.textContent = 'Confirm';

    tBoxData.style.display = 'none';
    btnBook.disabled = true;

    document.getElementById('formId').appendChild(btnBook);
}

const btnCancelBooked = () => {
    console.log('btnCancelBooked Clicked')

    const dataCalendar = calendarBooking.response;

    for (let i = 0; i < dataCalendar.week.length; i++) {

        for (let j = 0; j < dataCalendar.week[i].times.length; j++) {

            if (dataCalendar.week[i].times[j].bookedBy == cookieUser) {

                dataCalendar.week[i].times[j].booked = false;

                dataCalendar.week[i].times[j].bookedBy = "";

                let tBoxData = document.getElementById('tBoxBookTimeId')

                let dataTemp = JSON.stringify(dataCalendar)
                tBoxData.value += dataTemp;
            }
        }
    }

    document.getElementById('btnBookId').disabled = false;
}

const btnSignOut = () => {
    location.href = '/'
}