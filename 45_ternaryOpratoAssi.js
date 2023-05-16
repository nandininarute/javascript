console.log("...........Male Marraige Eligibility..........");

var maleMarraigeEligibility=function(gender,age,name)
{
    var res= (gender=="Male")&&(age>=21)? `Hey ${name} you are eligiable for marraige`: `Hey ${name} you are not eligiable for marraige`
    return res;
}

var result=maleMarraigeEligibility("Male",25,"Billgates");

console.log(` ${result}`);

console.log(".............................................");
var result1=maleMarraigeEligibility("Male",17,"Stew Jobs");

console.log(` ${result1}`);
console.log(".............................................");

console.log("...........Female Marraige Eligibility..........");
console.log(".............................................");

var femaleMarraigeEligibility=function(gender,age,name)
{
    var res= (gender=="Female")&&(age>=18)? `Hey ${name} you are eligiable for marraige`: `Hey ${name} you are not eligiable for marraige`
    return res;
}

var result=femaleMarraigeEligibility("Female",16,"Jenifer");

console.log(` ${result}`);

console.log(".............................................");
var result1=femaleMarraigeEligibility("Female",27,"Malinda Gates");

console.log(` ${result1}`);