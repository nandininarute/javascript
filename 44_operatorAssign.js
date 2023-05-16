var greaterNumber=function(num1 ,num2)
{
  var result=num1>=num2 ?`${num1} is greater`: num2+" is greater";
  console.log(`${result}`);
}

greaterNumber(10,-10);
greaterNumber(800,899);

console.log("...........***********..........");

var isEvenorOddNumver=function(valueOne)
{
    var result=valueOne%2==0?true:false;
    return result;

}
var result=isEvenorOddNumver(29);
var res=(result==true)?"29 is Even":"29 is Odd";

console.log(`${res}`);

var result1=isEvenorOddNumver(44);
var res1=(result1==true)?"44 is Even":"44 is Odd";

console.log(`${res1}`);

var result2=isEvenorOddNumver(0);
var res2=(result2==true)?"0 is Even":"0 is Odd";

console.log(`${res2}`);

var result3=isEvenorOddNumver(101);
var res3=(result3==true)?"101 is Even":"101 is Odd";

console.log(`${res3}`);

console.log("..........****Word has Even or Odd Length****..........");


 var wordLength=function(str){

    var len=str.length;
    var result= (len%2)==0 ? "EVEN" :"ODD";
    return result;
 }
 var returnValue=wordLength("JavaScript");

 console.log(`JavaScript has ${returnValue}`);

 var returnValue1=wordLength("Developer");

 console.log(`Developer has ${returnValue1}`);

 var returnValue2=wordLength("Google");

 console.log(`Google has ${returnValue2}`);