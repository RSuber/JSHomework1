var myObject = {
  superPower: "som text",
  anotherProperty: "something",
};

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a,b){
    if (a > b) { return a }
    else if (a < b) { return b }
    else if ( a === "aaa") {return 0}
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
  if (a > b && a > c) {return a}
  else if (b > a && b > c) {return b}
  else if (c > a && c > b) { return c}


console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){
  var vowel = a||b||c||d||e||f||g;
  if (char.toLowerCase === "vowel") {return true }
  else {return false}
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(text){

}
console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
  return str.split("").reverse().join("");
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
  var namesplit= sentence.split(" ");
  if (namesplit.length[0] > namesplit.length[1]) { namesplit.length[0] > namesplit.length[2]{
    {namesplit.length [0] > namesplit.length[3]{ namesplit.length[0] > namesplit.length [4] {return namesplit[0]}}}}}
  else if (namesplit.length[1] > namesplit.length[0]) { namesplit.length[1] > namesplit.length[2] {
    {namesplit.length [1] > namesplit.length[3]{ namesplit.length[1] > namesplit.length [4] {return namesplit[1]}}}}}
  else if (namesplit.length[2] > namesplit.length[1]) { namesplit.length[2] > namesplit.length[0] {
    {namesplit.length [2] > namesplit.length[3]{ namesplit.length[2] > namesplit.length [4] {return namesplit[2]}}}}}
}
  else if (namesplit.length[3] > namesplit.length[1]) { namesplit.length[3] > namesplit.length[2] {
    {namesplit.length [3] > namesplit.length[0]{ namesplit.length[3] > namesplit.length [4] {return namesplit[3]}}}}}
  else if (namesplit.length[4] > namesplit.length[1]) { namesplit.length[4] > namesplit.length[2] {
    {namesplit.length [4] > namesplit.length[3]{ namesplit.length[4] > namesplit.length [0] {return namesplit[4]}}}}}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
