
var tcsEligibilityCraiteria= function(gradScore,hscScore,sscScore,candidateName){

   var result=(gradScore>=70)||(hscScore>=80)||(sscScore>=90) ?`Congrates ${candidateName} you are eligible for TCS interview`:`Unfortunately ${candidateName} you are not eligible for TCS interview`

   console.log(` ${result}`);
   
}
console.log("..............................................................");
console.log("             TCS Interview Eligibility              ");
console.log("...............................................................");
tcsEligibilityCraiteria(80,86,90,"Trishika");
console.log("................................................................");
tcsEligibilityCraiteria(70,65,55,"Prarthana");
console.log(".................................................................");
tcsEligibilityCraiteria(60,79,88,"Prasidhhi");
console.log(".................................................................");