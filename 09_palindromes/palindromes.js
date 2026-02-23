// solution without regex, first attempt

const palindromesA = function (string) {
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

// simplified version

const palindromes = function (string) {
    let cleaned = "";

    for (char of string.toLowerCase()) {
        if ( (char >= "0" && char <= "9") || (char >= "a" && char <= "z") )
        cleaned += char;
    }

    let reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;