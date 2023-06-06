
class Employee{

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;

    }
}

const emp_anil=new Employee("22", "Anil", "IT", 50000, "TCS");
const emp_radha=new Employee("33", "Radha", "HR", 74000, "Wipro");
const emp_rishi=new Employee("55", "Rishi", "Finance", 47000, "TCS");
const emp_sonali=new Employee("66", "Sonali", "Finance", 45000, "Infy");
const emp_monika=new Employee("77", "Monika", "IT", 40000, "Wipro");
const emp_viny=new Employee("88", "Vinayak", "IT", 75000, "TCS");
const emp_mahi=new Employee("99", "Mahesh", "HR", 85000, "Infy");

const arrEmployee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log("...........................1. FInd out the TCS employee with name and company ...........................................");
console.log(".......................................................................................................");
arrEmployee.forEach( (employee)=>{

    if(employee.emp_company=="TCS"){
        console.log(employee.emp_name,employee.emp_company);
    }
})
console.log("...........................2. employee salary >=50000 ...........................................");
console.log(".......................................................................................................");

arrEmployee.forEach( (employee)=>{
    if (employee.emp_salary>=50000) {
        console.log(employee);
    }
})

console.log("...........................3. All Employee salary sum ...........................................");
console.log(".......................................................................................................");

let resultSum=0;

arrEmployee.forEach( (employee)=>{
    resultSum = resultSum + employee.emp_salary;
    
})

console.log(resultSum);

console.log("...........................4. Average All Employee salary ...........................................");
console.log(".......................................................................................................");

let resultAvg=0;

arrEmployee.forEach( (employee)=>{
    resultAvg = resultAvg + employee.emp_salary;
    
})
console.log(resultAvg/arrEmployee.length);

console.log("...........................5. Average All Employee salary ...........................................");
console.log(".......................................................................................................");

arrEmployee.forEach( (employee)=>{
    if ((employee.emp_dept=="IT" || employee.emp_dept=="HR") && employee.emp_salary>=75000) {
        console.log(employee);
        
    }
})

console.log(".......................................................................................................");