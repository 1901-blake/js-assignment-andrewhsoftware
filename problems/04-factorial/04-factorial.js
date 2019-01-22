/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  if(sumNum < 0){
      return 1;
  } else if (sumNum <2){
      return sumNum;
  }
  
      return factorial(sumNum-1)*sumNum;
  }
console.log(factorial(10));