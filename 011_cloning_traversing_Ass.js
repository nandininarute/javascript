
let bankSbi={

    bankName:"SBI Bank",
    accountNo:235698147,
    ifsc:"SBI00023",
    interestRate:"6%",


};

console.table(bankSbi);

let bankLocation={
    street:"Dhyari Road ",
    city:"Pune",
    pin:410014,
}

console.table(bankLocation);

console.log("Cloning step 1 and step 2 using Object.assign()");

let strMeaning=Object.assign(bankSbi,bankLocation);

console.table(strMeaning);

let rateOfInterest={
    homeLoadInterest:"8%",
    personalLoadInterest:"12%",
    dueInterest:"6%",
}

let sbiDetails={

}

console.table(sbiDetails);

console.log("Merging step 1 step 2 and step 4 in newly created object sbiDetails");

Object.assign(sbiDetails,bankSbi,bankLocation,rateOfInterest);

console.table(sbiDetails);

console.log("Traverse merge aarry using For in loop...");
console.log("...........................................");

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}, ${element}`);
    }

   
}