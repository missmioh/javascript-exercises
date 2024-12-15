const sumAll = function(x, y) {
    let sum = x;

    if (x < 0 || y < 0) {
        return "ERROR";
    } else if (parseInt(x) !== x || parseInt(y) !== y) {
        return "ERROR";
    } else if (x > y) {
        for (let i = (x-1); i >= y; i--) {
            sum += i;
         }
    } else {
        for (let i = (x+1); i <= y; i++) {
           sum += i;
        }
    }
    return sum;
    };

// Do not edit below this line
module.exports = sumAll;
