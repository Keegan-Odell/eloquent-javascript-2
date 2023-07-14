//Minimum
//Chapter 2 introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.

const min = (a, b) => {
	if (a > b) {
		return b;
	} else {
		return a;
	}
};

//Recursion
//We've seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it's divisible by two. Here's another way to define whether a positive whole number is even or odd:
// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

let is_even = (n) => {
	let num = Math.abs(n);
	if (num === 0) {
		return true;
	} else if (num === 1) {
		return false;
	} else {
		if (n < 0) {
			return is_even(n + 2);
		} else {
			return is_even(n - 2);
		}
	}
};

//Bean Counting
//You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
//Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

const countChar = (str, char) => {
	let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count += 1
    }
  }
  return count
};
