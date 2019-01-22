/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

function fibonacci(n) {
    let a=1, b = 0, temp;
    if(n===0){
        console.log(0);
    } else if(n<0){
        console.log("please enter a non negative number");
    }
    while(n>0){
        temp = a;
        a = a+b;
        b = temp;
        n--;
    }
    console.log(b);
}
   
 fibonacci(10);