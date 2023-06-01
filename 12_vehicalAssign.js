

console.log("...................Vehical Class Details........................");
class Vehical{

    companyName;
    color;
    model;
    price;
    fuelType;

    constructor(companyName,color,model,price,fuelType)
    {
        this.companyName=companyName;
        this.color=color;
        this.model=model;
        this.price=price;
        this.fuelType=fuelType;
    }

    }

    const firstDetails=new Vehical("Tata","white","Tigore","10L","Petrol");
   
    const secondDetails=new Vehical("Maruti","white","Maruti","06L","Petrol");
  
    const thirdDetails=new Vehical("Scorpio","white","Mahindra","16L","Diesel");
    
    const fourthDetails=new Vehical("Innova","white","Toyota","25L","Diesel");
  

    let arryOfVehicals=[firstDetails,secondDetails,thirdDetails,fourthDetails];

 for (const Vehical of arryOfVehicals) {
     console.log(`${Vehical.companyName},${Vehical.color},${Vehical.model},${Vehical.price},${Vehical.fuelType}`);
     console.log("........................................................");
 }

 console.log("......................College Details..................................");

    class College{
        constructor(collegeName,city,department,phoneNo){
              this.collegeName=collegeName;
              this.city=city;
              this.department=department;
              this.phoneNo=phoneNo;
        }
    }

    const oneColDetails=new College("DCD","Solapur","Engineering",1234564253);
    const secColDetails=new College("SCS","Sangola","Engineering",568923569);
    const thirdColDetails=new College("Swery","Pandharpur","Engineering",845962568);
    const forthColDetails=new College("SKN","Pune","Engineering",4568923558);

    //let aarryTraverse=[oneColDetails,secColDetails,thirdColDetails,forthColDetails];

    traverse(oneColDetails);
    traverse(secColDetails);
    traverse(thirdColDetails);
    traverse(forthColDetails);

    function traverse(College)
    {
        for (const key in College) {
            if (Object.hasOwnProperty.call(College, key)) {
                const element = College[key];

                console.log(`${key},${element}`);
               
                
            }
            
        }
        console.log("........................................................");
    }