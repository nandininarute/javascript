
console.log(".................Function Display................");
function noArgNoreturOne()
{
   console.log("First Function with NO Argument No Return Type");
}
function noArgNoreturTwo()
{
    console.log("Second Function with NO Argument No Return Type");
}

noArgNoreturOne();
noArgNoreturTwo();

console.log("...................Function personalDetails.....................");

function personalDetails(firstValue,secondValue,collgeDetails)
{
    console.log("First Name: ",firstValue);
    console.log("Last Name: ",secondValue);
    console.log("collgeDetails: ",collgeDetails);

}
var firstName="Rama";
var lastName="Bhatiya";
var collegeDetails="SP Pune";

personalDetails(firstName,lastName,collegeDetails);

console.log("...................Function swapValuesDude.....................");

function swapValuesDude(nameVal1,nameVal2)
{
    console.log("...................Before swapValues.....................");
  console.log("name1: ",nameVal1 ,"name2: ",nameVal2);
  console.log("...................After swapValues.....................");
    var temp=nameVal1;
    nameVal1=nameVal2;
    nameVal2=temp;
    console.log("name1: ",nameVal1 ,"name2: ",nameVal2);
}
var name1="Virat";
var name2="Anushka";
swapValuesDude(name1,name2);
var name1=1000;
var name2=2000;
swapValuesDude(name1,name2);

console.log("...................Function addThreeValues.....................");
function addThreeValues(val1,val2,val3)
{
  var result=val1+val2+val3;
  console.log("Addition: ",result);
}
var No1=10.23;
var No2=600;
var No3=40;
addThreeValues(No1,No2,No3);
var hello="Hello";
var good="Good"
var morning="Morning"
addThreeValues(hello,good,morning);




