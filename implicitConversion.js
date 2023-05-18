//numeric string used with + gives string type

let result;
result='3'+2;
console.log(result);



result='3'+true;
console.log(result);


result='3'+undefined;
console.log(result);

result='3'+null;
console.log(result);

//if boolean is used,true is 1,false is 0

let result1;

result1='4'-true;
console.log(result1);

result1=4+true;
console.log(result1);

result1=4+false;
console.log(result1);

//numberic string used with -,/,* results number type

let result2;
result2='4'-'2';
console.log(result2);

result2='4'- 2;
console.log(result2);

result2='4'* 2;
console.log(result2);

result2='4'/ 2;
console.log(result2);

//Arithmetic operations with undefined with number,booleanor null gives NaN

result= 4 + undefined;
console.log(result);

result=4 - undefined;
console.log(result);

result= true + undefined;
console.log(result);

result= null + undefined;
console.log(result);


// Explicit conversion: Convert number strings and boolean values to numbers, in that case we can use Number()

//string to Number

var resultN=Number('324');
console.log(resultN);

var resultN=Number('324e-1');
console.log(resultN);

//boolean to Number

var resultN=Number(true);
console.log(resultN);

var resultN=Number(false);
console.log(resultN);

//  If a string is an invalid number ,the results will be NaN.

let results

results=Number('Hello');
console.log(results);

results=Number(undefined);
console.log(results);

results=Number(NaN);
console.log(results);

//Explict conersion : string to number using + operator





