//!1Bronze

//!1. Variables
//?একটা variable বানাও name নামে এবং তাতে তোমার নাম রাখো, তারপর console এ প্রিন্ট করো।
//?*Ans:

// let name = "Mahir vai";
// console.log(name)

//?দুটি number variable নিয়ে তাদের যোগফল প্রিন্ট করো।
//*Ans:

// let a = 10;
// let b = 1000;
// console.log(a + b);


//?একটা let দিয়ে variable বানাও এবং পরে তার মান পরিবর্তন করো।
//*Ans:
// let  a = 10;
// a = 100;
// console.log(a);

//?const দিয়ে একটা স্থায়ী মান রাখো (যেমন PI = 3.1416)।
//*Ans:
// const PI = 3.1416;
// console.log(PI)

//!2. Data Types

//?String, Number, Boolean, Null, Undefined – প্রতিটা data type এর একটা করে উদাহরণ দাও।
//*Ans:
// //TODo: String
// let String = "Mahir vai";
// //TODo: Number
// let Roll = 13;
// //TODo: Boolean
// let isStudent = true;
// //TODo: Null
// let isMerid = null;
// //TODo: Undefined
// let isHaveBestFrend = undefined;

//? typeof অপারেটর ব্যবহার করে প্রতিটা data type এর type প্রিন্ট করো।
// *ANs:
// //TODo: String
// let userName = "Mahir vai";
// console.log(typeof(userName))
// //TODo: Number
// let Roll = 13;
// console.log(typeof(Roll))
// //TODo: Boolean
// let isStudent = true;
// console.log(typeof(isStudent))
// //TODo: Null
// let isMerid = null;
// console.log(typeof(isMerid))
// //TODo: Undefined
// let isHaveBestFrend = undefined;
// console.log(typeof(isHaveBestFrend))

//? একটা Number কে String এ convert করো (String() ব্যবহার করে)।
//*ANs:
// let num = 10;
// num = num.toString();
// console.log(typeof(num))

//?একটা String কে Number এ convert করো (Number() ব্যবহার করে)।
//*Ans:

// let namTOString = "10";
// namTOString = parseInt(namTOString);
// console.log(namTOString)

//!3. Operators & Condition
//?ইউজার যদি ১৮ বা তার বেশি বয়সের হয়, তাহলে "Adult" নয়তো "Child" প্রিন্ট করো।
//*Ans:

// let user = prompt('Enter your yers');
// if(user >= 18){
//     console.log('Adult')
// }else{
//     console.log('Child')
// }


//?৩টা সংখ্যার মধ্যে সবচেয়ে বড় সংখ্যাটা বের করো।
//*Ans:
// let a = 100;
// let b = 200;
// let c = 102;

// if(a>b){
//     console.log("Asssssssssss")
// }else if (a>c){
//     console.log('a>c')
// }
// else if ( b>a ){
//     console.log(' b>a ')
// }
// else if ( b>c ){
//     console.log(' b>c ')
// }
// else if (c>a  ){
//     console.log(' c>a  ')
// }
// else if ( c>b ){
//     console.log(' c>b ')
// }
// else{
//     console.log('maderchod')
// }


//?একটা সংখ্যা even না odd তা নির্ধারণ করো।
//*Ans:
// let a = 12189;
// let b = 12922;

// if (a%2 === 0){
//     console.log("a is even")
// }
// if (a%3 === 0){
//     console.log("a is odd")
// }

// if (b%2 === 0){
//     console.log("b is even")
// }
// if (b%3 === 0){
//     console.log("b is odd")
// }

//?Ternary Operator ব্যবহার করে "Pass" বা "Fail" প্রিন্ট করো (marks >= 40 হলে Pass)।
//*Ans:
// let userFrom = Number(prompt('Enter your marks'));

// if (userFrom > 100 || userFrom < 0) {
//   alert('Enter a valid number for marks');
// } else if (userFrom > 80) {
//   console.log('A+');
// } else if (userFrom > 70) {
//   console.log('B+');
// } else if (userFrom > 60) {
//   console.log('C+');
// } else if (userFrom > 50) {
//   console.log('D+');
// } else if (userFrom > 40) {
//   console.log('E+');
// } else {
//   console.log('F');
// }

//!4. Loops
//?১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করো for loop দিয়ে।
//*Ans:
// for(let i = 1; i<=10; i++){
//     console.log(i)
// }

//?১০ থেকে ১ পর্যন্ত প্রিন্ট করো while loop দিয়ে।
//*Ans:
// let i = 10;
// while(i>=1){
//     console.log(i)
//     i--;
// }

//? ১ থেকে ২০ এর মধ্যে শুধুমাত্র even সংখ্যা প্রিন্ট করো।
//*Ans:
// for(let i = 1; i <=20; i++){
//     if(i%2 === 0){
//         console.log(i)
//     }
// }

//?একটা array এর সব element প্রিন্ট করো loop দিয়ে।
//*Ans:
// let arr = [1,2,3,4,6,7,8,5,4]
// arr.forEach(function(val){
//     console.log(val)
// })


//? একটা function বানাও greet(name) নামে, যেটা বলবে “Hello, name!”.
//*Ans:
// function greet(name){
//     console.log('Hello', name + "!")
// }
// greet("Mahi")

//?একটা function বানাও যেটা দুইটা সংখ্যা যোগ করে রিটার্ন করবে।
// function plus(a,b){
//     return a+b
// }
// console.log(plus(1,2))

//?একটা function বানাও যেটা একটা সংখ্যা square করে রিটার্ন করবে।
// function malti(a){
//     return a * a;
// }
// console.log(malti(10))

//?একটা function বানাও যেটা চেক করবে কোনো সংখ্যা ৫ দ্বারা বিভাজ্য কিনা।
// let user  = Number(prompt("Enter a Number"))
// function mod(){
//     if(user%5 === 0){
//         console.log('৫ দ্বারা বিভাজ্য')
//     }else{
//         console.log('৫ দ্বারা বিভাজ্য na')
//     }
// }
// mod();