const removeFromArray = function(arr, ...args) {
    const array = arr;

    for (let i = 0; i < array.length; i++)  {
        for (let argument of args) {

            if (array[i] === argument) {
                let indexNumber = array.indexOf(array[i]);
                array.splice(indexNumber, 1);
                i--;
                // note to self: needs to be decreased as the original array becomes shorter and the
                // corresponding element is moving up the list (e.g. from index 1 to 0)
            } 
        }
    } return array;
};

// Do not edit below this line
module.exports = removeFromArray;

