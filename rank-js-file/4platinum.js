//!Platinum Rank
//todo 1. Object Basics
//?একটা object বানাও যেখানে তোমার নাম, বয়স, ও শহরের নাম থাকবে।
// let profile = {
//     name: 'Mashudur',
//     old: 14,
//     City: Gajipur,
// }
//?ওই object থেকে শুধু নাম প্রিন্ট করো।
// let profile = {
//     name: 'Mashudur',
//     old: 14,
//     City: 'Gajipur',
// }
// console.log(profile.name)

//?object এর মধ্যে একটা নতুন property যোগ করো (যেমন country: "Bangladesh")।
// let profile = {
//     name: 'Mashudur',
//     old: 14,
//     City: 'Gajipur',
// }
// profile.country = "Bangladesh"

//?কোনো property এর মান পরিবর্তন করো।
// let profile = {
//     name: 'Mashudur',
//     old: 14,
//     City: 'Gajipur',
// }
// profile.name = 'Mahir vai'

//?object এর সব key প্রিন্ট করো (Object.keys() ব্যবহার করে)।

// let profile = {
//     name: 'Mashudur',
//     old: 14,
//     City: 'Gajipur',
// }
// let objPrint = Object.keys(profile).forEach(function(val){
//     console.log(val)
// })

//?object এর সব value প্রিন্ট করো (Object.values() ব্যবহার করে)।
// let profile = {
//     name: 'Mashudur',
//     old: 14,
//     City: 'Gajipur',
// }
// let objPrint = Object.values(profile).forEach(function(val){
//     console.log(val)
// });

//todo 2. Nested Objects

//?একটা nested object বানাও যেমন:

//? const student = {
//?   name: "Mashud",
//?   marks: { math: 85, english: 78 }
//? };
//  ?  তারপর math এর marks প্রিন্ট করো।

// const student = {
//   name: "Mashud",
//   marks: { math: 85, english: 78 },
// };
// let newlist = student.marks.math

//?nested object এ একটা নতুন subject যোগ করো।

// const student = {
//   name: "Mashud",
//   marks: { math: 85, english: 78 },
// };
// student.subject = "Sichc";

//?nested object এর সব marks এর যোগফল বের করো।

// const student = {
//   name: "Mashud",
//   marks: { math: 85, english: 78 },
// };
// student.subject = "Sichc";

// let mathMark = student.marks.math;
// let englishMark = student.marks.english;
// let totalmarks = mathMark + englishMark;

//todo 3. Array of Objects
//?নিচের array ব্যবহার করো:
// const users = [
//   { name: "A", age: 18 },
//   { name: "B", age: 22 },
//   { name: "C", age: 16 }
// ];
// — ১৮ বা তার বেশি বয়সের ইউজারদের filter করে বের করো।
// const users = [
//   { name: "A", age: 18 },
//   { name: "B", age: 22 },
//   { name: "C", age: 16 }
// ];
// let newuser = users.filter(function(val){
//     return val.age >= 18;
// })

//? 11. সব ইউজারের নাম প্রিন্ট করো।

// const users = [
//   { name: "A", age: 18 },
//   { name: "B", age: 22 },
//   { name: "C", age: 16 }
// ];

// let a = users[0].name;
// let b = users[1].name;
// let c = users[2].name;

// let allNames = [a,b,c]

// let FinalList = allNames.forEach(function(val){
//     console.log(val)
// })

//? 12. একটা ইউজার object খুঁজে বের করো যার নাম “B”।
// const users = [
//   { name: "A", age: 18 },
//   { name: "B", age: 22 },
//   { name: "C", age: 16 }
// ];

// let objB = users[1];

//? 13. নতুন একটা ইউজার {name: "D", age: 25} যোগ করো।

// const users = [
//   { name: "A", age: 18 },
//   { name: "B", age: 22 },
//   { name: "C", age: 16 }
// ];
// let newuser = users[3] = {name: "D", age: 25};

//todo 4. Logic with Objects
//?একটা object বানাও যেখানে পণ্যের দাম থাকবে, তারপর total cost বের করো।
// let prodact = {
//   Oil: 100,
//   rice: 400,
//   frut: 500,
//   vegiteble: 140,
// };
// let p1 = prodact.Oil;
// let p2 = prodact.rice;
// let p3 = prodact.frut;
// let p4 = prodact.vegiteble;

// let List = [p1, p2, p3, p4];

// let totalCost = List.reduce(function (col, val) {
//   return col + val;
// },0);

//?একটা function বানাও যেটা object ইনপুট হিসেবে নিয়ে তার key-value জোড়া গুলো প্রিন্ট করবে।
// function factory(obj){
//     for(let key in obj){
//         console.log(key + ' : ' + obj[key])
//     }
// }
// const product = {
//   name: "Oil",
//   price: 100,
//   quantity: 2,
//   brand: "Fresh"
// };
// factory(product)

//?একটা student list (array of objects) থেকে গড় (average) marks বের করো।

// let studentArr = [
//     {name: 'Rohan', mark:23,},
//     {name: 'Ratul', mark:45,},
//     {name: 'Boga Mostakim', mark:34,},
//     {name: 'Zihad', mark:78,},
//     {name: 'Mahir vai', mark:9999,},
// ]

// let marks = studentArr[0].mark + studentArr[1].mark + studentArr[2].mark + studentArr[3].mark + studentArr[4].mark;

// let averageMarks = marks / studentArr.length;


//?একটা object এ কতগুলো key আছে সেটা গণনা করো।

// let obj = {
//     name: 'Mahi',
//     roll: 13,
//     cantry: 'Bangladesh',
//     location: 'gajipur',
// }
// let totalKey = Object.keys(obj).length

//?nested object থেকে নির্দিষ্ট একটা মান safely access করো (optional chaining ?. ব্যবহার করে)।

// const student = {
//   name: "Rohan",
//   marks: {
//     math: 80,
//     english: 70
//   }
// };
// let studentARR = student.adreess?.loceatin


//একটা object কে JSON string এ convert করো (JSON.stringify())।
// const student = {
//   name: "Rohan",
//   marks: {
//     math: 80,
//     english: 70
//   }
// };

// let safelyST = JSON.stringify(student)

//?JSON string কে আবার object এ convert করো (JSON.parse())।


// const student = {
//   name: "Rohan",
//   marks: {
//     math: 80,
//     english: 70
//   }
// };

// let safelyST = JSON.parse(JSON.stringify(student));
