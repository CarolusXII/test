function authorize() {
	var massive = [];
	for (let key in localStorage) {
		massive.push(key);
	}
	massive.length = massive.length - 6;
	
	for ( let i = 0; i < massive.length; i++ ) {
		var name = JSON.parse(localStorage.getItem(massive[i]));
		var login = name.login;
		var password = name.password;

		if ( document.getElementById('enter-login').value == login 
			&& document.getElementById('enter-password').value == password ) {
				
		window.location.assign("action.html");
	}
}
}
