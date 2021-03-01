/*
Challenge One: Create a function that takes two numbers as arguments and return their sum
Challenge Source: https://edabit.com/challenge/3LpBLgNRyaHMvNb4j
*/

// function addition(a, b) {
//     return a + b;
// }
// // TESTS
// console.log(addition(3, 5));
// console.log(addition(-4, -2));
// console.log(addition(56, 34));

/* 
Challenge Two: create a function that takes a number, increments it by +1, and returns the result
Challenge Source: https://edabit.com/challenge/NAQhEoxbofPidLxm9
*/

// function addition(num) {
//     num = num + 1;
//     return num;
// }

// // TESTS
// console.log(addition(32));
// console.log(addition(6));
// console.log(addition(454));

/* 
Challenge Three: Write 3 functions to calculate the bitwise AND, bitwise OR, and bitwise XOR of two numbers.
Challenge Source: https://edabit.com/challenge/vvuAkYEAArrZvmp6X
*/

// function bitwiseAND(n1, n2) {
//     return n1 & n2;
// }
// function bitwiseOR(n1, n2) {
//     return n1 | n2;
// }
// function bitwiseXOR(n1, n2) {
//     return n1 ^ n2;
// }

// // TESTS
// console.log(bitwiseAND(7, 12));
// console.log(bitwiseOR(7, 12));
// console.log(bitwiseXOR(7, 12));

/*
Challenge Four: Write a function that takes the base and height of a triangle and return its area.
Challenge Source: https://edabit.com/challenge/3CaszbdZYGN4otQD8
*/

// function triArea(base, height) {
//     return (base * height) / 2;
// }

// // TESTS
// console.log(triArea(5, 4));
// console.log(triArea(6, 7));
// console.log(triArea(3, 2));

/*
Challenge Five: Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
Challenge Source: https://edabit.com/challenge/nhXofMMyrowMyr9Nv
*/

// function nextEdge(side1, side2) {
//     let side3 = (side1 + side2) - 1;
//     return side3;
// }

// // TESTS
// console.log(nextEdge(10, 6));
// console.log(nextEdge(8, 9));
// console.log(nextEdge(3,7));

/*
Challenge Six: Create a function that takes an array containing only numbers and return the first element.
Challenge Source: https://edabit.com/challenge/QaApgtePE6QrCZ64o
*/

// function getFirstValue(arr) {
//     return arr[0];
// }

// // TESTS
// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]));
// console.log(getFirstValue([-500, 0, 50]));

/* 
Challenge Seven: Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
Challenge Source: https://edabit.com/challenge/PTiLYyb4A69KZtBCg
*/

// function lessThanOrEqualToZero(num) {
//     if (num <= 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // TESTS
// console.log(lessThanOrEqualToZero(5));
// console.log(lessThanOrEqualToZero(0));
// console.log(lessThanOrEqualToZero(-2));

/*
Challenge Eight: Write a function that converts hours into seconds.
Challenge Source: https://edabit.com/challenge/6AnQqiEjkJdZrWhPS
*/

// function howManySeconds(hours) {
//     let seconds = hours * 3600;
//     return seconds;
// }

// // TESTS
// console.log(howManySeconds(2));
// console.log(howManySeconds(10));
// console.log(howManySeconds(24));

/* 
Challenge Nine: Write a function that takes an integer minutes and converts it to seconds.
Challenge Source: https://edabit.com/challenge/8q54MKnRrm89pSLmW
*/

// function convert(minutes) {
//     return minutes * 60;
// }

// // TESTS
// console.log(convert(5));
// console.log(convert(3));
// console.log(convert(2));