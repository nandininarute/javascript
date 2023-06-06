
 console.log("...............1 .Log Aarry element with Its Index.............");
 console.log(".............................................................");
const aarryNumbers=[1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

aarryNumbers.forEach( (element,index)=>{

    console.log("Aarry elements : ",element ," Index Values : ",index);
})

console.log("...............2. Find the positive numbers and Log on Console.............");
console.log(".............................................................");

let aarryPositive=[];
aarryNumbers.forEach( (element)=>{

    if (element>0) {
        aarryPositive.push(element);
       
    }
})
console.log(aarryPositive);

console.log("...............3. Find the negative numbers and Log on Console.............");
console.log(".............................................................");
let aarry=[];
aarryNumbers.forEach( (element) =>{
    if (element<0){
        aarry.push(element);
    }
})
console.log(aarry);
console.log("...............4. Find the even numbers and Log on the Console.............");
console.log(".............................................................");
const aarryEven=[];
aarryNumbers.forEach( (element) =>{
    if (element%2==0){
        aarryEven.push(element);
    }
})
console.log(aarryEven);
console.log("...............5. Find the sum of all the numbers and Log on the Console.............");
console.log(".............................................................");
let resultSum=0;
aarryNumbers.forEach( (element) =>{
 resultSum=resultSum + element;
})
console.log(resultSum);

console.log("...............6.Even index all the numbers and Log on the Console.............");
console.log(".............................................................");

let arrEvenInde=[];
aarryNumbers.forEach( (element,index) =>{
    if(index%2==0){
        arrEvenInde.push(element);
    }
   })
  console.log(arrEvenInde);