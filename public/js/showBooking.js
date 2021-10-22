'use strict';

let dataURLCalendarBooking = '../data/calendarBooking.json';
let calendarBooking = new XMLHttpRequest();
calendarBooking.open('GET', dataURLCalendarBooking);
calendarBooking.responseType = 'json';
calendarBooking.send();

console.log('showBooking.js is alive!')
console.log(document.cookie);

// Creating "cookieUser" here to be used by several functions
const cookieUser = document.cookie
    .split('; ')
    .find(row => row.startsWith('user='))
    .split('=')[1];

// This function shows what the user has already booked
// And confirm button
calendarBooking.onload = () => {

    const dataCalendar = calendarBooking.response;
    console.log(dataCalendar)

    for (let i = 0; i < dataCalendar.week.length; i++) {

        for (let j = 0; j < dataCalendar.week[i].times.length; j++) {

            if (dataCalendar.week[i].times[j].bookedBy == cookieUser) {
                // If the user has booked something print it
                const p = document.createElement('p');
                p.textContent = 'You have booked on ' + dataCalendar.week[i].day + ' at ' + dataCalendar.week[i].times[j].time;
                document.getElementById('bookings').appendChild(p);
            }
        }
    }

    const tBoxData = document.getElementById('tBoxBookTimeId')

    const btnConfirm = document.createElement('button');
    btnConfirm.id = 'btnConfirmId';
    btnConfirm.textContent = 'Confirm';

    tBoxData.style.display = 'none';
    btnConfirm.disabled = true;

    document.getElementById('formId').appendChild(btnConfirm);
}

// "btnCancelBooked" searches for which times the user has booked and resets the data
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

    document.getElementById('btnConfirmId').disabled = false;
}

const btnSignOut = () => {
    location.href = '/'
}