console.log("...............................................");
console.log("..................If Else Grade ................");
console.log("...............................................");
function voteEligibility(age) {
  //null undefined
  if (age > 18 && age < 120) {
    console.log(`${age} is Eligible for vote`);
    console.log("...............................................");
  } else if (
    age == 0 ||
    age < 0 ||
    age > 120 ||
    age == null ||
    age == undefined
  ) {
    console.log(`${age} is Invalid Data`);
    console.log("...............................................");
  } else {
    console.log(`${age} is not Eligible for vote`);

    console.log("...............................................");
  }

  //0>120
}

voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);
voteEligibility(undefined);
