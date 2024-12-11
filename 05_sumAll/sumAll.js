const sumAll = function(x, y) {
    let sum = x;

    for (let i = (x+1) ; i <= y; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
