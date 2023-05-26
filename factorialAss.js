
function factorialOfNum(num){
     if(num==null||num==undefined){
        console.log(`You have entered ${num} as invalid data`);
     }
    var fact=1;
    for (let index = num; index >=1; index--) {
        
        fact=fact*index;
    }
    return fact;
}

var resultOFFactorial=factorialOfNum(5);
console.log(` Factorial of given no is  :${resultOFFactorial}`);
var resultOFFactorial=factorialOfNum(3);
console.log(` Factorial of given  no is :${resultOFFactorial}`);
var resultOFFactorial=factorialOfNum(null);
console.log(` Factorial of given  no is :${resultOFFactorial}`);
var resultOFFactorial=factorialOfNum(8);
console.log(` Factorial of given  no is :${resultOFFactorial}`);
var resultOFFactorial=factorialOfNum(undefined);
console.log(` Factorial of given  no is :${resultOFFactorial}`);
var resultOFFactorial=factorialOfNum(9);
console.log(` Factorial of given  no is :${resultOFFactorial}`);
var resultOFFactorial=factorialOfNum(0);
console.log(` Factorial of given  no is :${resultOFFactorial}`);