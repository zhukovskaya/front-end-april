/*var expresion,
result; 
while(true) {
	expresion = prompt("Enter an expresion");
	if  (expresion == null) break;
	try  {
		result = eval(expresion)
		
		if (isNaN(result)) {
			throw new Error("Неправильный результат")
		}
		break;
	
} catch(error) {
	alert("Not correct imput : " + error.message);
}
	
}
alert(result);
consol.log(error);
*/

function sum(a) {
	return  function(b) {
		return  function (c) {
				return a + b + c;
			}
}



var closure = (function() {
	var text = "Hello";
	
	function concat(name) {
		return text + " " +  name;
	}
	return getName : function(name) {
		return concat(name);
	}
}
})

var greeting = closure();
console.log(greeting("Vlad"));


