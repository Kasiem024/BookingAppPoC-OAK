'use strict';


let dataURLUsers = '../data/users.json';
let users = new XMLHttpRequest();
users.open('GET', dataURLUsers);
users.responseType = 'json';
users.send();

window.onload = () => {
    console.log('app.js is alive!')
    console.log(document.cookie);
}

const Login = () => {
    const data = users.response;

    let inputName = document.getElementById('tBoxNameId').value;

    let counter = 0;

    data.users.forEach((element, i) => {
        if (inputName == element.name) {
            console.log('Logged In')

            const tBoxNamn = document.getElementById('tBoxNameId')

            document.cookie = 'user=' + tBoxNamn.value;

            location.href = '/booking';
        } else {
            if (counter < 1) {
                counter++;
                const p = document.createElement('p');
                p.textContent = 'Invalid username, try again!'
                document.getElementById('login').appendChild(p);
            }
        }
    });
}