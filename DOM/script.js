

const personalId = document.getElementById("personal");
console.log(personalId.innerHTML);


const elemntclassName = document.getElementsByClassName("name");
console.log(elemntclassName[0].innerHTML);

const elementH3 = document.querySelectorAll("p");
console.log(elementH3[0].innerHTML);
// document.getElementsByClassName();


//querySelector

const elemntPer = document.querySelector("#personal");
console.log(elemntPer.innerHTML);

const elementName = document.querySelector(".name");
console.log(elementName.innerHTML);

const elemntH3Contact = document.querySelector("h3");
console.log(elemntH3Contact.innerHTML);

console.log(".........querySelectAll().......");

const elemntPara = document.querySelectorAll("p");
//console.log(elemntPara.innerHTML);

for (const element of elemntPara) {
    console.log(element.innerHTML);
}

//want to select multiple element
console.log("..........QuerySelectALL()......");
const elemntclassNametAll = document.querySelectorAll(".ceo");
elemntclassNametAll.forEach( (element)=>{
    console.log(element.innerHTML);
})