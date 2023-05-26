function countCharA(strValue){
    var count=0;
    for (let index = 0; index < strValue.length; index++) {
        
        if(strValue.charAt(index)=='A'||strValue.charAt(index)=='a')
        {
            count++;
        }
        
    }
    return count;
}
console.log("...............First String Total Number of chars A or a.............");

var countReturn=countCharA("I am learning JavaScript, The language of internet");
console.log(`I am learning JavaScript, The language of internet count are : ${countReturn}`);

console.log("................................................................");
console.log("...............Second String Total Number of chars A or a.............");
console.log("................................................................");
var countReturn=countCharA("My favourite movie is LAggAn");
console.log(`My favourite movie is LAggAn of count are: ${countReturn}`);
console.log("................................................................");