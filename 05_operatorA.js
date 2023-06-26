var squareOfWordLength=function(ValoneString){

    var result =ValoneString.length;
    console.log(`Length is ${result}`);

    var squareRetur=result*result;
      return `Length Square is: ${squareRetur}`

    
  
  }
  
  var returnResult=squareOfWordLength("JavaScript");

  console.log("3.1 JavaScript result: ",returnResult);

  var retrunResult1=squareOfWordLength("Google Chrome");
  console.log("3.2 Google Chrome:",retrunResult1)

  var retrunResult2=squareOfWordLength("Developer Smart");
  console.log("3.3 Developer Smart:",retrunResult2)
 

  console.log("...............*******...........");
 

  var noReturnNoArg=function()
    {

        var str="I am Angular Developer";
        var lengthStr=str.length;

        console.log(`Length of string: ${lengthStr}`);
        var legthSpli=str.split(" ");

        var noOfWords=legthSpli.length;

        console.log(`Words availble in the string: ${legthSpli} lenth od words ${noOfWords} ` );

        var divideResult=lengthStr/noOfWords;
        console.log(` string length and Divide total number of words availble in the string: ${divideResult}  ` );
        
        var multipleResult=lengthStr*noOfWords;

        console.log(`string length and multiple total number of words availble in the string: ${multipleResult}  ` );

    }

    noReturnNoArg();
  
  
