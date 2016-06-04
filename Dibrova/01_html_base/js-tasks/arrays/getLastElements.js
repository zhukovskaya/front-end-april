function isArray(item) {
    return (typeof item !== undefined && item && item.constructor === Array);
};

/*
 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
 Test Data :
 console.log(getLastElements([7, 9, 0, -2]));
 console.log(getLastElements([7, 9, 0, -2],3));
 console.log(getLastElements([7, 9, 0, -2],6));
 Expected Output :
 -2
 [9, 0, -2]
 [7, 9, 0, -2]
 */
function getLastElements(array, n) {
	if (!isArray(array)) {
        throw new Error('Enter an array!')
    }

	console.log('array: ' + array);
    var  n = array.pop();

    return n;

};

console.log(getLastElements([7, 9, 0, -2]));
console.log(getLastElements([[7, 9, 0, -2], 3]));
console.log(getLastElements([[7, 9, 0, -2], 6]));