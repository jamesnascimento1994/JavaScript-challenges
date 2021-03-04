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

/* 
Challenge Eighteen: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Challenge Source: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/javascript
*/

// function descendingOrder(n) {
// 	return (
// 		parseFloat(n.toString().split('').sort().reverse().join('')) * Math.sign(n)
// 	);
// }

// // TESTS
// console.log(descendingOrder(42145));
// console.log(descendingOrder(145263));
// console.log(descendingOrder(123456789));

/* 
Challenge Nineteen: In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Challenge Source: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/javascript
*/

// function filter_list(l) {
// 	return l.filter((element) => typeof element === 'number');
// }

// console.log(filter_list([1, 2, 'a', 'b']));
// console.log(filter_list([1, 'a', 'b', 0, 15]));
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));

/* 
Challenge Twenty: Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.
Challenge Source: https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript
*/

// function getCount(str) {
// 	return str.replace(/[^aeiou]/gi, '').length;
// }

// // TESTS
// console.log(getCount("vowel"));
// console.log(getCount('cover'));
// console.log(getCount('cranium'));

/* 
Challenge Twenty-One: Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them. Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club. For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.
Challenge Source: https://www.codewars.com/kata/551dc350bf4e526099000ae5/javascript
*/

// function songDecoder(song) {
// 	// remove WUB from the string
// 	// filter out the empty strings
// 	// create spacing between words and join separate strings
// 	return (song = song.split('WUB').filter(Boolean).join(' '));
// }

// // TESTS
// console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));
// console.log(songDecoder("WUBFORGIVEWUBMEWUBFATHERWUB"));
// console.log(songDecoder("WUBJESSEWUBBADWUBBOYWUBJUSTWUBCOMEWUBLOOKWUBATWUBWHATWUBYOURWUBBROTHERWUBDIDWUB"));

/* 
Challenge Twenty-Two: Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Challenge Source: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript
*/

// function duplicateCount(text) {
// 	try {
// 		return text
// 			.toLowerCase()
// 			.split('')
// 			.sort()
// 			.join('')
// 			.match(/(.)\1+/g).length;
// 	} catch (e) {
// 		return 0;
// 	}
// }

// // TESTS
// console.log(duplicateCount('text'));
// console.log(duplicateCount('indivisibility'));
// console.log(duplicateCount('Woodpecker'));

/* 
Challenge Twenty-Three: In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.
NOTE: Extra spaces before or after the code have no meaning and should be ignored.
In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.
Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.
Challenge Source: https://www.codewars.com/kata/54b724efac3d5402db00065e/javascript
*/

// NOTE: MORSE_CODE on line 404 is exclusive to codewars. I'm not sure how to fix the error on VS code without having to create a giant array of every letter with its morse code.

// decodeMorse = function (morseCode) {
// 	// Split string of code into single words
// 	// (ex: '.... --- .-- .- .-. . -.-- --- ..-' becomes '.... --- .--', '.- .-. .', '-.-- --- ..-')
// 	morseCode = morseCode.split('  ');
// 	let result = '';
// 	// Iterate over each word and then split them into separate characters
// 	for (let i = 0; i < morseCode.length; i++) {
// 		morseCode[i] = morseCode[i].split(' ');
// 		// create a nested loop inside that iterates over every morse character
// 		// within the nested for loop
// 		// create a conditional that translates the code into their equivalent alphabetical character
// 		for (let a = 0; a < morseCode[i].length; a++) {
// 			if (morseCode[i][a] != '') {
// 				result += MORSE_CODE[morseCode[i][a]];
// 			}
// 		}
// 		// create a conditional that adds a space after each word
// 		if (i < morseCode.length - 1) {
// 			result += ' ';
// 		}
// 	}
// 	// finally, return the new string with the whitespaces removed
// 	return result.trim();
// };

// // TESTS
// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
// console.log(decodeMorse('-.-- -.-- --..'));

/* 
Challenge Twenty-Four: This code does not execute properly. Try to figure out why.
Challenge Source: https://www.codewars.com/kata/50654ddff44f800200000004/javascript
*/

// Starter Code
// function multiply(a, b) {
//     a * b;
// }

// Solution
// function multiply(a, b) {
//     return a * b;
// }

// // TESTS
// console.log(multiply(5,4));
// console.log(multiply(8,6));
// console.log(multiply(9, 7));

/* 
Challenge Twenty-Five: Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Challenge Source: https://www.codewars.com/kata/52fba66badcd10859f00097e/javascript
*/

// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, "");
// }

// // TESTS
// console.log(disemvowel("This website is for losers LOL"));
// console.log(disemvowel("Trolling on"));
// console.log(disemvowel("Now are you for real?"));