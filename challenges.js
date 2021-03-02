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

/* 
Challenge Ten: Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
Challenge Source: https://edabit.com/challenge/ks3vMrqdnW3CQ3F4i
*/

// Starter Code
// function squared(b) {
//     return a * a;
// }

// Solution
// function squared(b) {
//     return b = b * b;
// }

// TESTS
// console.log(squared(5));
// console.log(squared(9));
// console.log(squared(100));

/*
Challenge Eleven: Create a function that takes length and width and finds the perimeter of a rectangle.
Challenge Source: https://edabit.com/challenge/XnJ24rWW7iJkNrtsh
*/

// function findPerimeter(length, width) {
//     return (length + width) * 2;
// }

// // TESTS
// console.log(findPerimeter(6, 7));
// console.log(findPerimeter(20, 10));
// console.log(findPerimeter(2, 9));

/* 
Challenge Twelve: Create a function that takes the age and return the age in days.
Challenge Source: https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw
*/

// function calcAge(age) {
//     return age * 365;
// }

// // TESTS
// console.log(calcAge(65));
// console.log(calcAge(0));
// console.log(calcAge(20));

/*
Challenge Thirteen: Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
Challenge Source: https://edabit.com/challenge/j7yQbF3J3rToHsDBP
*/

// Starter Code
// function cubes(a) {
//     retunr a ** 3;
// }

// Solution
// function cubes(a) {
//     return a ** 3;
// }

// // TESTS
// console.log(cubes(3));
// console.log(cubes(5));
// console.log(cubes(10));

/*
Challenge Fourteen: Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.
Challenge Source: https://edabit.com/challenge/7KbZc8QvzqrJPaE6Q 
*/

// const REGEXP = /blue flag |red flag/g;

// // TESTS
// console.log('red flag blue flag'.match(REGEXP));
// console.log('yellow flag red flag blue flag green flag'.match(REGEXP));
// console.log(
// 	'pink flag red flag black flag blue flag green flag red flag '.match(REGEXP)
// );

/* 
Challenge Fifteen: Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String). Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
Challenge Source: https://www.codewars.com/kata/57e3f79c9cb119374600046b/javascript
*/

// function hello(name) {
//     if (name === 'johN') {
//         return 'Hello, John'
//     } else if (name === 'alice') {
//         return 'Hello, Alice'
//     } else if (name === '') {
//         return 'Hello World'
//     } else {
//         return 'Hello World'
//     }
// }

// // TESTS
// console.log(hello("johN"));
// console.log(hello('alice'));
// console.log(hello());
// console.log(hello(''));

/* 
Challenge Sixteen: When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April. Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch. Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
Challenge Source: https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/javascript
*/

// function sakuraFall(v) {
// 	// equate the speed to the velocity
// 	let speed = v;
// 	// distance fell = falling speed * how many seconds it takes for pedal to reach ground
// 	// In the sample tests 5 * 80, 10 * 4, = 400
// 	let distanceFell = 400;
// 	// write an if statement to check if the initial velocity is positive or negative
// 	// we want the return value to be 0 if the initial velocity is negative
// 	if (speed > 0) {
// 		let howManySeconds = distanceFell / speed;
// 		return howManySeconds;
// 	} else {
// 		return 0;
// 	}
// }

// // TESTS
// console.log(sakuraFall(5));
// console.log(sakuraFall(8));
// console.log(sakuraFall(-7));

/* 
Challenge Seventeen: Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. Your task is to write a function maskify, which changes all but the last four characters into '#'.
Challenge Source: https://www.codewars.com/kata/5412509bd436bd33920011bc/javascript
*/

// function maskify(cc) {
//   if (cc.length > 4) {
//     let reversedCC = reverse(cc);
//     let newString = '';
//     for (let i = 0; i < reversedCC.length; i++) {
//       if (i < 4) {
//         newString += reversedCC[i];
//       } else {
//         newString += '#';
//       }
//     }
//     return reverse(newString);
//   } else {
//     return cc;
//   }
//   }
//   function reverse(str) {
//     return str.split("").reverse().join("");
// }

// // TESTS
// console.log(maskify("Skippy"));
// console.log(maskify('Nananananananana Batman!'));