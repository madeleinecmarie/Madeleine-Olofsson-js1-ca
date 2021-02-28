const submit = document.querySelector('#submit');
// All error messages
const firstNameError = document.querySelector('.nameError');
const addressError = document.querySelector('.addressError');
const emailError = document.querySelector('.emailError');
const subjectError = document.querySelector('.subjectError');

submit.onclick = function (event) {
	
	event.preventDefault();
    console.log('Event run');

	const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const subject = document.querySelector('#subject').value;
	const address = document.querySelector('#addressbox').value;

    if (testLen(name, 1)) {
		firstNameError.classList.add('hide');
		firstNameError.classList.remove('show');
	} else {
		firstNameError.classList.add('show');
		firstNameError.classList.remove('hide');
	}

    if (subject.length >= 10) {
        subjectError.classList.add('hide');
		subjectError.classList.remove('show');
    } else {
		subjectError.classList.add('show');
        subjectError.classList.remove('hide');
    }

	if (validateEmail(email)) {
		emailError.classList.add('hide');
		emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
		emailError.classList.remove('hide');
	}

    if (testLen(address, 25)) {
		addressError.classList.add('hide');
		addressError.classList.remove('show');
	} else {
		addressError.classList.add('show');
		addressError.classList.remove('hide');
	}
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(address);
};

function validateEmail(emailAddy) {
	const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const isEmailValid = emailExpression.test(emailAddy);
	return isEmailValid;
}

function testLen(elm, len) {
	if (elm.length > len) {
		return true;
	} else {
		return false;
	}
}
