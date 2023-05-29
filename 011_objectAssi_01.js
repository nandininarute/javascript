
let professor ={
    name:"Raman",
    height:"5.5feet",
    age:45,
    Subject:"Biology",
   City:"Pune",

   degrees:{
    engineering:"CSE",
    pHD:"Adv Computing",
    teachers:"B.Ed",
    graduation:"BCS",
    post_Graduation:"M.sc(CS)",
   },
  
   values : function(){
    let details= ` engeeniring: ${this.degrees.engineering} , pHD : ${this.degrees.pHD}, teachers : ${this.degrees.teachers},graduation : ${this.degrees.graduation},post_Graduation : ${this.degrees.post_Graduation}`;
    return details;
     
   },
   certificates:['Hacker Rank Participation','Certificate in IFE cource','Certificate in Adv Programing'],

   
};

console.log(`1. Professor properties are : ${professor.name},${professor.height},${professor.age},${professor.Subject} ,${professor.City}`);
console.log("....................................................................................................................................");

console.log(`2. Nested Object Degrees are  : ${professor.degrees.engineering},${professor.degrees.pHD},${professor.degrees.teachers},${professor.degrees.graduation} ,${professor.degrees.post_Graduation}`);
console.log("....................................................................................................................................");

console.log(`3. One aarry Certificate are : ${professor.certificates}`);
console.log("....................................................................................................................................");
let srtValues=professor.values();
console.log(`4.Teachers degress are Total degress: ${srtValues}`);
console.log("....................................................................................................................................");



let expirien=professor.totalExperience=14;
console.log(`5. Tried to added new property totalExperinec:${expirien}`);
console.log("....................................................................................................................................");
 professor.City="Mumbai";

console.log(`6. modifying property:`,professor);
console.log("....................................................................................................................................");
professor.certificates.push("Oracle Certified");

console.log(`Certificate added in the aarry Certified: ${professor.certificates}`);
console.log("....................................................................................................................................");
let lastEle=professor.certificates[professor.certificates.length-1];

console.log(`Last element of the aarry Certificates : ${lastEle}`);
console.log("....................................................................................................................................");

