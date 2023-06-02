
var fabbonocci=function(){
var firNum=0,secNum=1;
console.log(`Fibonacci series are =>`);
console.log(firNum);
console.log(secNum);

for (let index = 0; index <10; index++) {
    var temp=firNum+secNum;
   console.log(`${temp}`);
  firNum=secNum;
  secNum=temp;
    
}
}

fabbonocci();