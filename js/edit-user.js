function showEditWind(target) {
	var parent = target.parentElement;
	var nameUser = parent.children[0].textContent;
	var returnObj = JSON.parse(localStorage.getItem(nameUser));

	document.getElementById('modal-edit-user__name').innerHTML = nameUser;
	document.getElementById('edit-user').classList.add('show-block');
	document.getElementById('header').classList.add('blur');
	document.getElementById('main').classList.add('blur');
	
	var massive = [];
	var timingValue;
	for ( let key in returnObj ) {
		massiveOfProperty(returnObj[key]);
	}
	function massiveOfProperty(value) {
		massive.push(value);
		return massive;
	}
	massive.splice(0,4);
	
	for ( let i = 0; i < massive.length; i++ ) {
		document.getElementById('form-edit-user').children[i].setAttribute('value', massive[i]);
	}
}







document.getElementById('modal-edit__close').onclick = function() {
	document.getElementById('edit-user').classList.remove('show-block');
	document.getElementById('header').classList.remove('blur');
	document.getElementById('main').classList.remove('blur');
}