'use strict';

console.log('app.js is alive!')

const Login = () => {
    let inputName = document.getElementById('name').value;

    if (inputName == 'kalle') {
        console.log('Logged In')
    } else {
        console.log('That is not a valid account');
    }
}