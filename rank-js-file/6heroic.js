//!🔱 Heroic Rank
//todo 1. Student Management
//?একটা student list তৈরি করো (array of objects) যেখানে name, roll, marks থাকবে।

// let studentList = [
//   {
//     name: "Rohan",
//     Roll: 49,
//     mark: 17,
//   },

//   {
//     name: "Zihad",
//     Roll: 16,
//     mark: 19,
//   },

//   {
//     name: "Ratul",
//     Roll: 21,
//     mark: 17,
//   },
// ];
//?সব student এর গড় marks বের করো।
// let studentList = [
//   { name: "Rohan", Roll: 49, mark: 17 },
//   { name: "Zihad", Roll: 16, mark: 19 },
//   { name: "Ratul", Roll: 21, mark: 17 },
// ];
// let studentTotal = studentList.reduce(function(col,val){
//     return col+val.mark;
// },0)
// let studentAvregeMark = studentTotal / studentList.length

//?সর্বোচ্চ marks পাওয়া student এর নাম প্রিন্ট করো।
// let studentList = [
//   { name: "Rohan", Roll: 49, mark: 17 },
//   { name: "Zihad", Roll: 16, mark: 19 },
//   { name: "Ratul", Roll: 21, mark: 17 },
// ];
// function highTopStudent(val){
//     let top = val[0]
//     for(let i = 1; i<val.length; i++){
//         if(val[i].mark > top.mark){
//             top = val[i]
//         }
//     }
//     return top;
// }

//?৪০ এর নিচে marks পাওয়া student দের বাদ দিয়ে নতুন list বানাও।
// let studentList = [
//   { name: "Rohan", Roll: 49, mark: 17 },
//   { name: "Zihad", Roll: 16, mark: 19 },
//   { name: "Ratul", Roll: 21, mark: 17 },
//   { name: "Mahir", Roll: 1, mark: 99 },//Backbrncher
//   { name: "Boga Mostakim", Roll: 6, mark: 68 },
// ];
// let newStudentList = studentList.filter(function(val){
//     return val.mark >= 40;
// })

//todo 2. Employee Salary System
//?নিচের data ব্যবহার করো:

// const employees = [
//   { name: "Rahim", salary: 20000, bonus: 2000 },
//   { name: "Karim", salary: 25000, bonus: 5000 },
//   { name: "Selim", salary: 18000, bonus: 1000 }
// ];
//? — প্রতিটি কর্মচারীর মোট আয় বের করো।

// const employees = [
//   { name: "Rahim", salary: 20000, bonus: 2000 },
//   { name: "Karim", salary: 25000, bonus: 5000 },
//   { name: "Selim", salary: 18000, bonus: 1000 }
// ];
// let totalSelary = employees.map(function(val){
//     return {
//         name: val.name,
//         TotalIncome: val.salary + val.bonus,
//     }
// })
//?২০,০০০ টাকার বেশি আয় করা কর্মচারীদের নাম প্রিন্ট করো।

// const employees = [
//   { name: "Rahim", salary: 20000, bonus: 2000 },
//   { name: "Karim", salary: 25000, bonus: 5000 },
//   { name: "Selim", salary: 18000, bonus: 1000 }
// ];
// let totalIncome = employees.filter(function(val){
//     return val.salary+val.bonus >= 20000
// })

//?সব salary যোগ করে মোট ব্যয় নির্ধারণ করো।
// const employees = [
//   { name: "Rahim", salary: 20000, bonus: 2000 },
//   { name: "Karim", salary: 25000, bonus: 5000 },
//   { name: "Selim", salary: 18000, bonus: 1000 }
// ];
// let employeesSelary = employees.reduce(function(col,val){
//     return col+val.salary
// },0)

//todo 3. Product Inventory System
//?একটা function বানাও যেটা stock এ থাকা পণ্য গুনে দেবে।
// function cauntStok(val){
//     return val.length
// }
// let prodauct = [
//     {name: 'laptop', Price: 1222,},
//     {name: 'Monitor', Price: 3002,},
//     {name: 'keybord', Price: 922,},
// ]
// cauntStok(prodauct)

//?stock শেষ হয়ে গেলে “Out of Stock” প্রিন্ট করো।

// function cauntStok(val){
//     if(val.length === 0){
//         console.log('Out of Stock')
//     }else{
//         return val.length
//     }

// }
// let prodauct = [
// {name: 'laptop', Price: 1222,},
// {name: 'Monitor', Price: 3002,},
// {name: 'keybord', Price: 922,},
// ]

//?সব product এর দাম ১০% বাড়াও (map ব্যবহার করে)।
// let prodauct = [
//     {name: 'laptop', Price: 1222,},
//     {name: 'Monitor', Price: 3002,},
//     {name: 'keybord', Price: 922,},
// ]
// let incrissProdauct = prodauct.map(function(val){
//     return val.Price * 1.10
// })

//?৫০০ টাকার নিচে দাম থাকা পণ্যগুলো ফিল্টার করো।
// let prodauct = [
//     {name: 'Mause', Price: 350,},
//     {name: 'laptop', Price: 1222,},
//     {name: 'TuchPad', Price: 150,},
//     {name: 'Monitor', Price: 3002,},
//     {name: 'keybord', Price: 922,},
// ]
// let filterProdact = prodauct.filter(function(val){
//     return val.Price >= 500;
// })

//todo 4. Banking Logic
//?একটা bankAccount object বানাও যেখানে balance, deposit(), withdraw() থাকবে।
// let bankAccount = {
//     balance: 100000,
//     deposit: 1222,
//     withdraw: 9888,
// }
//?deposit() ফাংশন কল করলে balance বাড়বে, withdraw() কল করলে কমবে।

// let bankAccount = {
//     balance: 100000,
//     deposit: 1222,
//     withdraw: 9888,
// }
// function deposit(val){
//     let depositAmunt = bankAccount.deposit = bankAccount.deposit + val;
//     return depositAmunt
// }
// function withdraw(val){
//     let withdrawAmunt = bankAccount.withdraw = bankAccount.withdraw - val;
//     return withdrawAmunt
// }

//todo 5. Realistic Logic Challenges
//?একটা function বানাও যেটা একটা sentence থেকে সবচেয়ে বড় শব্দ খুঁজে বের করবে।
// let sentence = "Chudling-pong is a Bidhrohi vasha";
// function sentenceShuter(val) {
//   let shoter = val.split(" ");
//   let logestWord = "";
//   for(let word of shoter){
//     if(word.length > logestWord.length){
//         logestWord = word;
//     }
//   }
//   return logestWord
// }


//?একটা function বানাও যেটা array এর সব সংখ্যার গড় বের করবে।
// let arr = [12,31,2,3,21,212,43,2,1,3,1,21,121,312,12,13,1,21,2,1]
// function arrayAvrege(val){
//     return val.reduce(function(col,val){return col+val;},0)/val.length
// }

//?একটা object array থেকে নির্দিষ্ট key এর মান গুলো একত্র করে array আকারে রিটার্ন করো।
// let users = [
//     { name: 'Rohan', age: 23 },
//     { name: 'Ratul', age: 45 },
//     { name: 'Boga', age: 34 },
// ];
// function pick(arr, key){
//     return arr.map(item => item[key])
// }



//?একটা string থেকে duplicate character বাদ দাও।
// let str  = 'Chudling-pong is a Bidhrohi vasha'
// let newstr = [...new Set(str)].join("");


//?একটা function বানাও যেটা বলে দেবে কোনো সংখ্যা prime কিনা।
// function isPeime(val){
//     if(val <= 1) return false
//     for(let i = 2; i < val; i++ ){
//         if(val%i === 0){
//             return false
//         }
//     }
//     return true;
// }

//?একটা task list বানাও যেখানে “completed” true হলে done হিসেবে দেখাবে, false হলে pending।
// let tasks = [
//     { title: 'Math homework', completed: true },
//     { title: 'Clean room', completed: false },
//     { title: 'Buy groceries', completed: true },
//     { title: 'Watch tutorial', completed: false }
// ];

// function Stetus(val){
//     val.forEach(task => {
//         if(task.completed){
//             console.log(`${task.title}: Done`)
//         }else{
//             console.log(`${task.title}: Pending`)
//         }
//     });
// }


