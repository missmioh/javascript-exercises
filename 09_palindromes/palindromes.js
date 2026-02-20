// solution without regex

const palindromes = function (string) {
    let stringA = string.toLowerCase();

    while (stringA.includes(" ") === true || stringA.includes(".") === true || stringA.includes("!") === true ||
stringA.includes(",") === true) {
    stringA = stringA.split(" ").join("");
    stringA = stringA.split(",").join("");
    stringA = stringA.split(".").join("");
    stringA = stringA.split("!").join("");
    stringA = stringA.split("").reverse().join("");
    }

    let stringB = stringA.split("").reverse().join("");
    console.log(stringB);

    if (stringA === stringB) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;