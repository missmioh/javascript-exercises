const repeatString = function(string, num) {

    if ( num < 0 ) {
        return "ERROR";
    }

    let repeatOutcome = "";
    for (let i = 0; i < num; i++) {
        repeatOutcome += string;
    }
    return repeatOutcome;
};

// Do not edit below this line
module.exports = repeatString;
