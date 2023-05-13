console.log("..............Assignment 1................");

function stringBasics()
{
    console.log("..............................");
    console.log("My dream company is IBM");
    console.log("..............................");
    var hobby1="Playing Sprots Game";
    var hobby2="Watching comedy events";
    var hobby3="Travelling";
    console.log("My Hobbies are: ",hobby1, hobby2,hobby3);
    console.log("..............................");
    var fullLength=hobby1.length+hobby2.length+hobby3.length;

    console.log("Total Length: ",fullLength);

   


}
stringBasics();

console.log("..........................................");
console.log("..............Assignment 2................"); 



function stringHandsOn()
{
    var stringName="  Hey you are doing good, keep it up   ";
    console.log("1.","Given string as it is: ",stringName);

    var totalLength=stringName.length;
    console.log("2.","Total Length of the given string is: ",totalLength);

    var Trimspaces=stringName.trim();
    var AfterTrimLength=Trimspaces.length;
    
    console.log("3.","After Remove Leading and Trailing Extra Spaces Length is: ",AfterTrimLength);

    console.log("4.","Total number Removed extra spaces count are in step 3: ",totalLength-AfterTrimLength);
    console.log("5.","First and last character after the trim: ",Trimspaces.charAt(0) ,Trimspaces.charAt(AfterTrimLength-1));
    

   
    
    
}

stringHandsOn();