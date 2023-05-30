function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  if(str === reversedStr){
    return true;
  }else{
    return false;
  }
}

// Test cases
console.log(isPalindrome('abba'));     // true
console.log(isPalindrome('racecar'));  // true
console.log(isPalindrome('a'));        // true
console.log(isPalindrome('robot'));    // false
console.log(isPalindrome('ab'));       // false
/* 
  Add your pseudocode here
  
  Create a function isPalindrome
  Receive 1 argument, a string
  Check if srting is a palindrome(if it reads the same forwords and backwords)
  if string is palindrome then write true
  If string is not palindrome then write false
  How can we check if string is a palindrome?
  Have to declared one Variable reversedStr
  write string as tar, and get reversed it rat
  reversedStr should have rat value
  split the string in an array of latters
  reverse the array
  and joining the reverse array in to string 
  if str is same as a reversedStr then return true and if it is not then return false

*/
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
