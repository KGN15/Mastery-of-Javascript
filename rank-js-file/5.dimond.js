//!💠 Diamond Rank
//todo 1. Logic & Structure
//?একটা function বানাও findMax(arr) — যেটা array থেকে সবচেয়ে বড় সংখ্যাটা রিটার্ন করবে।
// let array = [12,3,12,3,12,4,78,57]

// function findMax(arr){
//     return Math.max(...arr);
// }
// let a = findMax(array)

//?একটা function বানাও findMin(arr) — যেটা সবচেয়ে ছোট সংখ্যাটা বের করবে।
// let array = [12,3,12,3,12,4,78,57]

// function findMax(arr){
//     return Math.min(...arr);
// }
// let a = findMax(array)

//?একটা function বানাও countEven(arr) — যেটা array এর even সংখ্যাগুলোর সংখ্যা রিটার্ন করবে।

// let arr = [12, 3, 42, 21, 3, 4, 24, 7777, 58, 54, 34, 46, 5434, 5];

// function countEven(val) {
//   for (let i = 0; i < val.length; i++) {
//     if (val[i] % 2 === 0) {
//       console.log(val[i]);
//     }
//   }
// }
// countEven(arr);

//?কটা function বানাও যেটা array এর সব element এর যোগফল রিটার্ন করবে।
// let arr = [12, 3, 42, 21, 3, 4, 24, 7777, 58, 54, 34, 46, 5434, 5];

// function totalPlus(val){
//     return val.reduce(function(col, valu){
//         return col + valu;
//     })
// }
// let totalPluss = totalPlus(arr);

//todo 2. Array + Object Combo
//?নিচের array থেকে মোট কতজন পাস করেছে তা বের করো:

// const students = [
//   { name: "A", marks: 60 },
//   { name: "B", marks: 35 },
//   { name: "C", marks: 80 },
//   { name: "D", marks: 45 }
// ];
// 40 বা তার বেশি হলে Pass
// const students = [
//   { name: "A", marks: 60 },
//   { name: "B", marks: 35 },
//   { name: "C", marks: 80 },
//   { name: "D", marks: 45 },
// ];
// let totalPass = students.filter(s => s.marks>= 40).length

//?যারা fail করেছে তাদের নাম প্রিন্ট করো।

// const students = [
//   { name: "A", marks: 60 },
//   { name: "B", marks: 35 },
//   { name: "C", marks: 80 },
//   { name: "D", marks: 45 }
// ];

// let totalPass = students.filter(s => s.marks < 40).length

//?pass করা student দের average marks বের করো।

// const students = [
//   { name: "A", marks: 60 },
//   { name: "B", marks: 35 },
//   { name: "C", marks: 80 },
//   { name: "D", marks: 45 },
// ];
// let totalPass = students.filter((s) => s.marks >= 40).length;
// let totalPassMArksArr = students.filter((s) => {
//   if (s.marks >= 40) {
//     return s;
//   }
// });

// let totalPassMArksArrS = totalPassMArksArr[0].marks +
//   totalPassMArksArr[1].marks +
//   totalPassMArksArr[2].marks;

// let totalPassMArksModify = totalPassMArksArrS / totalPassMArksArr.length;

//?একটা function বানাও যেটা object array ইনপুট হিসেবে নিয়ে সর্বোচ্চ marks পাওয়া student রিটার্ন করবে।

// const students = [
//   { name: "A", marks: 60 },
//   { name: "B", marks: 35 },
//   { name: "C", marks: 80 },
//   { name: "D", marks: 45 },
//   { name: "E", marks: 100 },
// ];
// function toper(val){
//     let top = val[0]
//     for(let i = 1; i<val.length; i++){
//         if(val[i].marks > top.marks){
//             top = val[i]
//         }
//     }
//     return top;
//
// let a = toper(students)

//todo 3. Real-Life Mini Projects

// একটা shopping cart array বানাও:

// const cart = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 1000 },
//   { name: "Keyboard", price: 2000 }
// ];
// — সব পণ্যের মোট দাম বের করো।

// const cart = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 1000 },
//   { name: "Keyboard", price: 2000 },
// ];
// let totalPrise = cart.reduce(function(col,val){
//     return col+ val.price
// },0)

//?যদি কারো বাজেট ৫২০০০ হয়, তাহলে সে কোন পণ্যগুলো কিনতে পারবে তা নির্ধারণ করো।

// const cart = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 1000 },
//   { name: "Keyboard", price: 2000 }
// ];
// let budget = 52000;
// let bujet = cart.filter(function(val){
//     return val.price < budget
// }).map(function(val){
//     return val.name
// }).forEach(function(val){
//     console.log(val)
// })

//?সবচেয়ে দামী পণ্য কোনটি তা খুঁজে বের করো।
// const cart = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 1000 },
//   { name: "Keyboard", price: 2000 },
// ];
// function high(val) {
//   let top = val[0];
//   for (let i = 1; i < val.length; i++) {
//     if (val[i].price > top.price ) {
//       top = val[i];
//     }
//   }
//   return top;
// }

//?একটা product list এ যেসব পণ্যের দাম ২০০০ টাকার বেশি, সেগুলো ফিল্টার করো।
// const cart = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 1000 },
//   { name: "Keyboard", price: 2000 },
// ];
// let budget = 2000
// let productList = cart.filter(function(val){
//     return budget < val.price
// })

//todo 4. String + Logic
//?একটা sentence থেকে শব্দের সংখ্যা বের করো।
// let sentence = 'Bangladesh is My Cuntry. I Love Not Banglades😁 I Love saudi ara💝';
// let sentenceWrod = sentence.split(" ");
// console.log(sentenceWrod.length)

//?একটা string palindrome কিনা তা যাচাই করো।
// let userinput = prompt("Enter A Text")
// function ispalindrome(val){
//     let revers = val.split("").reverse().join('');
//     console.log(val === revers)
// }
// ispalindrome(userinput)

//?একটা function বানাও যেটা string থেকে vowel গুলো গণনা করবে।
// let str = 'The Chudling pog is a bdrohi language '
// function cauntVowel(str){
//     return str.split("").filter(cher => 'aeiouAEIOU'.includes(cher)).length
// }
// console.log(cauntVowel(str))

//?একটা sentence কে reverse করো।
// let str = 'The Chudling pog is a bdrohi language '
// let newstr = str.split("").reverse().join("")

//todo 5. Mixed Challenge
//?একটা object array এ status property আছে (true/false)। শুধু true status গুলো ফিল্টার করো।

// let tasks = [
//   { id: 1, name: "Wash dishes", status: true },
//   { id: 2, name: "Do homework", status: false },
//   { id: 3, name: "Play game", status: true },
// ];

// let completTask = tasks.filter(task => task.status === true);

//?একটা array থেকে duplicate element গুলো বাদ দাও।

// let arr = [12,31,3,12,3,31,2,1,3,1,21,21,2]
// let newarr = [...new Set(arr)]


//?একটা function বানাও যেটা ১ থেকে N পর্যন্ত সংখ্যার factorial রিটার্ন করবে।

// function factorial(val){
//     let result = 1;
//     for(let i = 1; i <= val; i++){
//         result *= i;

//     }
//     return result;
// }
// factorial()


//?একটা function বানাও যেটা number এর digit গুলোর যোগফল বের করবে (যেমন 123 → 1+2+3 = 6)।


// function adition(val){
//     return val.toString().split("").reduce((acc, digit) => acc + Number(digit), 0);
// }


