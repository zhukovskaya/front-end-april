window.onload = function(){ 
   var doc = document,
	name = doc.getElementById("name"),
	phone = doc.getElementById("phone"),
	email = doc.getElementById("email"),
	buttonAdd = doc.getElementById("add"),
	phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
	emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	form = doc.getElementById("info");

form.onclick = function() {
    
	if(!validError) {
		alert('hi');
	}	//createElement()

};	


//validation

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
		if(!validName() || !validPhone() || !validEmail()) {
		var error = doc.createElement("p");
		error.innerHTML = "Please, enter valid information" ;
		form.appendChild(error);
		}
	}
	 
};




