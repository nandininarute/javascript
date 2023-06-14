

let palindrome= (element ) =>{


    let left =element;
    let right="";
    for(i=left.length-1;i>=0;i--)
    {
        right = right + left[i];
    }
    if(left==right)
    {
        console.log("Given String is Palindrome =>",right);
    }
    else{
        console.log("Given string is not a Palindrome =>",right);
    }
}

palindrome("madam");
console.log("...................................");
palindrome("141");
console.log("...................................");
palindrome("Sunday");
console.log("...................................");
palindrome("mom");
console.log("...................................");
palindrome("listen");
console.log("...................................");
palindrome("dad");

