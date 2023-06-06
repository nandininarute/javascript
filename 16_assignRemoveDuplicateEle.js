
const aarryNum=[11,3,4,11,4,7,3];


for (let index = 0; index < aarryNum.length; index++) {
    for (let j = index+1; index < aarryNum.length; j++) {

        if(aarryNum[index]==aarryNum[j])
        {
            console.log(aarryNum[j]);
        }
        else{
        console.log(aarryNum[index]); 
        }
    
            }

            
}

