// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Print the random number
console.log("Random Number:", randomNumber);

// Perform some operations with the random number
const squaredNumber = randomNumber ** 2;
const roundedNumber = Math.round(randomNumber);
const absoluteNumber = Math.abs(randomNumber);

// Print the results
console.log("Squared Number:", squaredNumber);
console.log("Rounded Number:", roundedNumber);
console.log("Absolute Number:", absoluteNumber);

// Generate an array of random numbers
const randomArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));

// Print the array
console.log("Random Array:", randomArray);

// Sort the array in ascending order
randomArray.sort((a, b) => a - b);

// Print the sorted array
console.log("Sorted Array:", randomArray);