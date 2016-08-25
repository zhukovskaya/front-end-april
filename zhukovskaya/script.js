function sequence(start, step) {
start = start || 0;
step = step || 1;
start=start-step;
	return function() {
	 	return start = start + step;
	}
}


var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8


function take(fn, count) {
	var b = [];
	for(var i = 0; i < count; i++) {
		b[i] = fn();
	} return b;
}

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]


function map(fn, array) {
 var newArray = [];
 for (var i = 0; i < array.length; i++) {
 	
 	newArray[i] = fn(array[i]);
 } 
 return newArray;
}

function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]