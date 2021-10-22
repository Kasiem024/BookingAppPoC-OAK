'use strict';

// GETs what is inside users.json and assigns it to users.response

let dataURLUsers = '../data/users.json';
let users = new XMLHttpRequest();
users.open('GET', dataURLUsers);
users.responseType = 'json';
users.send();

console.log('app.js is alive!')
console.log(document.cookie);

// Declaring counter outside of Login() to not reset it on every button click
let counter = 0;

const Login = () => {
    const data = users.response;

    let inputName = document.getElementById('tBoxNameId').value;

    // "p" will be used to inform user of invalid input in inputName
    // style.display = 'none' essentially deletes the element
    const p = document.createElement('p');
    p.style.display = 'none';
    document.getElementById('login').appendChild(p);

    data.users.forEach((element) => {
        if (inputName == element.name) {

            const tBoxNamn = document.getElementById('tBoxNameId')

            // Adding to cookie the users name
            document.cookie = 'user=' + tBoxNamn.value;

            location.href = '/booking';
        } else {
            if (counter < 1) {
                // This in combination with above code concerning "p"
                // Makes it so "p" is only printed once per button click
                counter++;
                p.textContent = 'Invalid username, try again!'
                p.style.display = 'block';
                document.getElementById('login').appendChild(p);
            }
        }
    });
}