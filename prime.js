// check given number is prime or not if it is prime print yes else no;


let num = 13;

let factors = 0;

for(let i = 1; i <= num; i++){
     if( num % i == 0){
          facters--;
     }
  }

if( factors == 2 ){
    console.log("Yes");
}else{
    console.log("No");
}