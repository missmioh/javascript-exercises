const fibonacci = function(num) {
    let fibArray = [1, 1];
    let i = 0;

    let number
    if (typeof num !== 'number') {
        number = parseInt(num);
    } else {
        number = num;
    }

    if (number === 0) return 0;
    if (number < 0) return "OOPS";

    while (fibArray.length < number) {
        let sum = fibArray[i] + fibArray[++i];
        fibArray.push(sum);
    }

    return fibArray[`${number - 1}`];
};

// Do not edit below this line
module.exports = fibonacci;