
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log(".............1. List all the no greater than 50..............");
console.log("..............................................................");

const arryFilter = arrayNumbers.filter( (element)=>{
   return element>50;
})

console.log(arryFilter);

console.log(".............2. List all the even nos..............");
console.log("..............................................................");

const evenAarry = arrayNumbers.filter( (element)=>{
    return element%2==0;
})

console.log(evenAarry);

console.log(".............3. List all the Odd nos..............");
console.log("..............................................................");

const oddAarry = arrayNumbers.filter( (element)=>{
    return element%2!=0;
})

console.log(oddAarry);

console.log(".............4. List all the nos multiple of 5..............");
console.log("..............................................................");

const multiFiveAarry = arrayNumbers.filter( (element)=>{
    return element%5==0;
})

console.log(multiFiveAarry);

console.log(".............5. List all the nos between 20 and 50..............");
console.log("..............................................................");

const nosRangeAarry = arrayNumbers.filter( (element)=>{
    return element>=20 &&  element<=50;
})

console.log(nosRangeAarry);