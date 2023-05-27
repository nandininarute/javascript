const aarryNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(".........................................");
console.log(`1.Total element or length of the aarry available:  ${aarryNumbers.length}`);
console.log(`2.First element of aarry: ${aarryNumbers[0]} and last elemnt of aarry: ${aarryNumbers[aarryNumbers.length-1]}`);
console.log(`3. Third last elemnt of aarry by using length : ${aarryNumbers[aarryNumbers.length-3]}`);
console.log(`4. AllEven numbers using For In loop:`);

 for (const index in aarryNumbers) {
     
        const element = aarryNumbers[index];

        if (element%2==0) {
            console.log(`Even Numbers: ${aarryNumbers[index]}`);
        }
        
     }
     console.log(`5. Odd numbers using for in loop:`);
     for (const index in aarryNumbers) {
     
        const element = aarryNumbers[index];

        if (element%2!=0) {
            console.log(`Odd Numbers: ${aarryNumbers[index]}`);
        }
        
     }

     console.log(`6. All Even positioned numbers in the aarry:`);

     var result=0;
     for (const index in aarryNumbers) {
        if (index%2==0) {
            result=result+aarryNumbers[index];
        }
     }
     console.log(`${result}`);

     console.log(`7. All Odd positioned numbers in the aarry:`);
      var result=0;
     for (const index in aarryNumbers) {
        if (index%2!=0) {
            result=result+aarryNumbers[index];
        }
     }
     console.log(`${result}`);

     console.log(`8. Sum of all the Aarry numbers:`);

     var result=0;
     for (const index in aarryNumbers) {
       
            result=result+aarryNumbers[index];
        
     }
     console.log(`${result}`);

     console.log(`9. Numbers which are multiple of 5:`);
     var result=0;
     for (const index in aarryNumbers) {
        const element = aarryNumbers[index];
        if (element%5==0) {
            console.log(`${aarryNumbers[index]}`);
        }
     }
    
     console.log(`10. Is 115 numbers availbale in the aarry: ${aarryNumbers.includes(115)}`);

     console.log(`11. Is 23 numbers availbale in the aarry: ${aarryNumbers.includes(23)}`);

     console.log(`12. Insert number 55,66 Before index 3: `);

     aarryNumbers.splice(3,0,55,66);
     console.log(`${aarryNumbers}`);

     console.log(`13. Delete 3 number starting from index 4 : `);

     aarryNumbers.splice(4,3);
     console.log(`${aarryNumbers}`);
