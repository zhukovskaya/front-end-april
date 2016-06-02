

function getFirstElements(array, n) {
    if (!isArray(array)) {
        throw new Error('Enter an array!')
    }

    var arrray = [],
        n = (array[0]);

    console.log('array[0]: ' + array[0]);
    console.log('array: ' + array);


    return n;

};

// console.log(getFirstElements([7, 9, 0, -2]));
// console.log(getFirstElements([], 3));
// console.log(getFirstElements([7, 9, 0, -2], 3));
var array = [[7, 9, 0, -2], 3],
n = array[0];
console.log('array: ' + array);
console.log('n: ' + n);