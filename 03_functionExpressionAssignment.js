function square(squVal){
var result= squVal*squVal;
return result
}
var sqrResult=square(5);
var sqrResult1=square(6);
var sqrResult2=square(25);
var sqrResult3=square(100);
console.log("1. Square of given nos :5,6,25,100: ",sqrResult,sqrResult1,sqrResult2,sqrResult3)

console.log("2. Check and log TypeOf function is: ",typeof(square));

var areRectangle=function(length,width)
{
    var result=length*width;
    return `area Rectangle is: ${result}`;
}
var result = areRectangle(499,917);
console.log("3.Write FE getting area of : ",result);

var swapValues=function(valFirst,ValScond){

    console.log("4. Swap Before Values",valFirst,ValScond);
    var temp=valFirst;
    valFirst=ValScond;
    ValScond=temp;

    console.log("4. Swap Before Values",valFirst,ValScond);
    
}
swapValues("Virat","Anushka");
swapValues(1000,2000);


var funString=function(valString){

    var totalChar=valString.split;
    return `area Rectangle is: ${totalChar}`;

    
   

};


var givenString="JS the most popular language of internet";

console.log("5.Total characterpresent ",givenString);
var indexofSix=givenString.charAt(6);
console.log("6.Find character at index 6 ",indexofSix);
var indexofElev=givenString.charAt(11);
console.log("7.Find character at index 11 ",indexofElev);
var lengthOfString=givenString.length;

console.log("8.Last character using Length Property:",givenString.charAt(lengthOfString-1));
console.log("9.Very First character of STring is:",givenString.charAt(0));

var totalWords=givenString.split(" ");

console.log("10.Total Length of words:",totalWords.length)
var square=totalWords.length*totalWords.length;

console.log("10.",`Count the total number of words available in the string after :  ${square} `);
