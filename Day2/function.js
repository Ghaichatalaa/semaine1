//task1
// function factorialRecursive(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorialRecursive(n - 1);
//     }
//   }
//   let result = factorialRecursive(5);
//   console.log(result); 


//task1-2
// function nDigit(num) {
//     var count = 0;
//     while (num !== 0) {
//       num = Math.floor(num / 10);
//       count++;
//     }
//     return count;
//   }
//   console.log(nDigit(555)); 
  
// //task1-3
// function numbertoDay(Day) {
//     switch (Day) {
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log(" Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Saturday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;    
//         default:
//             console.log("unknow day")
    
//     }

// }
// numbertoDay(2);
// //task1-4
// function max(a,b,c) {

//     if (a > b && a > c) {
//         console.log( a + " is the max number");
//     } else if (b > a && b > c) {
//         console.log(b +" is the max number");
//     }else if(c > a && c >b) {
//         console.log(c+ " is the max number");
//     }else{
//         console.log("all numbers are even ")
//     }
// }
// max(1, 3, 4);
//task1-5
// function myGrade(score){

// switch (true) {
//     case score >= 90 && score <=100:
//         console.log('Grade A');
//         break;
//     case score >= 80 && score <90:
//         console.log('Grade B');
//         break;
//     case score >= 70 && score <80:
//         console.log('Grade C');
//         break;
//     case score >= 60 && score <70:
//         console.log('Grade D');
//         break;
//     case score >= 0 && score <60:
//         console.log('Grade F');
//         break;
//     default:
//         console.log('Invalid score');
// }
// }
// myGrade(50);
//task2
// function combinator(n,p){
//      var result =  factorialRecursive(n)/( factorialRecursive(p)* factorialRecursive(n-p));
//      return result;
//  }
//  console.log(combinator(5,2));
//task3
// function calculator(num1 , operator , num2 ) {
//     var result =0 ;
//     switch (operator){
//         case '+' :
//             result= num1 + num2;
//              break;
//         case '-' :
//                 result= num1 - num2;
//                 break;
//         case '%':
//             result = num1 % num2;
//             break;
        
//         case '/':
//                     if (num2 === 0 ){
//                         return "can not divide by zero";
//                         }else{
//                             result= num1 / num2;
//                             }
//                             break;
//         default:
//                                 result= num1 * num2;
//  }
//   return result;
// }
// console.log( calculator(5 ,"+",4));

