'use strict';

console.log('app.js is alive!')

const Login = () => {
    let inputName = document.getElementById('name').value;

    if (inputName == 'Kalle') {
        // window.location.href = 'home';
        console.log('Logged In')
    } else {
        console.log('That is not a valid account');
    }
}