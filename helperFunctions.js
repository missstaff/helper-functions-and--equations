/**
 * // function to generate a random number between two values
 * // uses Math.floor to handle negative numbers
 * @param {*} min
 * @param {*} max
 * @returns randomInt
 */
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
//console.log(randomInt(10, 20));

/**
 * Checks if a number is even
 * @param {*} n
 * @returns bool
 */
const isEven = (n) => n % 2 === 0;

/**
 * Checks if a number is odd
 * @param {*} n
 * @returns bool
 */
const isOdd = (n) => n % 3 === 0;

/**
 * @param {*} message
 * Display message on HTML element
 */
const displayMessage = (message) => {
  document.querySelector(".className").textContent = message;
};

/**
 * modular currency formatter
 * @param {*} value
 * @param {*} locale
 * @param {*} currency
 * @returns value
 */
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};
