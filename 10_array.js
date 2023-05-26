



var arrayOfRollNumbers = [67, 56, 78, 90, 60,40];

console.log(`Type of array: ${typeof arrayOfRollNumbers}`);

 

let lengthOfArray = arrayOfRollNumbers.length;

console.log(`Length of array is : ${lengthOfArray}`);

 

// Accessing array element

const zerothIndexValue = arrayOfRollNumbers[0];

console.log(`Zeroth index value: ${zerothIndexValue}`);

// Accessing array element 90

const  thirdthIndexValue=arrayOfRollNumbers[3];

console.log(`Thirdth index value: ${thirdthIndexValue}`);

//accessing last element

var arrayLength=arrayOfRollNumbers.length;
const lastthIndexValue=arrayOfRollNumbers[arrayLength-1];
console.log(`Lat element of index: ${lastthIndexValue}`);

//Adding element inthe last position
arrayOfRollNumbers.push(80);
console.log(arrayOfRollNumbers);

//Add element fist postion by using unshift
arrayOfRollNumbers.unshift(50);
console.log(arrayOfRollNumbers);


//Delete/Remove element last position 
arrayOfRollNumbers.pop();
console.log(arrayOfRollNumbers);

//Removing First element
arrayOfRollNumbers.shift();
console.log(arrayOfRollNumbers);


var arrayOfRollNumbers = [67, 56, 78, 90, 60,40];

//update array element

console.log(`Updating array values`);
arrayOfRollNumbers[0]=888;
console.log(arrayOfRollNumbers);

//update the last element value array element
arrayOfRollNumbers[arrayOfRollNumbers.length-1]=77;
console.log(arrayOfRollNumbers);

var arrayOfRollNumbers = [67, 56, 78, 90, 60,40];
const sliceAarry=arrayOfRollNumbers.slice(3);
console.log(sliceAarry);

const sliceArr=arrayOfRollNumbers.slice(2,5);
console.log(sliceArr);

//splice method used for remove and add element

var arrayOfRollNumbers = [67, 56, 78, 90, 60,40];
arrayOfRollNumbers.splice(2,0,666,444);
console.log(arrayOfRollNumbers);


// let str="The Kerala story is good movie";
// let words=str.split(" ");
// console.log(words);

