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
 * @returns arr in sorted in ascending
 */
const sortAscending = arr.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
  /** short hand arrow function
   * arr.sort((a,b) => a - b);
   */
});

/**
 * @returns arr in sorted in descending order
 */
const sortDescending = arr.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (b < a) {
    return -1;
  }
  /** short hand arrow function
   * arr.sort((a,b) => a + b);
   */
});

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

/**
 * Basic fetch request with explanation
 * @param {*} country
 * @returns data
 */
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      //.then handles the promise
      console.log(response);
      //we have to call JSON on the response which is a callback function that returns a promise
      return response.json();
    })
    .then(function (data) {
      //handles the promise from JSON
      //the data returned is usable do something with that data here
      console.log(data);
    });
};
getCountryData("usa");

// as an arrow function with error handling //
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(`${err} 💥💥💥`));
};

getCountryData("france");
