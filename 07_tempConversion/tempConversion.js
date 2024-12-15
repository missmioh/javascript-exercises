const convertToCelsius = function(num) {
  let convertedNumber = (num-32) * (5 / 9);
  let roundedNumber = Math.round(convertedNumber * 10) / 10;
  return roundedNumber;
};

const convertToFahrenheit = function(num) {
  let convertedNumber = num*(9 / 5) + 32;
  let roundedNumber = Math.round(convertedNumber * 10) / 10;
  return roundedNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
