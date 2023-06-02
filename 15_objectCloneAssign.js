
const aarryNums=[20,3,4,56,90,400,49];

const clonedAaary=aarryNums;
console.log(`............1. shallow cloned array.............`);
console.log(`Given aarry aarryNums: ${aarryNums}`);
console.log("...................................");
console.log(` Shallo CLone Cloned aarry is : ${clonedAaary}`);
console.log(".............2. Deep clone..................");
///Update cloned aary

clonedAaary.push(55,66);
console.log(`Updated Cloned Cloned aarry is : ${clonedAaary}`);
console.log("...................................");
const origAaary=[...aarryNums];

origAaary.push(10,25);
console.log(`Updated Cloned Cloned aarry is : ${origAaary}`);
console.log("...................................");
console.log(`Cloned aarry is : ${clonedAaary}`);

console.log("..........3. Merge or concat Aarry.........");

const evenAarry=[2,30,14,8];
const merAaary=evenAarry.concat(aarryNums);
console.log(`Concated evenAarry and aarryNums : ${merAaary}`);

console.log("...................................");

console.log("...................4. employee_info object......................");

const employee_info ={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,000 INR",
        aug_month:"50,000 INR",
        jun_month:"65,000 INR",

    },
    address:{
        locality:{
        colony:"OM Vrindavan society",
        street:"Kanch Pokali,431202",
    },
    city:"Mumbai",
    state:"Maharashtra",
    country:"India",

    },
    mobile:["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"],

}

console.log(employee_info);

console.log("..............5.Employee Details.....................");
console.log(`a. address : Locality city state country: ${employee_info.address.locality.colony},${employee_info.address.locality.street},${employee_info.address.city},
${employee_info.address.state},${employee_info.address.country}`);
console.log("...................................");
console.log(`b. mobile numbers : ${employee_info.mobile}`);

console.log(".................6. Deep copy using JSON.stringfly()..................");
//const deepClonedPerson = JSON.parse(JSON.stringify(person));

const deepClonedEmployeeObj=JSON.parse(JSON.stringify(employee_info));
//employee_info.salary.july_month="80,000 INR";
console.log("...................................");
console.log(`Original Salary of July month: ${employee_info.salary.july_month}`);
console.log("...................................");
deepClonedEmployeeObj.salary.july_month="80,000 INR";
console.log("...................................");
console.log(`Updated july month salary  : ${deepClonedEmployeeObj.salary.july_month}`);
console.log("...................................");
console.log(`Original country is: ${employee_info.address.country}`);
console.log("...................................");
employee_info.address.country="United Kingdom";
console.log("...................................");
console.log(`Updated country 'United Kingdom' : ${employee_info.address.country}`);
console.log("...................................");
console.log(`Updated value of cloned object 'July Month' is: ${deepClonedEmployeeObj.salary.july_month} 
Updated Original value updated country is: ${employee_info.address.country}`);
console.log("...................................");