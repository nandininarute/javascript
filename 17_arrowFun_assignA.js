console.log(`Arrow function with no arguments and no return value`);

let display = ()=> {

    console.log(`Good Morning,Today is Monday`);

}

display();
console.log(`..................................................`);
console.log(`2.Arrow function with 3 arguments and no return value`);

let multiplay=(n1, n2, n3=1)=>{
    let result=n1*n2*n3;
    console.log(`Multiplication of 3 agrs is: ${result}`);
}
console.log(`a.multiplication of 3 argrumrnts is `);
multiplay(5, 5, 2);
console.log(`..................................................`);
console.log(`b.multiplication of 2 argrumrnts is[assign 3rd value of variable is 1] `);
multiplay(10,4);

console.log(`..................................................`);
console.log(`3.Arrow function with 3 arguments and with return value`);

let addition=(n1,n2,n3,n4,n5)=>{

 let result=n1+n2+n3+n4+n5;
    return result
}

let resultAdd = addition(100, 100, 200, 349, 756);

console.log(`Addition of values passed :${resultAdd}`);
console.log(`..................................................`);
let resultStr = addition("I am ","learning ","ES6 ","features ","in depth ");
console.log(`Strings of values passed :${resultStr}`);


console.log(`---------------------------------------------------------------`);

class Employee{
    constructor(emp_id,emp_name,emp_dept, emp_salary,emp_company)
    {
        this.emp_id = emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil = new Employee(22,"Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33,"Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55,"Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66,"Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77,"Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88,"Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99,"Mahesh", "HR", 85000, "Infy");


const aarry_employee=[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny,emp_mahi];
console.log(`Find all employee working in TCS`);
for (const employee of aarry_employee) {

    if(employee.emp_company=="TCS")
    console.log(employee.emp_name);
    
}

console.log(`.................................`);
console.log(`Find all Finance department and employee names`);
for (const employee of aarry_employee) {

    if(employee.emp_dept == "Finance")
    console.log(employee.emp_name ,employee.emp_dept);
    
}

console.log(`.................................`);
console.log(`Find all employee whoes name start with 'R' `);
for (const employee of aarry_employee) {

    if(employee.emp_name.startsWith("R"))
    console.log(employee.emp_name);
    
}

console.log(`.................................`);
console.log(`Find all employee whoes salary > 75000 `);
for (const employee of aarry_employee) {

    if(employee.emp_salary > 75000)
    console.log(employee.emp_name,employee.emp_company,employee.emp_salary);
    
}

console.log(`.................................`);
console.log(`Find all employee whoes salary >=50000  and dept is 'IT`);
for (const employee of aarry_employee) {

    if(employee.emp_dept=="TI" && employee.emp_salary>=50000 )
    console.log(employee);
    
}
console.log(`.................................`);
console.log(`Find all employee company 'Infy'`);
for (const employee of aarry_employee) {

    if(employee.emp_company=="Infy")
    console.log(employee);
    
}