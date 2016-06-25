var name = document.getElementById("name"),
	phone = document.getElementById("phone"),
	email = document.getElementById("email"),
	buttonAdd = document.getElementById("add"),
	phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
	emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	error = document.getElementById("error");

buttonAdd.onclick = add;


function validName() {
	return name && name.length;
}

function validPhone() {
	return phoneRegExp.test(phone.value); 
}

function validEmail(email) {
 	return emailRegExp.test(email.value);
}

function validError() {
	if(!validName() || !validPhone || !validEmail)
 error.innerHTML = "Please, enter valid information";





