/**
 * Introduction to Computing: A Net-centric Approach

=== EECS Fall 2024 ===
Lassonde School of Engineering

=== Module Description ===
In this module we write some simple functions in that illustrate
basic logical operations and the use of selection statements (if
and switch).
**/


/**
 * An Example function!
 * Return a string that says hello.
 * @return {string} the string 'hello'.
 */
function hello () {
    return 'hello';
}

/**
 * Test to see if a, b and c are all equal in value
 * @return {boolean} true if all equal, else false
 */
function allEqual (a, b, c) {
    /* write your code here! */
}

/**
 * Returns a number between 1 and 6, representing
 * the roll of a loaded die.
 * 
 * The probability of rolling a 1 is 1/10.
 * The probability of rolling a 2 is 1/10.
 * The probability of rolling a 3 is 1/10.
 * The probability of rolling a 4 is 1/10.
 * The probability of rolling a 5 is 1/10.
 * The probability of rolling a 6 is 1/2.
 * 
 * @return {number} a number between 1 and 6
 */
function rollLoadedDie () {
    /* write your code here! */
}

/**
 * Returns a string indicating the most likely
 * animal, given the inputs.
 * 
 * Returns the string "It's a cat" if hasFourLegs and climbsTrees are both true.
 * Returns the string "It's a snake" if hasFourLegs is not true but climbsTrees is.
 * Returns the string "It's a dog" if hasFourLegs is true but climbsTrees is not.
 * Returns the string "It's a fish" if hasFourLegs and climbsTrees are both false.
 * 
 * @param {boolean} hasFourLegs - true if has four legs, else false
 * @param {boolean} climbsTrees - true if climbs rrees, else false
 * @return {string} a string with a guess as to the animal
 */
function guessAnimal (hasFourLegs,climbsTrees) {
    /* write your code here! */

}

/**
 * Returns a string indicating the name of the month,
 * given a number between 1 and 12
 * 
 * Returns the string "January" the input is 1,
 * Returns the string "February" the input is 2,
 * and so on.
 * Returns the string "Error" if the input is not a number or not in 
 * the range between 1 and 12.
 * 
 * @param {number} num - the number of the month
 * @return {string} a string with the name of the month
 */
function month (num) {
    /* write your code here! */
}

/**
 * Returns a boolean indicating if the input year is a leap year.
 * 
 * All leap years are divisible by 4, however
 * No leap years are divisible by 100 unless they are
 * also divisible by 400.
 * 
 * @param {number} year - the year to test
 * @return {boolean} true, if is leap year, else false
 */
function isLeapYear (year) {
    /* write your code here! */

}

/**
 * Returns a boolean indicating if the input character is a vowel
 * 
 * @param {string} character - a character to test
 * @return {boolean} true, if input is a vowel (upper or lower case); else false.
 */
function isVowel (character) {
    /* write your code here! */
}

/**
 * DO NOT CHANGE THE LINE THAT IS BELOW.
 * To run at the command line (i.e. to run node "lab3.js") comment out this line
 * To run the test file (i.e. to run "vitest run lab3") this line must be included
 */
export {  hello, guessAnimal, month, isVowel, isLeapYear, allEqual, rollLoadedDie }
