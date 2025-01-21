const mailPath = './mail.php'

const middleForm = document.querySelector('.middle-form');
const bottomForm = document.querySelector('.bottom-form');
const inputRequire = document.querySelectorAll('.require');
const inputRequireBottom = document.querySelectorAll('.require-bottom');

function sendMessage(e) {
	e.preventDefault();

	let error = formMiddleValidate(inputRequire);

	let dataThis = this,
		params = new FormData(this),
		request = new XMLHttpRequest();

	request.open('POST', mailPath, true);
	request.send(params);

	if (error === 0) {
		request.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				setTimeout(function () { dataThis.reset() }, 1000)
				alert('Спасибо, запрос отправлен!');
			}
		}
	}
}

function sendMessageFormBottom(e) {
	e.preventDefault();

	let error = formBottomValidate(inputRequire);

	let dataThis = this,
		params = new FormData(this),
		request = new XMLHttpRequest();

	request.open('POST', mailPath, true);
	request.send(params);

	if (error === 0) {
		request.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				setTimeout(function () { dataThis.reset() }, 1000)
				alert('Спасибо, запрос отправлен!');
			}
		}
	}
}


function formMiddleValidate(e) {
	let error = 0;
	for (let i = 0; i < inputRequire.length; i++) {
		const elem = inputRequire[i];
		formRemoveError(elem);
		if (elem.value === '') {
			formAddError(elem);
			error++;
		}
	}
	return error;
}

function formBottomValidate(e) {
	let error = 0;
	for (let i = 0; i < inputRequireBottom.length; i++) {
		const elem = inputRequireBottom[i];
		formRemoveError(elem);
		if (elem.value === '') {
			formAddError(elem);
			error++;
		}
	}
	return error;
}

function formAddError(input) {
	input.classList.add('error');
}
function formRemoveError(input) {
	input.classList.remove('error');
}

function init() {
	middleForm.addEventListener('submit', sendMessage);
	bottomForm.addEventListener('submit', sendMessageFormBottom);
}

init();
