// //Task1
// // let person = {
// //     firstname: "Lionel",
// //     lastname: "messi",
// //     age: 30,

// //     get fullname() {
// //         return `${this.firstname} ${this.lastname}`;
// //     },

// //     set fullname(name) {
// //         let names = name.split(' ');
// //         this.firstname = names[0];
// //         this.lastname = names[1];
// //     }
// // };
// // console.log("Full Name:", person.fullname);
// // person.fullname = "Alaa ghaichat";
// // console.log("Updated Full Name:", person.fullname);


// //task2
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     compareAge(otherPerson) {
//         if (this.age < otherPerson.age) {
//             return `${otherPerson.name} is older than me.`;
//         } else if (this.age > otherPerson.age) {
//             return `${otherPerson.name} is younger than me.`;
//         } else {
//             return `${otherPerson.name} is the same age as me.`;
//         }
//     }
// }

// let p1 = new Person("Ali", 20);
// let p2 = new Person("Ziyech", 30);
// let p3 = new Person("Boufal", 21);

// console.log(p1.compareAge(p2)); 
// console.log(p2.compareAge(p1)); 
// console.log(p1.compareAge(p3));
//Task 3
// function mostOccurred(tableau){
//     var count = 0;
//     var total = 0;
//     var target;
//     for (var i = 0;i<tableau.length;i++){
//         for (var j = (i+1);j<tableau.length;j++){
//             if(tableau[i]==tableau[j]){
//                 count+=1;
//             }
//         }
//         if(total<count){
//             total = count;
//             target = tableau[i];
//         }
//     }

// console.log(target);
// }
// mostOccurred([2,5,9,2,7,6,5,2])