'use strict';

let dataURLCalendarBooking = '../data/calendarBooking.json';
let calendarBooking = new XMLHttpRequest();
calendarBooking.open('GET', dataURLCalendarBooking);
calendarBooking.responseType = 'json';
calendarBooking.send();

console.log('showBooking.js is alive!')
console.log(document.cookie);

// Creating "cookieUser" here to be used by several functions
const cookieUser = document.cookie.split('; ').find(row => row.startsWith('user=')).split('=')[1];

// This function shows what the user has already booked
calendarBooking.onload = () => {

    const dataCalendar = calendarBooking.response;
    console.log(dataCalendar)

    for (let i = 0; i < dataCalendar.week.length; i++) {

        for (let j = 0; j < dataCalendar.week[i].times.length; j++) {

            if (dataCalendar.week[i].times[j].bookedBy == cookieUser) {
                // If the user has a booking print day and time
                const p = document.createElement('p');
                p.textContent = 'You have booked on ' + dataCalendar.week[i].day + ' at ' + dataCalendar.week[i].times[j].time;
                document.getElementById('bookings').appendChild(p);

                // Creating a button for each booking
                const btn = document.createElement('button');
                btn.textContent = 'Cancel this booking';
                btn.id = i + "," + j;
                btn.className = 'btnCancelClass';
                btn.addEventListener('click', btnCancelClick)
                document.getElementById('bookings').appendChild(btn);
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


// "btnCancelClick()" works in the same way as "btnBookClick()"
// Gets which button issued the event,
// Changes value of tBoxBookTimeId depending on id of button
const btnCancelClick = (event) => {
    const id = event.target.id;
    const className = event.target.className;

    let elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].disabled = true;
    }

    document.getElementById('btnConfirmId').disabled = false;

    let day = id.substr(0, 1);
    let time = id.substr(2, 1);

    const dataCalendar = calendarBooking.response;

    dataCalendar.week[day].times[time].booked = false;
    dataCalendar.week[day].times[time].bookedBy = "";

    let tBoxData = document.getElementById('tBoxBookTimeId')
    let dataTemp = JSON.stringify(dataCalendar)
    tBoxData.value += dataTemp;
}

const btnSignOut = () => {
    location.href = '/'
}