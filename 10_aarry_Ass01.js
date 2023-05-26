console.log("............Given Fruit array...................");
const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arrayFruits);
console.log(".................................");

var arryLen=arrayFruits.length-1;
console.log(`First element is: ${arrayFruits[0]} and Last element is: ${arrayFruits[arryLen]}`);
console.log("....................................................");
//remove mango from aary
arrayFruits.splice(3,1);
console.log(`Remove Mango from aarry : ${arrayFruits}`);
console.log("....................................................");
//Add or insert element'Pineapple'at the last position

arrayFruits.splice(arryLen,1,"Pineapple");
console.log(`Inserting Pinapple at last :${arrayFruits}`);
console.log("....................................................");
//insert an elemet'Dragaon Fruit' Before "Water Melon"
arrayFruits.splice(2,1,"Dragon Fruit");
console.log(`insert an elemet'Dragaon Fruit' Before "Water Melon" ${arrayFruits}`);
console.log("....................................................");
//replace an element Irange with Kiwi

arrayFruits[1]="Kiwi";
console.log(`replace an element Irange with Kiwi :${arrayFruits}`);
console.log("....................................................");

//log the elements starting from 1 to 4
var arrSlice=arrayFruits.slice(1,4);
console.log(`log the elements starting from 1 to 4 ${arrSlice}`);
console.log("....................................................");
//only select last 3 elements an log on console using lenth property
var lastThreeVal=arrayFruits.slice(arryLen-2);
console.log(`only select last 3 elements an log on console using lenth property are :${lastThreeVal}`);
console.log("....................................................");