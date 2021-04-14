//while loop
var num = 3;
while ( num > 0) {
    console.log("the number " + num + " is greater than 0");
    num--;
}

var whileArray = [];
var l = 0;
while(l < 5) {
    whileArray.push(l);
    l++;
}
console.log(whileArray)



/* you are to write a program that keeps guessing the number a user inputted between 1 and 10 
(1 and 10 inclusive). it is expected that the program continues to print the guessed number and if
it is not the user inputted number, it should also print unable to guess number*/
let guessedNumber = Math.floor(Math.random() * 10) + 1;    // learn about math function
let userInput = 6;
console.log(guessedNumber);
while  (guessedNumber != userInput ) {
    console.log("unable to guess the number");
    guessedNumber = Math.floor(Math.random() * 10) + 1;
    console.log(guessedNumber);
}


//for loop
for (let i = 0; i < 5; i++){ // note: i++ is the same as (i = i+1)
    console.log("hello, " + i) 
    /** to get hello starting from one,you can make your i 1 and i<6 
     * or change it in console.log to (i+1) instead of + i and note i+1 will be in ()
    */
}
var forArray = [];
for (var m = 1; m <=5; m++) {
    forArray.push(m)
}
console.log(forArray)
// iterate odd number with a for loop
var forOddArray = [];
for ( var n = 1; n < 10; n += 2) { // for even number, the intialization will be 2
    forOddArray.push(n);
}
console.log(forOddArray)

// Iterate Through an Array with a For Loop
var forArr = [10, 9, 8, 7, 6];
for (var o = 0; o < forArr.length; o++) {
console.log(forArr[o]);
}

var mytArr = [ 2, 3, 4, 5, 6];
var totalArr = 0;
for (var i = 0; i < mytArr.length; i++) {
totalArr += mytArr[i]
}
console.log(totalArr)


//loops with if
for (let a = 0; a < 10; a++){
    if (a===5){
        console.log("this is the sixth loop")
    }
    console.log("hello")
}

// loop statement with continue
for (let b = 0; b < 10; b++){
    if (b===5){
        console.log("this is the sixth loop")
        continue
    }
    console.log("hello world")
}


// looping through array
var myArray = [9,5,6,7];
for (let c = 0; c < myArray.length; c++){
    var currentValue = myArray[c]; 
    console.log(currentValue)
    // note we are only declaring currentValue as var bcos we might want to use it again and that is the best
    // practice, you will get your result even using currentValue = myArray[c]; 
}
/**dis is use to access every value in the array instead of using console.log(0),console.log(1),console.log(2),
 * console.log(3) to access all four, this method will print all four value at once.
 * you can also get for multi dimensional array which is done below
*/


// looping through multi-dimensional array
var multiArray = [[1,2,3,4], ['a','b','c','d'], ["w","x","y","z"]];
for (let d=0; d < multiArray.length; d++){
    var innerArray = multiArray[d];
    for (let e = 0; e < innerArray.length; e++){
        var eachValue = innerArray[e]
        console.log(eachValue)
    }
}
//or
for (var p=0; p<multiArray.length; p++){
    for (var q=0; q<multiArray[p].length; q++)
    console.log(multiArray[p][q])
}


/** you are given a score of 7 students. their scores have been stored in an array, find the highest score,
 * the lowest score and find if a particular score exist in an array
 */
let scores =  [30, 25, 94, 70, 90, 49, 66];
// to find highest score 
var maxVal = -Number.MAX_VALUE;
for(let f = 0; f < scores.length; f++) {
    var item = scores[f];
    if (item > maxVal){
        maxVal = item;
    }
}
console.log("The maximum score is: " + maxVal);

// to find the lowest score
var minVal = Number.MAX_VALUE;
for(let g = 0; g < scores.length; g++) {
    var item2 = scores[g];
    if (item2 < minVal){
        minVal = item2;
    }
}
console.log("The minimum score is: " + minVal);

//find if a particular score exist 
var findVal;
var valueFound = false;
// findVal = 66;
for(let h=0; h<scores.length; h++){
    var item3 = scores[h];
    if (item3 === findVal){
        valueFound = true;
    }
}

console.log(valueFound);
// note: it will always return false because we didnt asign a value to findVal and since its undefined it will
//return false, so if you uncomment the findval above, you get your result and you can also change the number.

// or it is done like dis
var scoreExist = scores.includes(30);
console.log(scoreExist)


// to check if something is an array
var fruits = ['oranges', 'apple', 'banana'];
console.log(Array.isArray(fruits));
// it will return true 
// to get the index of banana 
console.log(fruits.indexOf("banana")); // you get 2



//all if statement (if, if else, if else if...else)
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
    return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

function testEqual(val2) {
    if (val2 == 12) {
    return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));

function testNotEqual(val3) {
    if (val3 != 99) { //(!=) is the opposite of the equality operator, also strict inequality operator (!==)
    return "Not Equal";
    } else {
    return "Equal";
    }
}
console.log(testNotEqual(10));

function testElseIf(val4) {
    if (val4 > 10) {
    return "Greater than 10";
    } else if (val4 < 5) {
    return "lesser than 5";
    } else {
    return "Between 5 and 10";
    }
}
console.log(testElseIf(7));


function orAnd(val5, val6){
    if (val5 > 10 && val6 < 20) { // and operator both left and right needs to be true 
        return 'first value greater than 10 and second value is less than 20'
    }
    else if (val5 > 10 || val6 < 20) { // or operator only one needs to be true
        return "either first value is greater than 10 or second value is less than 20"
    }
    else {
        return "first value is less than 10 and second value is greater than 20"
    }
}
console.log(orAnd(40,8))
console.log(orAnd(15,6))
console.log(orAnd(1,0))
console.log(orAnd(222,8))
console.log(orAnd(7,333))
console.log(orAnd(22,22))
console.log(orAnd(3,19))


// Multiple Conditional (Ternary) Operators
function ConditionalOperator(val8){
    return val8 <= 0 ? " number is less than 0": 
    val8 > 0 && val8 <= 10 ? "number is between 0 and 10":
    "number is more than 10"
}
console.log(ConditionalOperator(10))


// switch
function sequentialSizes(val7) {
    switch(val7) {
    case 1:
    case 2:
    case 3:
    return "Low";
    break;
    case 4:
    case 5:
    case 6:
    return "Mid";
    break;
    case 7:
    case 8:
    case 9:
    return "High";
    break;
    }
}
console.log(sequentialSizes(8));

/**In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative 
 number of high and low cards remaining in the deck. This is called Card Counting. Having more high cards 
 remaining in the deck favors the player. Each card is assigned a value according to the table below. When the 
 count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
 Count Change Cards
 +1 2, 3, 4, 5, 6
 0 7, 8, 9
 -1 10, 'J', 'Q', 'K', 'A'
 You will write a card counting function. It will receive a card parameter, which can be a number or a string,
 and increment or decrement the global count variable according to the card's value (see table). The function 
 will then return a string with the current count and the string Bet if the count is positive, or Hold if the 
 count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a 
 single space.
 Example Output
 -3 Hold
 5 Bet
 Hint: Do NOT reset count to 0 when value is 7, 8, or 9... Do NOT return an array... Do NOT include quotes 
 (single or double) in the output. 
*/
var count = 0;
function cc(card) {
switch (card) {
case 2:
case 3:
case 4:
case 5:
case 6:
count++;
break;
case 10:
case "J":
case "Q":
case "K":
case "A":
count--;
break;
}
if (count > 0) {
return count + " Bet";
} else {
return count + " Hold";
}
}
console.log(cc(2));



//function
function sumFunc(a, b){
    var result = a + b;
    console.log("the sum is: " + result)
}
sumFunc(10, 20);

// understanding return statement
function multiplyfunc(c, d){
    return c * d;
}
var answer = multiplyfunc(5, 2)
console.log(answer);


// function as a value
function circleArea(radius){
    var result = 3.14 * (radius ** 2);
    return result;
}
console.log(circleArea(10));


// global variable
var gVar = 'hello';
console.log(gVar);
function globalVariable(){
    gVar = 'world';
    console.log(gVar);
}
globalVariable();
console.log(gVar); //  if we had declare the gvar in the function to var gVar = 'world', this will return 
//hello instead of world because local variable are not recognize outside the function but because we only 
//change the gvar in the function, that is why it will still bring world because it was declared outside of 
// the function so it is not a local variable.


// local variable
function localVariable(){
   var lVal = "hi";
    console.log(lVal);
}
localVariable();
// console.log(lVal) 
//this wont run because it is a local var and it is outside the function, it will bring lVal not defined


/*Understanding Undefined Value returned from a Function
A function can include the return statement but it does not have to. In the case that the function doesn't 
have a return statement, when you call it, the function processes the inner code but the returned value is 
undefined.*/
var sum = 2;
function addition(num) {
sum = sum + num;
}
addition(5);
console.log(sum) // this will return 7 but if you console.log(addition(5)), it will bring undefined bcoz
//nothing is returned in the function
var sum2 = 0;
function addFive() {
sum2 = sum2 + 5;
}
addFive();//note: you hv 2 call the function first b4 u console.log(sum2) unless it return intial value of sum2
console.log(sum2)


/*Write a function nextInLine which takes an array (arr) and a number (item) as arguments. Add the number to 
the end of the array, then remove the first element of the array. The nextInLine function should then return 
the element that was removed. */
var testArr = [1,2,3,4,5];
function nextInLine(arr, item) {
    arr.push(item);
    var removed = arr.shift();
    return removed;
}
console.log(nextInLine(testArr, 6)) // this will return 1

// console.log(testArr); this will now return [ 2, 3, 4, 5, 6 ] bcos of what we did in the function.




// string
// new way of concatentation
const name = 'jiid';
let age = 20
console.log('my name is ' + name + ' and I am ' + age);
// you can use template string
console.log(`my name is ${name} and I am ${age}`);


//using back thick,we have been using '' and "" and it can do alot like run expression, pass a variable in it
var myAge = `i am just ${10*2} years old`; 
console.log(myAge);
// passing a variable
var nickName = "jiid";
var FullName = `my full name is oladejo idris and my nickname is ${nickName}`;
console.log(FullName);


/** given two words, write a program to check if those words are anagrams of each other.
 * A word is said to be an anagram of another word when it can be formed by rearranging the letters of the 
 * other word using each letter just once e.g [fried and fired], [peach and cheap].
*/
function isAnagram(string1, string2){
    var strLow1 = string1.toLowerCase(); //you change the parameter to lowercase
    var strLow2 = string2.toLowerCase();

//the next thing is to sort it alphabetically but you can't do it to string,you can only sort an array,so you
//change it by spliting to an array before sorting it and after sorting you change it back to become a string.

    var strArray1 = strLow1.split(""); //when you split, you get an array of the string character
    var strArray2 = strLow2.split("");

    var sortedArray1 = strArray1.sort(); // the array as been sorted alphabetically
    var sortedArray2 = strArray2.sort();

    var sortedstring1 = sortedArray1.join(""); //it is use to convert an array to string
    var sortedstring2 = sortedArray2.join("");

    return sortedstring1 == sortedstring2;
}
var myanswer = isAnagram("Listen", "Silent");
console.log(myanswer)

// solving with fewer lines of code
function isAnagram2(string3, string4){
    var soretedstring3 = string3.toLowerCase().split('').sort().join('');
    var soretedstring4 = string4.toLowerCase().split('').sort().join('');

    return soretedstring3 == soretedstring4;
}
var mySecondAnswer = isAnagram2('love', 'volie' )
console.log(mySecondAnswer)

// object
const person = {
    firstName: 'jide',
    lastName: 'jiid',
    age: 20,
    children: 0,
    wife: 1,
    isMale: true,
    hobbies: ['football', 'gaming', 'internet'],
    address: {
        houseNumber: 31,
        street: 'ifelodun st',
        city: 'agege',
        state: 'lagos state'
    }
}
// to access the any of the object you do it in the following ways
console.log(person.firstName);
console.log(person['lastName'])
// if you wanna access the array
console.log(person.hobbies[1])
// to access a data in the nexted object i.e address
console.log(person.address.city)
// you can also access two or three things only using comma 
console.log(person.firstName, person.lastName, person.hobbies)
// to push another info into the person, it is done like dis and you can also change any properties like that
// and also array 
person.email = "jidejiid@yahoo.com"; //push
person['car owner'] = true; //push
person.age = 30; //change
person.children = person.children + 1; //or person['children'] = person['children'] + 1; (change)
person['wife'] = 2 ; //change
person.hobbies[2] = "swimming";  // change array
person.hobbies.push('running'); //  push into array                                                     
console.log(person)


// object having a function note: when the value is a function its called method. i.e object method
var studentInfo = {
    studentName: 'john doe',
    isAdmitted: true,
    level: "400l",
    favouriteQuote: function(myQuote){
        console.log('enjoy while you can');
        console.log(`the student said, ${myQuote}`);
    }
}
// to access the method, you write the objecName.methodName()
studentInfo.favouriteQuote("life is short");
// to modify the function i.e add or change
studentInfo.greeting = function(){
    console.log('the student said good morning')
}
studentInfo.greeting();
// now to change the greeting 
studentInfo.greeting = function(thegreeting, time) {
    console.log('the student said, ' + thegreeting + ' ' + time)
}
studentInfo.greeting("hi", "this morning")

// accessing object properties with  variable
var myTeam = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
    25: "lampas",
    felix: 30,
};
var playerNumber = 16;
var bestPlayer = myTeam[playerNumber];
console.log(bestPlayer)
// delete properties from object
delete myTeam[25] 
delete myTeam.felix
// to check if that property name exist 
console.log(myTeam.hasOwnProperty(45)); // return false
console.log(myTeam)

//write a function checkObj2 to test if an object passed to the function (obj) contains a specific property 
//(checkProp). If the property is found, return that property's value. If not, return "Not Found".
var myObj2 = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj2(checkProp2) {
    if (myObj2.hasOwnProperty(checkProp2)){
    return myObj2[checkProp2];
    } else {
    return "Not Found";
    }
}
console.log(checkObj2("pet"));


var someObj1 = {
    propName1: "John1"
};
function propPrefix1() {
    var s1 = "propName1";
    return s1 ;
}
var someProp1 = propPrefix1();
console.log(someObj1[someProp1]);
// or 
var someObj2 = {
    propName2: "John2"
};
function propPrefix2(str) {
    var s2 = "prop";
    return s2 + str;
}
var someProp2 = propPrefix2("Name2");
console.log(someObj2[someProp2]);

// looping through object // note: it wont work for function i.e you wont get the result for functions
// this will print all the property of person without the property name instead of doing console.log(age) e.t.c
for (let e in person){
    console.log(person[e])
}
var alpha = { 1:"Z", 2:"Y", 3:"X", 4:"W", 24:"C", 25:"B", 26:"A"};
var value = 2;
console.log(alpha[value])
