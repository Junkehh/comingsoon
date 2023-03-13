const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const username = event.target.elements.username.value;
	const password = event.target.elements.password.value;

	if (username === 'Junkeh' && password === 'isrllyc00l') {
		const image = document.createElement('img');
		image.src = 'https://imgur.com/QPmaJhp.png';

		const fullscreen = document.createElement('div');
		fullscreen.classList.add('fullscreen');
		fullscreen.appendChild(image);

		document.body.appendChild(fullscreen);
	} else {
		alert('Invalid username or password');
	}
});

const cookieUsername = getCookie('username');
const cookiePassword = getCookie('password');

if (cookieUsername && cookiePassword) {
	const usernameField = document.getElementById('username');
	const passwordField = document.getElementById('password');

	usernameField.value = cookieUsername;
	passwordField.value = cookiePassword;

	form.submit();
}

function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}
