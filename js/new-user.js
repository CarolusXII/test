function showModal() {
	document.getElementById('modal-window').classList.add('show-block');
	document.getElementById('header').classList.add('blur');
	document.getElementById('main').classList.add('blur');
}

document.getElementById('window__close').onclick = function() {
	document.getElementById('modal-window').classList.remove('show-block');
	document.getElementById('header').classList.remove('blur');
	document.getElementById('main').classList.remove('blur');
}