

const aarryNymbers=[20, 11, 40, 25, 23, 11, 9, 31, 60, 2,19];


console.log("..............1. add 10 in each element and log on console................");
console.log("...........................................................................");
const arrySum= aarryNymbers.map( (elemnt)=>{

    return  elemnt+10;
})

console.log(arrySum);
console.log("...........................................................................");
console.log("..............2. Square the each aarry element and log on console................");
console.log(".................................................................................");
const arrySquare= aarryNymbers.map( (elemnt)=>{

    return  elemnt * elemnt;
})

console.log(arrySquare);
console.log("...........................................................................");
console.log("..............3. add the index value of each element and log on console..........");
console.log(".................................................................................");

const arrywithIndex= aarryNymbers.map( (elemnt,index)=>{

    return elemnt +index;
})

console.log(arrywithIndex);

