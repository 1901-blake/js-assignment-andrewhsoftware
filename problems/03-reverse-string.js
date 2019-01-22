/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

function reverseStr(someStr) {
  temp = someStr.split('');
  let reversedStr = '';
  for(let i = temp.length-1; i>=0; i--){
      reversedStr += temp[i];
  }
  return reversedStr;
}
console.log(reverseStr('hello'));
module.exports = reverseStr;