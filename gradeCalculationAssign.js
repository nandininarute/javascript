function gradeCalculation(marks)
{
    if(marks>=90)
    {
        console.log(`Funtastic marks:${marks},Your grade is A+`);
    }
    else if(marks>=70 && marks<90)
    {
        console.log(`Excellent marks:${marks},Your grade is A`);
    }
    else if (marks>=50 && marks<75) {
        
        console.log(`Good marks:${marks},Your grade is B`);
    } else if (marks>=35 && marks<50) {

        console.log(`Marks is ${marks},Your grade is C ,need improvement`);
        
    } else 
        {
        
            console.log(`Please provide the valid marks`);
       }
}
console.log("...............................................................");
gradeCalculation(98);
console.log("...............................................................");
gradeCalculation(80);
console.log("...............................................................");
gradeCalculation(90);
console.log("...............................................................");
gradeCalculation(0);
console.log("...............................................................");
gradeCalculation(150);
console.log("...............................................................");
gradeCalculation(-7);
console.log("...............................................................");
gradeCalculation(35);
console.log("...............................................................");
gradeCalculation(29);
console.log("...............................................................");
gradeCalculation(64);
console.log("...............................................................");
gradeCalculation(49);
console.log("...............................................................");
gradeCalculation("91");
console.log("...............................................................");
gradeCalculation("Eighty");
console.log("...............................................................");
gradeCalculation(undefined);
console.log("...............................................................");
gradeCalculation(null);
console.log("...............................................................");