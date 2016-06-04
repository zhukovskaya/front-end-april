function isArray(item) {
    return (typeof item !== undefined && item && item.constructor === Array);
};

/*
 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
 Test Data :
 console.log(getFirstElements([7, 9, 0, -2]));
 console.log(getFirstElements([],3));
 console.log(getFirstElements([7, 9, 0, -2],3));
 console.log(getFirstElements([7, 9, 0, -2],6));
 console.log(getFirstElements([7, 9, 0, -2],-3));
 Expected Output :
 7
 []
 [7, 9, 0]
 [7, 9, 0, -2]
 []

 */

function getFirstElements(array, n) {
    if (!isArray(array)) {
        throw new Error('Enter an array!')
    }

    var  n = array[0];

    
    console.log('array: ' + array);


    return n;

};

console.log(getFirstElements([7, 9, 0, -2]));
console.log(getFirstElements([[], 3]));
console.log(getFirstElements([[7, 9, 0, -2], 3]));
console.log(getFirstElements([[7, 9, 0, -2], 6]));
console.log(getFirstElements([[7, 9, 0, -2], -3]));
