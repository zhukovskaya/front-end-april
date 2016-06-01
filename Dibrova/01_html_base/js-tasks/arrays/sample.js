/*
 2. Write a JavaScript function to clone an array.
 Test Data :
 console.log(cloneArray([1, 2, 4, 0]));
 console.log(cloneArray([1, 2, [4, 0]]));
 [1, 2, 4, 0]
 [1, 2, [4, 0]]

 */

function cloneArray(array) {
    // if (!isArray(array)) {
    // throw new Error('Enter an array!')
    // }



    var clone = [],
        i = 0,
        len = array.length;

    for (; i < len; i++) {
        if (array[i].length && array[i].constructor === Array) {
            clone[i] = cloneArray(array[i]);

        } else {
            clone[i] = array[i];
        }
    }

    return clone;

};
var a = [1, 2, 3, 4, 5];
var b = cloneArray(a);
var c = a;
console.log(' a : ', a);
console.log(' b : ', b);
console.log(' c : ', c);
// b[3].push(6);
b.push(8);
a.push(7);
console.log('===== after push =====');
console.log(' a : ', a);
console.log(' b : ', b);
console.log(' c : ', c);
