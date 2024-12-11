const removeFromArray = function(arr, arg) {
    const array = arr;

    for (const element of array) {
        if (element === arg) {
            let indexNumber = array.indexOf(element);
            array.splice(indexNumber, 1);
        } 
    } return array;
};

// Do not edit below this line
module.exports = removeFromArray;

    // for ... of loop that goes through the array to see if any of the elements
    //is a match to arg

    //if a match is found, the element will be spliced out using the index number
    //splice alters the original array, that's what we want.
    // array.splice(n, 1); n is the index of the element

    //then return the altered array.
// array
// 0: 1
// 1: 2
// 2: 3
// 3: 4

// 15:36: works with strings but not multiples

