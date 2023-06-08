
class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company)
    {
        this.emp_id = emp_id;
        this.emp_name =emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee("22","Anil", "IT", 50000, "TCS");
const emp_radha = new Employee("33","Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee("55","Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee("66","Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee("77","Monika", "IT", 40000, "Wipro");
const emp_viny= new Employee("88","Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee("99","Mahesh", "HR", 85000, "Infy");

console.log(".........................................................................");
console.log(".............. 1.Get the employee from Wipro company....................");
console.log(".........................................................................");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

const wiproEmp = arrayEmps.filter( (employee)=>{

    return employee.emp_company=="Wipro";
})

//console.log(wiproEmp);

for (const element of wiproEmp) {
  console.log(element.emp_name,element.emp_company);
}

//console.log(aarrName);
console.log(".........................................................................");
console.log(".............. 2.Get the employee from 'IT' or 'HR' department ....................");
console.log(".........................................................................");

const departAarry=arrayEmps.filter( (employee)=>{

    return employee.emp_dept=="IT" || employee.emp_dept=="HR";
})

for (const element of departAarry) {
    console.log(element.emp_name,element.emp_dept);
}

console.log(".........................................................................");
console.log(".............. 3.Get the employee id are greater than 50 ....................");
console.log(".........................................................................");

const greterFifty = arrayEmps.filter( (employee)=>{
    return employee.emp_id >50;
})
for (const element of greterFifty) {
    console.log(element.emp_name,element.emp_id);
}

console.log(".........................................................................");
console.log(".............. 4.Get the employee names startes with 'A' or 'V' or 'M' ....................");
console.log(".........................................................................");

const namesAarry = arrayEmps.filter( (employee)=>{
    return (employee.emp_name.startsWith("A")||employee.emp_name.startsWith("V")||employee.emp_name.startsWith("M"))
    
})
for (const element of namesAarry) {
    console.log(element.emp_name,element.emp_id);
}

console.log(".........................................................................");
console.log(".............. 5.Get the Avg salary of employee for all the dept ....................");
console.log(".........................................................................");

const arraSum = arrayEmps.filter( (employee)=>{
    return employee.emp_salary;
    
})


const sumMap= arraSum.map( (employee)=>{

    return employee.emp_salary;
})
const sum = sumMap.reduce( (runningValue,Value)=>{

    return runningValue + Value;
     
})
console.log(sum/arraSum.length);

console.log(".........................................................................");
console.log(".............. 6.Get the Avg salary of employee for 'IT' the dept ....................");
console.log(".........................................................................");

const arrayIT = arrayEmps.filter( (employee)=>{
    return employee.emp_dept =="IT";
        
})

const arrayITSum = arrayIT.map( (employee)=>{

    return employee.emp_salary;
})

const avgAarray = arrayITSum.reduce( (runningVal,Val)=>{

    return runningVal + Val;
})

console.log(avgAarray/arrayIT.length);

