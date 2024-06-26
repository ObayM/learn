const apiUrl = 'http://127.0.0.1:8000/api/v1/signup';
let userData = null; 
const formData = {
    first_name: 'agsd',
    last_name: 'dg',
    username: '23',
    email: '34@435.com',
    password: '123',
};

fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(newUserData => {
        userData = newUserData
        console.log('New User Data:', newUserData);
    })
    .catch(error => {
        console.error('Error:', error);
    });

console.log(userData);