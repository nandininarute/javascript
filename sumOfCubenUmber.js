console.log("...................Count the Total Number of Vowels Small and Capitals................");
console.log(".........................................................................");

function totalNumberOfVowels(givenstr) {
    
    var count=0;
    for(i=0;i<=givenstr.length;i++){
        
        if(givenstr.charAt(i)=='a'||givenstr.charAt(i)=='e'||givenstr.charAt(i)=='i'||givenstr.charAt(i)=='o'||givenstr.charAt(i)=='u'||givenstr.charAt(i)=='A'||givenstr.charAt(i)=='E'||givenstr.charAt(i)=='I'||givenstr.charAt(i)=='O'||givenstr.charAt(i)=='U')
{
        count++;
}

}
console.log(`Total number of Vowels small and capitals are :${count}`);

}

totalNumberOfVowels("I am Very good IT developer");

 function sumOfCube(num)
{
    var sum=0;
    for (let index = 1; index <=num; index++) {
     
       sum= sum+index*index*index;//2*2*2=8
    }
    console.log(`Sum of cube of number is: ${sum}`);
}

console.log("...............Sum of Cube Numbers...........");
sumOfCube(5);
console.log(".............................................");




var oddPositionedChars=function (givenString){
    var str="";
    for (let index = 0; index < givenString.length; index++) {
       var char=givenString.charAt(index);
        if (index%2!=0 && char!=" ") {
            
            str =str+char;
        }
       
    }
    console.log(`${str}`);
}
console.log("...........Odd Positioned Chars on Console........");
oddPositionedChars("Hard work always pays back");
console.log("..................................................");

oddPositionedChars("Soon I will be Angular IT Champ");
