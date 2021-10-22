'use strict';


let dataURLCalendarBooking = '../data/calendarBooking.json';
let calendarBooking = new XMLHttpRequest();
calendarBooking.open('GET', dataURLCalendarBooking);
calendarBooking.responseType = 'json';
calendarBooking.send();


window.onload = () => {
    console.log('book.js is alive!')
    console.log(document.cookie)
}

calendarBooking.onload = () => {

    const tBoxData = document.getElementById('tBoxBookTimeId')

    const btnBook = document.createElement('button');
    btnBook.id = 'btnBookId';
    btnBook.textContent = 'Confirm';

    tBoxData.style.display = 'none';
    btnBook.disabled = true;

    document.getElementById('formId').appendChild(btnBook);

    const dataCalendar = calendarBooking.response;
    console.log(dataCalendar);

    for (let i = 0; i < dataCalendar.week.length; i++) {

        let mybr = document.createElement('br');
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

            if (dataCalendar.week[i].times[j].booked == true) {
                btn.disabled = true;
            }
        }
    }
};

const btnBookClick = (event) => {
    const id = event.target.id;
    const className = event.target.className;

    let elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].disabled = true;
    }

    document.getElementById('btnCancelId').disabled = false;
    document.getElementById('btnBookId').disabled = false;

    let day = id.substr(0, 1);
    let time = id.substr(2, 1);

    const dataCalendar = calendarBooking.response;

    dataCalendar.week[day].times[time].booked = true;

    dataCalendar.week[day].times[time].bookedBy = document.cookie
        .split('; ')
        .find(row => row.startsWith('user='))
        .split('=')[1];

    let tBoxData = document.getElementById('tBoxBookTimeId')

    let dataTemp = JSON.stringify(dataCalendar)
    tBoxData.value += dataTemp;
}

const btnCancel = () => {
    let tBoxData = document.getElementById('tBoxBookTimeId');
    tBoxData.value = '';

    document.getElementById('btnCancelId').disabled = true;
    document.getElementById('btnBookId').disabled = true;
    document.getElementById('btnMonId').disabled = false;
    document.getElementById('btnTueId').disabled = false;
    document.getElementById('btnWedId').disabled = false;

    let elements = document.getElementsByClassName('btnBookClass');
    for (let i = 0; i < elements.length; i++) {
        elements[i].disabled = false;
    }
}

const btnSignOut = () => {
    location.href = '/'
}