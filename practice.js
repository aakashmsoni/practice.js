// // # Write a method that prints out every number from 1 to 100.
// function printEveryNumberToOneHundred() {
//   var index = 1;
//   while (index <= 101) {
//     console.log(index);
//     index += 1;
//   }
// }
// printEveryNumberToOneHundred();

// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"]
// var array = ["a", "b", "c", "d", "e", "f"];

// function selectEvenItems(strings) {
//   var index = 0;
//   var result = [];
//   for (let string of strings) {
//     if (index % 2 === 0) {
//       result.push(string);
//     }
//     index++;
//   }
//   return result;
// }
// console.log(selectEvenItems(array));

// Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.
// var array = [5, 4, 8, 1, 2];

// function maxNumber(numbers) {
//   let currentMax = numbers[0];
//   for (let number of numbers) {
//     if (number > currentMax) {
//       currentMax = number;
//     }
//   }
//   return currentMax;
// }
// console.log(maxNumber(array));

// Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// function factorial(number) {
//   let result = 1;
//   let currentNumber = number;
//   for (let i = 0; i < number; i++) {
//     result = result * currentNumber;
//     currentNumber = currentNumber - 1;
//   }
//   return result;
// }
// console.log(factorial(5));

// // Timeouts
// setTimeout(function () {
//   console.log("First task complete!");
// }, 2000);
// setTimeout(function () {
//   console.log("Second task complete!");
// }, 4000);
// setTimeout(function () {
//   console.log("Third task complete!");
// }, 6000);

// // Nested Timeouts
// setTimeout(function () {
//   console.log("First task complete!");
//   setTimeout(function () {
//     console.log("Second task complete!");
//     setTimeout(function () {
//       console.log("Third task complete!");
//     }, 2000);
//   }, 2000);
// }, 2000);

// Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby
// var array = [1, 2, 3, 4, 5];

// function descending(numbers) {
//   let result = [];
//   let index = numbers.length - 1;
//   numbers.length.times(() => {
//     result.push(numbers[index]);
//     index = index - 1;
//   });
//   return result;
// }

// console.log(descending(array));

// Write a function that takes in an array of numbers and returns its sum.
// function sumNumbers(array) {
//   let sum = 0;
//   var index = 0;
//   while (index < array.length) {
//     sum = sum + array[index];
//     index++;
//   }
//   return sum;
// }
// console.log(sumNumbers([1, 2, 3]));

// Write a function that takes in an array of strings and returns the smallest string.
// function smallestString(array) {
//   let currentSmallest = array[0];
//   for (let num of array) {
//     if (num < currentSmallest) {
//       currentSmallest = num;
//     }
//   }
//   return currentSmallest;
// }
// console.log(smallestString([50, 100, 120, 40]));
