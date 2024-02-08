//Task1
// function sum(numbers) {
//     let result = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }

//     return result;
// }

// let numbersArray = [2, 4, 6, 8, 10];
// let result = sum(numbersArray);
// console.log("The sum of the numbers is:", result);
//task1-2
// function countEven(numbers) {
//     let count = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             count++;
//         }
//     }

//     return count;
// }

// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = countEven(numbersArray);
// console.log("The count of even numbers is:", result);
//task1-3
// function double(numbers) {
//     let doubledArray = [];

//     for (let i = 0; i < numbers.length; i++) {
//         doubledArray.push(numbers[i] * 2);
//     }

//     return doubledArray;
// }
// let numbersArray = [4, 2, 7];
// let doubledResult = double(numbersArray);
// console.log("The doubled array is:", doubledResult);

//task2
// function sockMerchant(socks){
//     var longueur = socks.length;
//     var conteurPair = 0;
//     var totalPair = 0;
//     var tableau = [];
//     for(var i = 0;i<=(longueur-1);i++){
//         if(tableau.includes(socks[i])){
//             continue;
//         }else{
//             tableau.push(socks[i]);
//         }
//     }
//     var longueur2 = tableau.length;
//     for(var i = 0;i<=(longueur2-1);i++){
//         for(var j = 0;j<=(longueur-1);j++){
//             if(tableau[i]==socks[j]){
//                 conteurPair += 1;
//             }
//         }
//         if((conteurPair % 2) == 0){
//             totalPair = conteurPair / 2;
//         }else{
//             conteurPair -= 1;
//             totalPair = conteurPair / 2;
//         }
//     }
//     console.log(totalPair);
// }
// // Here are some test cases :
// sockMerchant([1, 2, 1, 2, 1, 3, 2]); // 2

// sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]); // 3

// sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]); // 4

// sockMerchant([1, 2, 3, 4, 5, 6, 7, 8, 9]); // 0



