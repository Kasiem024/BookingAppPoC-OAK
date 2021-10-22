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

let counter = 0;

const Login = () => {
    const data = users.response;

    let inputName = document.getElementById('tBoxNameId').value;

    const p = document.createElement('p');
    p.style.display = 'none';
    document.getElementById('login').appendChild(p);

    data.users.forEach((element, i) => {
        if (inputName == element.name) {
            console.log('Logged In')

            const tBoxNamn = document.getElementById('tBoxNameId')

            document.cookie = 'user=' + tBoxNamn.value;

            location.href = '/booking';
        } else {
            if (counter < 1) {
                counter++;
                p.textContent = 'Invalid username, try again!'
                p.style.display = 'block';
                document.getElementById('login').appendChild(p);
            }
        }
    });
}