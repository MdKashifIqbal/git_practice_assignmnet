// Problem 1 : Check whether a number is Prime or not
function PrimeNum(a){
let count=1;
for(let i=0;i<=a;i++){
  if(a%i==0){count++}
}
if(count==4){console.log("Its a Prime Number")}
else{console.log("Its not a Prime Numeber")}
}

PrimeNum(19)