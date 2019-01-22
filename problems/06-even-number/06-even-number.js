/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let isEven;
  someNum = someNum.toString(10).split("")
  let numArray = ['1','3','5','7','9'];
  isEven = !numArray.some(function(element){
    if(someNum[someNum.length-1] === element){
        return true;
    } 
  });
   console.log(isEven);
}
isEven(445432453);