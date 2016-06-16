<<<<<<< HEAD
function cloneArray(array) {
    // if (!isArray(array)) {
    // 	return throw new Error("Enter an array!")
    // }
    // var clone = [],
    //     i = 0,
    //     len = array.length;

    // for (; i < len; i++) {
    //     if (array[i].length && array[i].constructor === Array) {
    //         clone[i] = cloneArray(array[i])
    //     } else {
    //         clone[i] = array[i];
    //     }
    // }

    // var clone = array.concat([]);
    // return clone;
    return array.slice();
}


var a = [1, 2, 3, [4, 5]];
var b = cloneArray(a);
console.log(" a : ", a);
console.log(" b : ", b);
b[3].push(6);
b.push(8);
console.log("===== after push =====");
console.log(" a : ", a);
console.log(" b : ", b);


var obj = {
	name : "Vlad",
	height : 190,
	walk : function() { return "I can walk"},
	makeCode : function() {return "I make code"}
}

=======
(function() {
    function Calculator() {
        var first, second;
        this.read = function() {
            first = +prompt("Enter first number : ");
            second = +prompt("Enter second number : ");
        }

        this.sum = function() {
            return first + second;
        }

        this.mul = function() {
            return first * second;
        }
    }

    function Accumulator(startingValue) {
        this.value = startingValue;

        this.read = function() {
            this.value += +prompt("Enter value")
        }
    }

    function Calculator() {

        var obj = {
            '+': function(a, b) {
                return a + b;
            },
            '-': function(a, b) {
                return a - b;
            }
        }

        this.calculate = function(string) {
            var str = string.split(' '),
                number1 = str[0],
                operator = str[1],
                number2 = str[2];
            obj[operator](+number1, +number2)
        }
    }

    var calc = new Calculator;
    calc.calculate("3 + 7"); // 10

})();
>>>>>>> da5bccb208f2047fccaabf2c3d3a7099a66278f2
