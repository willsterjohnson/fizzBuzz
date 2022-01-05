import FizzBuzz, { TBuzzes } from "./fizzBuzz.js";

// Interesting lines to look at:
// ln 15: Change the FizzBuzz phrases
// ln 36: Change the FizzBuzz limit
// ln 41: Change the Nth term to be found

/**
 * Modify this array to change the phrases said at different stages of FizzBuzz.
 * The `FizzBuzz` class will respect the index order of this array when compounding phrases, eg;
 * `[[3, "Fizz"], [5, "Buzz"]]` produces "FizzBuzz" for 15
 * `[[5, "Buzz"], [3, "Fizz"]]` produces "BuzzFizz" for 15
 * `[[3, "Fizz"], [7, "Buzz"]]` produces "Fizz" for 15
 */
let buzzes: TBuzzes = [
  [3, "Fizz"],
  [5, "Buzz"],
  // [7, "Bang"],
  // [11, "Bong"],
  // [13, "Fang"],
  // [17, "Fong"],
  // [19, "Fung"],
  // [23, "Bung"],
  // [29, "Fuzz"],
  // [31, "Bizz"],
  // [37, "Fazz"],
  // [41, "Bazz"],
  // [43, "Fozz"],
  // [47, "Bozz"],
];

/**
 * Change the limit to change the number of terms of FizzBuzz shown.
 * Set to 0 to disable.
 */
let limit = 15;
/**
 * Change the nth term of FizzBuzz shown.
 * Set to 0 to disable.
 */
let n = 500;

// this is where stuff happens
limit && console.log(`\nFirst ${limit} terms of FizzBuzz;`);
// FizzBuzz.sequence(limit, buzzes) - Shows the first `limit` terms of FizzBuzz using the `buzzes` array for the phrases
limit && FizzBuzz.sequence(limit, buzzes).forEach((n, i) => console.log(i, ":", n));
// FizzBuzz.nth(n, buzzes) - Shows the `n`th term of FizzBuzz using the `buzzes` array for the phrases
n && console.log("\nNth term of FizzBuzz;\n", n, ":", FizzBuzz.nth(n, buzzes));
