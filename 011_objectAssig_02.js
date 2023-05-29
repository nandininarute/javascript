
let sbiBank={
    bankName:"State Bank Of India",
    location:"Vadgaon BK ,Pune",
    accountNo:12345678945,
    IFSC:"SBI004812",
    interestRate:"6.5%",

  showDetails: function(){
   console.log(`"Bank Name" : ${this.bankName} ,"Location ": ${this.location},"Account No : ${this.accountNo} "IFSC Code" : ${this.IFSC},"InterestRate" : ${this.interestRate}`);
  },
};

sbiBank.showDetails();

let axisBank={
    bankName:"Axis Bank",
    location:"Dhayari ,Pune",
    accountNo:8565678945,
    IFSC:"ABI003812",
    interestRate:"6.5%",
    showDetails: function(){
        console.log(`"Bank Name" : ${this.bankName} ,"Location ": ${this.location},"Account No : ${this.accountNo} "IFSC Code" : ${this.IFSC},"InterestRate" : ${this.interestRate}`);
       },

};
axisBank.showDetails();

let hdfcBank={
    bankName:"HDFC Bank",
    location:"Narhe ,Pune",
    accountNo:7456892332,
    IFSC:"HDFC002365",
    interestRate:"6.25%",

    showDetails: function(){
        console.log(`"Bank Name" : ${this.bankName} ,"Location ": ${this.location},"Account No : ${this.accountNo} "IFSC Code" : ${this.IFSC},"InterestRate" : ${this.interestRate}`);
       },


};
hdfcBank.showDetails(); 

let yesBank={
    bankName:"Yes Bank",
    location:"Nandedcity,Pune",
    accountNo:56987423612,
    IFSC:"YES007894",
    interestRate:"6.00%",

    showDetails: function(){
        console.log(`"Bank Name" : ${this.bankName} ,"Location ": ${this.location},"Account No : ${this.accountNo} "IFSC Code" : ${this.IFSC},"InterestRate" : ${this.interestRate}`);
       },


};

yesBank.showDetails();