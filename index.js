// Problem 1 : Check whether a number is Prime or not


function primeNum(a){
  let count  = 0;
  for(let i = 2; i<=a; i++){
    if(a%i== 0){
      count++;
    }
  }
  (count ==1)?console.log("It's a Prime number"):console.log("Not a prime number");
}

primeNum(19);