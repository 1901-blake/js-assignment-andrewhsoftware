/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
const reverseStr = require('../03-reverse-string/03-reverse-string');
function isPalindrome(someStr) {
  if(someStr === reverseStr(someStr)){
      return true;
  } else{
      return false;
  }
}
console.log(isPalindrome("hello"));
console.log(isPalindrome("hannah"));