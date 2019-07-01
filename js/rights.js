window.onload = function () {
	var returnRight = JSON.parse(localStorage.getItem('right'));
	document.getElementById('show-right').textContent = returnRight;

	if ( returnRight == 'admin' ) {
		var div = document.createElement('div');
		div.setAttribute('class', 'new-user d-flex flex-row justify-content-center align-items-center');
		div.setAttribute('onclick', 'showModal();');
		var img = document.createElement('img');
		img.setAttribute('src', 'img/new-user.png');
		div.appendChild(img);
		document.getElementById('header-nav').appendChild(div);

		document.getElementById('table-for-edit-rights').style.height = '50vh';

		var massiveForKeys = [];
		var massiveForValues = [];
		for (let key in localStorage) {
			if (key == 'right' || key == 'admin') continue;
			else massiveForKeys.push(key);
		}
		massiveForKeys.length = massiveForKeys.length - 6;

		for ( let i = 0; i < massiveForKeys.length; i++ ) {
			var returnObj = JSON.parse(localStorage.getItem(massiveForKeys[i]));
			var row = document.createElement('div');
			row.className = 'table-for-edit-rights__row d-flex flex-row justify-content-center align-items-center';
			var name = document.createElement('div');
			name.textContent = returnObj.name;
			name.className = 'table-for-edit-rights__cell';
			var login = document.createElement('div');
			login.textContent = returnObj.login;
			login.className = 'table-for-edit-rights__cell';
			var password = document.createElement('div');
			password.textContent = returnObj.password;
			password.className = 'table-for-edit-rights__cell';
			var right = document.createElement('div');
			right.textContent = returnObj.right;
			right.className = 'table-for-edit-rights__cell';
			row.appendChild(name);
			row.appendChild(login);
			row.appendChild(password);
			row.appendChild(right);
			var edit = document.createElement('div');
			edit.className = 'table-for-edit-rights__edit';
			edit.setAttribute('onclick', 'showRightUser(this);');
			row.appendChild(edit);
			document.getElementById('table-for-edit-rights').appendChild(row);
		}
	}
}

document.getElementById('modal-window-edit-right-user__close').onclick = function() {
	document.getElementById('modal-window-edit-right-user').classList.remove('show-block');
	document.getElementById('header').classList.remove('blur');
	document.getElementById('main').classList.remove('blur');
}

function showRightUser(target) {
	var returnRight = JSON.parse(localStorage.getItem('right'));
	document.getElementById('modal-window-edit-right-user').classList.add('show-block');
	document.getElementById('header').classList.add('blur');
	document.getElementById('main').classList.add('blur');

	var parent = target.parentElement;
	var firstChild = parent.children[0];
	var returnObj = JSON.parse(localStorage.getItem(firstChild.textContent));
	document.getElementById('right-user-name').textContent = returnObj.name;
}


function editRightUser() {
	var name = document.getElementById('right-user-name').textContent;
	var returnObj = JSON.parse(localStorage.getItem(name));

	var newObj = {};
	newObj.login = document.getElementById('edit-login').value;
	newObj.password = document.getElementById('edit-password').value;
	newObj.right = document.getElementById('edit-right').value;
	newObj.name = name;
	newObj.role = '';
	newObj.phone = '';
	newObj.firstTime = '';
	newObj.secondTime = '';
	
	for (let key in newObj) {
		if ( newObj[key] == '' ) {
			newObj[key] = returnObj[key];
		}
	}
	var newUser = JSON.stringify(newObj);
	localStorage.setItem(name, newUser);
}

