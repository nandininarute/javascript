

const array = [23, 56, 78, 9, 5, 4,  0, 66, 21 ];

 

// 23 + 56 ==> 79 + 78 ==> 157 + 9 => 166

const sum = array.reduce( (runningTotal, value) => {

    return runningTotal + value;

} );

console.log(sum);

 

 
