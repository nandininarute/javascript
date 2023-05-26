
console.log("                    TCS Interview Eligibility                ");

function tcsInterviewEligibility(gradScore,hscScore,sscScore,candidateName)
{

    if((gradScore>=70)||(hscScore>=80)||(sscScore>=90))
    {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
    }
    else
    {
        console.log(`Unfortunately ${candidateName} you are not eligible for TCS interview`);
    }
}

console.log("...............................................................");
tcsInterviewEligibility(80,86,90,"Trishika");
console.log("...............................................................");
tcsInterviewEligibility(70,65,55,"Prarthana");
console.log("...............................................................");
tcsInterviewEligibility(60,79,88,"Prasidhhi");
console.log("...............................................................");