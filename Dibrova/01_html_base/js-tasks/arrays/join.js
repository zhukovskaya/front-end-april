function isArray(item) {
    return (typeof item !== undefined && item && item.constructor === Array);
};

/*
 5. Write a simple JavaScript program to join all elements of the following array into a string.
 Set second argument as choisen separator (e.g. - ";" , "," , "+"). By default must be ",".
 Sample array : myColor = ["Red", "Green", "White", "Black"];
 Expected Output :
 "Red,Green,White,Black"
 "Red,Green,White,Black"
 "Red+Green+White+Black"
 */
function join(array, separator) {


	var  n = array.join('+')

    return n;
};

console.log(join(["Red", "Green", "White", "Black"]));