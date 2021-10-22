'use strict';


console.log('shwoBook.js is alive!')

let dataURLCalendarBooking = '../data/calendarBooking.json';
let calendarBooking = new XMLHttpRequest();
calendarBooking.open('GET', dataURLCalendarBooking);
calendarBooking.responseType = 'json';
calendarBooking.send();


calendarBooking.onload = () => {
    console.log(document.cookie);

    const dataCalendar = calendarBooking.response;
    console.log(dataCalendar)

    const cookieUser = document.cookie
        .split('; ')
        .find(row => row.startsWith('user='))
        .split('=')[1];

    for (let i = 0; i < dataCalendar.week.length; i++) {

        for (let j = 0; j < dataCalendar.week[i].times.length; j++) {

            if (dataCalendar.week[i].times[j].bookedBy == cookieUser) {

                const p = document.createElement('p');
                p.textContent = 'You have booked on ' + dataCalendar.week[i].day + ' at ' + dataCalendar.week[i].times[j].time;
                document.getElementById('bookings').appendChild(p);
            }
        }
    }
}

const btnCancelBooked = () => {
    console.log('btnCancelBooked Clicked')
}

const btnSignOut = () => {
    location.href = '/'
}