// Array methods
// push, pop
// let arr=[1, 2, 3];
// arr.pop();
// arr.push('salom');


// shift, unshift
// let mas=['salom', 'good', 'bye'];
// mas.shift();
// mas.unshift("hello");

// slice
// let arr=['salom', 'good', 'hello', 'bye'];
// let arr1=arr.slice(2, 4);
// console.log(arr1);

// concat
// let arr=['salom', 'good', 'hello', 'bye'];
// let num=[1,2,3,4,5];
// let mixArr=arr.concat(num);
// console.log(mixArr);

// indexOf, lastInexOf
// let arr=['salom', 'good', 'hello', 'bye', 'good'];
// let ItemIndex=arr.indexOf("good");
// console.log(ItemIndex);
// let lastItemIndex=arr.lastIndexOf("good");
// console.log(lastItemIndex);

// includes
// let arr=['salom', 'good', 'hello', 'bye', 'good'];
// let isExist=arr.includes("bye");
// console.log(isExist);

// forEach
// let arr=['salom', 'good', 'hello', 'bye', 'good'];
// let newArr=[];
// arr.forEach(item=>{
//     item=item.toUpperCase();
//     newArr.unshift(item)
// })
// console.log(newArr);

// Map
// let arr=['salom', 'good', 'hello', 'bye', 'good'];
// let newArr=arr.map(item=>{
//     return item.toUpperCase();
// })
// console.log(newArr);

// Filter
// let arr=['salom', 'good', 'hello', 'bye', 'good'];
// let newArr=arr.filter(item=>{
//     return item.length>4
// })
// console.log(newArr);

// every/some
// let arr=['salom', 25, 'bye', true, '18', 18];
// let everyNumber=arr.every(item=>{
//     return typeof item == 'number';
// })
// let someNumber=arr.some(item=>{
//     return typeof item == 'number';
// })
// console.log(everyNumber);
// console.log(someNumber);

// find/findIndex
// let arr=['salom', 25, 'bye', true, '18', 18];
// let overFifteen=arr.find(a=>{
//     return a>15;
// })
// console.log(overFifteen);
// let overFifteenIndex=arr.findIndex(item=>{
//     return item > 15;
// })
// console.log(overFifteenIndex);

// Masalalar
// 1-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ]
// function studentAge(arr=[]){
//     arr.forEach(talaba=>{
//         console.log("Ismi: "+talaba.name+". Yoshi: "+talaba.age);
//     })
// }
// console.log(studentAge(students));

// 2-masala
// const students = [
//         { name: 'Alice', age: 20, score: 85, status: 'active' },
//         { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//       ]

// function maxScore(arr=[]){
//     let score=arr[0].score
//     arr.forEach(item=>{
//         if(item.score>score){
//             score=item.score
//         }
//     })
//     return score;
// }
// console.log(maxScore(students));


// 3-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Andrew', age: 23, score: 88, status: 'active' }
//   ];

// function filterStudent(arr=[]){
//     let newArr=arr.filter(item=>{
//         return item.name[0] == 'A';
//     })
//     return newArr;
// }
// console.log(filterStudent(students));

// 4-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// function average(arr=[]){
//     let sum=0;
//     arr.forEach(item=>{
//         sum+=item.score;
//     })
//     return sum/arr.length;
// }
// console.log(average(students));

// 5-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'John', age: 22, score: 92, status: 'inactive' },
//     { name: 'Bob', age: 23, score: 88, status: 'active' }
//   ];
// function findStudent(arr, student){
//     let talaba=arr.find(item=>item.name==student)
//     return talaba;
// }
// console.log(findStudent(students, "John"));

// 6-masala
// const students = [
//     { name: 'Alice', age: 20, score: 80, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 85, status: 'active' }
//   ];
// function findIndex(arr=[]){
//     let talaba=arr.findIndex(item=>{
//         return item.score > 85;
//     })
//     return talaba;
// }
// console.log(findIndex(students));


// 7-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// function filterStudent(arr=[]){
//     let newArr=arr.filter(item=>{
//         return item.status=='active'
//     })
//     return newArr;
// }
// console.log(filterStudent(students));

// 8-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 17, score: 88, status: 'active' }
//   ];
// function age(arr=[]){
//     let a=arr.every(item => item.age > 18)
//     return a;
// }
// console.log(age(students));

// 9-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// function someScore(arr=[]){
//     let a=arr.some(item=>item.score > 90)
//     return a;
// }
// console.log(someScore(students));

// 10-masala
// const students1 = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const students2 = [
//     { name: 'Charlie', age: 23, score: 88, status: 'active' },
//     { name: 'David', age: 21, score: 90, status: 'inactive' }
//   ];
// function mixArr(arr1, arr2){
//     let newArr=arr1.concat(arr2);
//     return newArr;
// }
// console.log(mixArr(students1, students2));

// 11-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Alice', age: 23, score: 88, status: 'active' }
//   ];
// // ISHLAB berishdi

// function uniqueUser(users) {
//   let result = [];
//   users.forEach((value, index) => {
//     let isExist = users.find(function(v, i) {
//       return value.name == v.name && index != i
//     })

//     if (!isExist) {
//       result.push(value)
//     }
//   })
//   return result;
// }

// console.log(uniqueUser(students));



// 12-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
// function editStudent(arr=[]){
//     let newArr=arr.map(item=>{
//         item.name=item.name.toUpperCase()
//         return item;
//     })
//     return  newArr;
// }
// console.log(editStudent(students));

// 13-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// function ball(arr=[]){
//     let score=arr.map(item=>{
//         return item.score;
//     })
//     return score;
// }
// console.log(ball(students));

// 14-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' }
//   ];

//   function objKeys(arr=[]){
//     let k=Object.keys(arr[0]);
//     return k;
//   }
//   console.log(objKeys(students));

// 15-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];

//   function addStudent(arr, name, age, score, status){
//    let talaba={
//     name,
//     age,
//     score,
//     status
//    }
//    arr.push(talaba);
//    return arr;
//   }
//   console.log(addStudent(students, 'Alisher', 25, 88, 'active'));

// 16-masala
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function deleteStudent(arr, ism){
//   let newArr=[];
//   arr.forEach(element => {
//     if(element.name == ism){
//       delete element;
//     }
//     else{
//       newArr.push(element)
//     }
//   });
//   return newArr;
// }
// console.log(deleteStudent(students, 'Bob'));

// 17-masala
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 19, score: 88, status: 'active' }
// ];
// function studentAge(arr=[]){
//   let result=arr.every(item => item.age>20)
//   return result;
// }
// console.log(studentAge(students));

