

function checkLeapYear(leapYear)
{
    if((leapYear %4 ==0)&&(leapYear % 100 !=0)||(leapYear%400==0))
    {
        console.log(`${leapYear} is a leap year`);
    }
    
    else if ((leapYear== null )||(leapYear==undefined)||(leapYear==NaN)) {
        console.log(`${leapYear} is invalid data`); 
        
    } else {
        console.log(`${leapYear} is not a leap year`);
    }
   

    }

checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);