// // function calculateTotal(number) {
// //   let counter = 0;
// //   let result = 0;
// //   while(counter<number){
// //     counter+=1;
// //     result=result+counter;
// //   }
// //   return result;
// // }

// function calculateTotal(number) {
//   let sum = 0;
//   for(let i=0; i<=number; i+=1){
//     sum+=i;
//   }
//   return sum;
// }

// console.log(calculateTotal(3));


// function sumUpTo(number) {
//   let sum = 0;

//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }

//   return sum;
// }
// console.log(sumUpTo(3));


// function calculateEvenTotal(number) {
//   let sum = 0;
//   for(let i = 0; i<=number; i+=2){
//     if(i%2!=1){
//     sum+=i;  
//     }
    
//   }
//   return sum;
// }
// console.log(calculateEvenTotal(5));

const start = 2;
const end = 11;
let number;
for(number=start; number<end; number++){
  if(number % 5 === 0){   
    break; 
   }  
  
}
console.log(number)
return number;
