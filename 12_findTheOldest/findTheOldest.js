const findTheOldest = function(arr) {
    const getAge = person =>
        (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;

        let oldest = arr.sort((a, b) => getAge(b) - getAge(a));

        // original idea without missing dates

        // const oldest = arr.sort((a, b) => {
        // const personA = a.yearOfDeath - a.yearOfBirth;
        // const personB = b.yearOfDeath - b.yearOfBirth;
        // return personA > personB ? -1 : 1;
        // }
        return oldest[0];

    };


// Do not edit below this line
module.exports = findTheOldest;
