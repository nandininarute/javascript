


const aarryNum=[11,3,4,11,4,7,3];
console.log(`Given Aarry:`,aarryNum);
aarryNum.sort();
const aarry=[];
for (let index = 0; index < aarryNum.length; index++) {
if (aarryNum[index]==aarryNum[index+1]) {
    aarry.push(aarryNum[index]);
    aarryNum.splice(index,1)
}
    
}

console .log(`Duplicate elements in aarry:`,aarry);
console .log(`Removed Duplicate elements in aarry:`,aarryNum);


console.log("..................................................");

const str="How are you mate";
console.log(`Given string is `,str);
let newChar="";
const aarryWords=str.split(" ");

for (const elements of aarryWords) {
    for (let index = 0; index < elements.length; index++) {

        let char="";
        if(index==0 || index==elements.length-1)
       {
        char=elements[index].toUpperCase();
       }
       else{
        char=elements[index];
       }
        
       newChar=newChar + char;
    }
    newChar= newChar + " ";
    
}
console.log(newChar);