// const books = require("./books.json");
//dans le task 1 il nous a demandé de créer une function qui retorne le prix d'un livre 
//  dans cetee function on a met une boucle for qui va nous donner tout les livres aprés on a met une condition if qui va comparer le nom 
//de livre inserer avec les noms de livre si il a trouver le livre il va retourner sa prix
//function priceOfBook(bookName) {
//   for (let i = 0; i < books.length; i++) {
//     if (books[i].title === bookName) {
//       return books[i].price;
//     }
//   }
// }

//dans le task 2 il nous a demandé de créer une function qui prend un budget et il retourne tous les livres quand peu acheté avec ce budget
//dans cetee function on a met une boucle for qui va nous donner tout les livres aprés on a met une condition if qui va comparer le budget avec les prix des livres
//si le budget est plus que le prix de livre il va mettre le nom de livre dand la liste quand na déclarer et en fin cette function va retourner la liste des livres qui en peut acheté avec se budget.
// function affordableBooks(budget) {
//   const affordableBooksList = [];
//   for (let i = 0; i < books.length; i++) {
//     if (books[i].price <= budget) {
//       affordableBooksList.push(books[i].title);
//     }
//   }
//   return affordableBooksList;
// }

// function findBookByGenre(genre) {
//   const genreBooks = [];
//   for (let i = 0; i < books.length; i++) {
//     if (books[i].genres.includes(genre)) {
//       genreBooks.push(books[i].title);
//     }
//   }
//   return genreBooks;
// }

// function groupByGenre() {
//   const groupedBooks = {};
//   for (let i = 0; i < books.length; i++) {
//     const bookGenres = books[i].genres;
//     for (let j = 0; j < bookGenres.length; j++) {
//       const genre = bookGenres[j];
//       if (!groupedBooks[genre]) {
//         groupedBooks[genre] = [];
//       }
//       groupedBooks[genre].push({
//         id: books[i].id,
//         title: books[i].title,
//         author: books[i].author,
//         description: books[i].description,
//         price: books[i].price,
//       });
//     }
//   }
//   return groupedBooks;
// }

// function sortBooksByPrice() {
//   // Create a copy of the books array to avoid modifying the original array
//   const sortedBooks = [...books];

//   // Bubble sort for simplicity
//   for (let i = 0; i < sortedBooks.length - 1; i++) {
//     for (let j = 0; j < sortedBooks.length - i - 1; j++) {
//       if (sortedBooks[j].price > sortedBooks[j + 1].price) {
//         // Swap
//         const temp = sortedBooks[j];
//         sortedBooks[j] = sortedBooks[j + 1];
//         sortedBooks[j + 1] = temp;
//       }
//     }
//   }
//   return sortedBooks;
// }

// (function main() {
//   try {
//     if (priceOfBook("The Alchemist") !== 9.49) {
//       throw new Error("priceOfBook is not working properly.");
//     }
//     if (affordableBooks(10).length !== 6) {
//       throw new Error("affordableBoo.ks is not working properly.");
//     }
//     if (findBookByGenre("Fiction").length !== 7) {
//       throw new Error("findBookByGenre is not working properly.");
//     }

 
// if (Object.keys(groupByGenre()).length !== 30) {
//   throw new Error("groupByGenre is not working properly.");
// }


//     if (sortBooksByPrice()[0].price !== 5.99) {
//       throw new Error("sortBooksByPrice is not working properly.");
//     }
//     console.log("All tests passed successfully.");
//   } catch (error) {
//     console.log(error);
//   }
// })();