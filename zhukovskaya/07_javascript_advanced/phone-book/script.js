 window.onload = function(){ 
// document.addEventListener( "DOMContentLoaded", function() {
//   document.removeEventListener( "DOMContentLoaded", arguments.callee, false );


   var doc = document,
	name = doc.getElementById("user-name"),
	phone = doc.getElementById("phone"),
	email = doc.getElementById("email"),
	buttonAdd = doc.getElementById("add"),
	phoneRegExp = /\d/,
	emailRegExp =/\w/,
	errorMessage = doc.getElementById("error"),
	form = doc.getElementById("info"),
	table = doc.getElementById("myTable");


	buttonAdd.onclick = function add() {
		
		
		var newRow = table.insertRow(-1);
		var cellName = newRow.insertCell(-1);
		cellName.innerHTML = name.value;
		var cellPhone = newRow.insertCell(-1);
		cellPhone.innerHTML = phone.value;
		var cellEmail = newRow.insertCell(-1);
		cellEmail.innerHTML = email.value;
		var cellDelete = newRow.insertCell(-1);
		cellDelete.innerHTML = "<a>Delete</a>";
		// var a = doc.createElement("a");
		// cellDelete.appendChild(a);
		// a.innerHTML = "Delete";

		 var links = doc.getElementsByTagName("a");

		 for (var i = 0; i < links.length; i++) {
		 var link = links[i];
		    		
		    link.onclick = function() {
		    	//alert("hi");
		    	var el = link.parentNode.parentNode;
       			el.parentNode.removeChild(el);
		     	}
		   }
		}
	// if(isValid ()) {
	// 	alert('hi');
	// }	
		
		


//validation

	// function validName() {
	// 	return name && name.length;
		
	// }

	// function validPhone() {
	// 	return phoneRegExp.test(phone.value); 
	// }

	// function validEmail() {
	//  	return emailRegExp.test(email.value);
	// }

	// function isValid() {
		 
	// 	if(!validName() || !validPhone() || !validEmail()) {
	// 		errorMessage.innerHTML = "Please, enter valid information" ;
	// 	} else {
	// 		return validName() && validPhone() && validEmail();
	// 	}
	// }
	
	 // function () {
	 // 	var obj = {};
	 // 	obj.name = 

	 

	

///^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// }, false );
}
