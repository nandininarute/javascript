

//5!=5*4*3*2*1



//0!=1

function factorial(num){
if(num==0){
    console.log(`factorial of 0 is ${num}`);
    return;
}

    let factorial=1;

    for (let index = num; index >=1; index--) {
    
        factorial= factorial* index;
        
    }
    console.log(`factorial of the no is:`,factorial);
}

factorial(5);
factorial(6);
factorial(0);
