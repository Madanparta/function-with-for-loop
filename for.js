// 1.PRINTING 100 NATURAL NO..
// ANSWER.

// let printNatur =(num)=>{
//     for(let i=1; i<=num; i++){
//         console.log(i)
//     }
// }
// printNatur(100)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2.PRINTING ALL EVEN NUMBERS
// ANSWER
// let evenBetween =(num1,num2)=>{
//     for(let i=num1; i<=num2; i++){
//       if(i%2==0){
//         console.log(i)
//       }
//     }
// }
//  evenBetween(10,20)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 3.ONLY ODD NUMBERS.
// ANSWER.
// let countOdd =(a,b)=>{
//     let count = 0;
//     for(let i=a; i<=b; i++){
//       if(i%2!=0){
//         count++
//       }
//     }
//     console.log(count)
// }
// countOdd(1,20);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 4.EVEN NUMBER SUM
// ANSWER.
// function sumOfAll(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//       if(i%2==0){
//         sum+=i;
//       }
//     }
//     return sum;
// }
//  console.log(sumOfAll(100))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 5.MULTIPLICATION TABLES..
// ANSWER.
// function multi(mul){
//     for(let i=1; i<=10; i++){
//       let c= i*mul;
//       let d = (mul+" x "+i+" = "+c);
//       console.log(d)
//     }
// }
//  multi(2)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 6.FACTORIAL NUMBER.
// ANSWER.
// function factorial(num){
//     let facto=1;
//     for(let i=1; i<=num; i++){
//       facto*=i;
//     }
//     return facto;
// }
//  console.log(factorial(10))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 7.PRIME NUMBERS.
// ANSWER.
// function primeNumber(num){
//     for(var i=2; i<=num; i++){
//     for(var j=2; j<i; j++){
//       if(i%j==0){
//         break;
//       }
//     }
//     if(i==j){
//       console.log(i)
//     }
//   }
// }
// primeNumber(20)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 8.PRINTING 10 DIGITS AND ALL SUM.
// ANSWER.
// function printSum (num){
//     let product = 1;
//     for(let i=1; i<=num; i++){
//       console.log(i);
//       product*=i;
//     }
//     return product;
// }
//  console.log(printSum(10))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 9.REVERSE NUMBER ..
// ANSWER.
// function reverse(num){
//     for(let i= num; i>0; i--){
//       console.log(i);
//     }
// }
//  reverse(100);