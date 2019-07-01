var admin = {
	right: 'admin',
	login: 'admin',
	password: 'admin',
	name: 'admin'
};

var adminJSON = JSON.stringify(admin);
localStorage.setItem(admin.name, adminJSON);

var adminObj = JSON.parse(adminJSON);


function newUser() {
	var returnRight = JSON.parse(localStorage.getItem('right'));
	if ( returnRight == 'admin' ) {
		var userObj = {};
		userObj.right = 'read';
		userObj.login = document.getElementById('user-login').value;
		userObj.password = document.getElementById('user-password').value;
		userObj.name = document.getElementById('user-name').value;
		var nameUser = document.getElementById('user-name').value;
		userObj.role = document.getElementById('user-role').value;
		userObj.phone = document.getElementById('user-phone').value;
		userObj.firstTime = document.getElementById('first-time').value;
		userObj.secondTime = document.getElementById('second-time').value;

		var newUser = JSON.stringify(userObj);
		localStorage.setItem(nameUser, newUser);
	}
	else {
		alert('ксску изменил? красава');
	}
}


function removeUser(remove) {
	var parent = remove.parentElement;
	for (key in localStorage) {
		if ( key == parent.children[0].innerHTML ) {
			localStorage.removeItem(key);
		}
	}
	remove.parentElement.remove();
}


function editLocalStorage() {
	var name = document.getElementById('modal-edit-user__name').textContent;
	var returnObj = JSON.parse(localStorage.getItem(name));

	var newObj = {};
	newObj.right = '';
	newObj.login = '';
	newObj.password = '';
	newObj.name = name;
	newObj.role = document.getElementById('new-user-role').value;
	newObj.phone = document.getElementById('new-user-phone').value;
	newObj.firstTime = document.getElementById('new-first-time').value;
	newObj.secondTime = document.getElementById('new-second-time').value;

	for (let key in newObj) {
		if ( newObj[key] == '' ) {
			newObj[key] = returnObj[key];
		}
	}

	var newUser = JSON.stringify(newObj);
	localStorage.setItem(name, newUser);
}


function authorize() {
	var massive = [];
	for (let key in localStorage) {
		massive.push(key);
	}
	massive.length = massive.length - 6;
	
	for ( let i = 0; i < massive.length; i++ ) {
		var userName = JSON.parse(localStorage.getItem(massive[i]));
		var login = userName.login;
		var password = userName.password;
		if ( document.getElementById('enter-login').value == login 
			&& document.getElementById('enter-password').value == password ) {
			var right = userName.right;
		var rightObj = JSON.stringify(right);
		localStorage.setItem('right', rightObj);
		window.location.assign("action.html");
	}
}	
}


window.onload = function showTable() {
	var massive = [];
	var returnRight = JSON.parse(localStorage.getItem('right'));

	if ( returnRight == 'admin' ) {
		var div = document.createElement('div');
		div.setAttribute('class', 'new-user d-flex flex-row justify-content-center align-items-center');
		div.setAttribute('onclick', 'showModal();');
		var img = document.createElement('img');
		img.setAttribute('src', 'img/new-user.png');
		div.appendChild(img);
		document.getElementById('header-nav').appendChild(div);
	}
	
	for (let key in localStorage) {
		if ( key == 'right' || key == 'admin' ) continue;
		else massive.push(key);
	}
	massive.length = massive.length-6;

	for ( let i = 0; i < massive.length; i++ ) {

		var returnNewUser = JSON.parse(localStorage.getItem(massive[i]));
		
		var row = document.createElement('div');
		row.className = 'd-flex flex-row justify-content-between align-items-center table-with-users__row';
		document.getElementById('table-with-users').appendChild(row);

		for ( let key in returnNewUser ) {
			var cell = document.createElement('div');
			cell.className = 'table-with-users__cell';
			cell.innerHTML = returnNewUser[key];
			row.appendChild(cell);
		}

		if ( returnRight == 'admin' ) {
			var blockRemove = document.createElement('div');
			blockRemove.className = 'table-with-users__remove';
			blockRemove.setAttribute('onclick', 'removeUser(this);')
			var blockEdit = document.createElement('div');
			blockEdit.className = 'table-with-users__edit';
			blockEdit.setAttribute('onclick', 'showEditWind(this);')
			row.appendChild(blockEdit);
			row.appendChild(blockRemove);
		}

		row.children[0].remove();
		row.children[0].remove();
		row.children[0].remove();
	}
}