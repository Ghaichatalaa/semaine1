//task
// function insertionSort(arr) {
//     const longueur = arr.length;
  
//     for (let i = 1; i < longueur; i++) {
//       let elementCourant = arr[i]; // Prendre l'élément courant à insérer
//       let j = i - 1;
  
//       while (j >= 0 && arr[j] > elementCourant) {
//         // Déplacer les éléments plus grands que l'élément courant vers la droite
//         arr[j + 1] = arr[j];
//         j--;
//       }
  
//       // Placer l'élément courant à sa position correcte
//       arr[j + 1] = elementCourant;
//     }
  
//     return arr;
// }
// console.log(insertionSort([5, 1, 9, 7, 0, 6]));

// //task
// function selectionSort(arr) {
//     for (let j = 0; j < arr.length; j++) {
//         let min_i = j;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[min_i]) {
//                 let tmp = arr[i];
//                 arr[i] = arr[min_i];
//                 arr[min_i] = tmp;
//             }
//         }
//         // console.log(j, arr);
//     }
//     return arr;
// }
// console.log(selectionSort([9, 6, 7, 3, 8, 1]));