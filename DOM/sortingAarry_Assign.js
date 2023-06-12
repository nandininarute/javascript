
const array = [10,5,'a','b','h', 11];
console.log(`Given Aarry:${array} `);
  array.sort();
//  console.log(array);

const retrunAarry = array.sort( (n1 , n2) => {
    return n1 > n2 ? 1 : -1 ;
 } );
 console.log(retrunAarry);

//  const arraySlice = retrunAarry.slice();
//  console.log(arraySlice);
const arrayAlpha = retrunAarry.slice(0,3);
console.log("Sorting of array Alphabet: ",arrayAlpha);
const number = retrunAarry.slice(3);
 console.log("Sorting of array Number: ",number);
