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

// function sum(a) {
// 	return  function(b) {
// 		return  function (c) {
// 				return a + b + c;
// 			}
// }



// var closure = (function() {
// 	var text = "Hello";
	
// 	function concat(name) {
// 		return text + " " +  name;
// 	}
// 	return getName : function(name) {
// 		return concat(name);
// 	}
// }
// })

// var greeting = closure();
// console.log(greeting("Vlad"));

// function ElectronDevice() {
// 	var enabled = false;

// 	this.enable = function() {
// 		enabled = true;
// 	};

// 	this.disable = function() {
// 		enabled = false;
// 	}
// }

// function MacBook(battery) {
// 	ElectronDevice.call(this);
// 	var ram = 4;
// 	console.log(this);
// }

// var book = new MacBook;

// var animal = {
// 	eats: true
// };
// var rabbit = {
// 	jumps: true
// };
// rabbit._proto_ = animal;
// console.log(rabbit);


// function Animal(name){
// 	this.name = name;
// 	this.speed = 0;
// }

// Animal.prototype.run = function(speed) {
// 	this.speed += speed;
// 	console.log(this.name + 'бежитб скорость ' + this.speed);
// };
// Animal.prototype.stop = function() {
// 	this.speed = 0;
// 	console.log(this.name + ' стоит');
// };
// var anomal = new Animal('Зверь');

function User() {
 var firstName,
 	surname;

	this.setFirstName = function(str1) {
		firstName = str1;
	}

	this.setSurname = function(str2) {
		surname = str2;
	}

	this.getFullName = function() {
		return firstName + " " + surname;
	}
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

console.log(user.getFullName());





function Machine() {
	this._enabled = false;

	this.enable = function() {
		this._enabled = true;
	};

	this.disable = function() {
		this._enabled = false;
	};
}

function CoffeeMachine(power) {
	Machine.apply(this, arguments);

	var waterAmount = 0;

	this.setWaterAmount = function(amount) {
		waterAmount = amount;
	};

	function onReady() {
		console.log('Кофе готов');
	}

	this.run = function() {
		if(!this._enable) {
		console.log("machine doesn't work")
	}
		setTimeout(onReady, 1000);
	};
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run();

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();


