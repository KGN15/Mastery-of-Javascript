//todo 1. Data Analysis
// ?নিচের student data থেকে class average বের করো:

// const students = [
//   { name: "A", marks: { math: 80, eng: 70, sci: 90 } },
//   { name: "B", marks: { math: 60, eng: 50, sci: 65 } },
//   { name: "C", marks: { math: 90, eng: 85, sci: 80 } },
// ];

// const students = [
//   { name: "A", marks: { math: 80, eng: 70, sci: 90 } },
//   { name: "B", marks: { math: 60, eng: 50, sci: 65 } },
//   { name: "C", marks: { math: 90, eng: 85, sci: 80 } },
// ];
// const totalSubjects = students.length * 3;

// const allMark = students.reduce(function (col, val) {
//   let  sumMarks = Object.values(val.marks).reduce((a, b) => a + b, 0);
//   return col + sumMarks
// }, 0);

// let classAvreger = allMark / totalSubjects;

//?প্রতিটি student এর total marks বের করো।
// const students = [
//   { name: "A", marks: { math: 80, eng: 70, sci: 90 } },
//   { name: "B", marks: { math: 60, eng: 50, sci: 65 } },
//   { name: "C", marks: { math: 90, eng: 85, sci: 80 } },
// ];
// const totalSubjects = students.length * 3;

// const allMark = students.reduce(function (col, val) {
//   let  sumMarks = Object.values(val.marks).reduce((a, b) => a + b, 0);
//   return col + sumMarks
// }, 0);

// todo 2. Data Transformation
//?একটা object array কে শুধু নামের array তে convert করো।
// let Freends = [
//     {name: 'Rohan', age: 13},
//     {name: 'Zihad', age: 14},
//     {name: 'Ratul', age: 13},
// ]
// let newSTR = Freends.map(function(val){
//     return val.name;
// })

//?একটা array থেকে duplicate object remove করো (id অনুযায়ী)।
// const users = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" },
//   { id: 3, name: "C" },
// ];
// let ids = new Set();
// let uqnicID = []
// for(let user of users){
//     if(!ids.has(user.id)){
//         ids.add(user.id);
//         uqnicID.push(user);
//     }
// }
// console.log(uqnicID)

//?nested object থেকে সব value বের করে flat array বানাও।
// const data = {
//   a: 1,
//   b: {
//     b1: 2,
//     b2: {
//       b21: 3,
//       b22: 4,
//     },
//   },
//   c: 5,
// };
// function getValus(obj){
//     let resalt = []
//     for (let key in obj){
//         if(typeof obj[key] === 'object' && obj[key] !== null){
//             resalt = resalt.concat(getValus(obj[key]));
//         }else{
//             resalt.push(obj[key])
//         }
//     }
//     return resalt
// }

// let flatArray = getValus(data);

//todo 3. Functional Logic
//?একটা function বানাও যেটা সব student এর average mark রিটার্ন করবে।
// let student = [
//   { name: "baba tillu", mark: 20 },
//   { name: "Kallu badmsh", mark: 50 },
//   { name: "Brenrod", mark: 10 },
//   { name: "Chinku", mark: 93 },
// ];
// function getAverge(val) {
//   let allMark = val.reduce(function (col, val) {
//     return col + val.mark;
//   }, 0);
//   return allMark / student.length;
// }

//?একটা function বানাও যেটা একটা object কে key অনুযায়ী সাজাবে (alphabetically)।
// function shortOBJ(obj) {
//   let keys = Object.keys(obj);
//   keys.sort();
//   let newOBJ = {};
//   for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
//     newOBJ[key] = obj[key];
//   }
//   return newOBJ;
// }

// let valuOBJ = {
//   c: 1,
//   z: 4,
//   b: 3,
//   a: 2,
//   s: 8,
// };
// console.log(shortOBJ(valuOBJ))

//?একটা function বানাও যেটা array কে chunk করে ভাগ করবে (যেমন ১০ আইটেমের array কে ৫+৫ ভাগে ভাগ করা)।

// function chunkDivider ( arr, size ){
//     let result = []
//     for(let i =  0; i<arr.length; i += size){
//         let chunk = arr.slice(i, i + size)
//         result.push(chunk)
//     }
//     return result
// }
// let array = [1,2,3,4,5,6,7,8,9,10]
// console.log(chunkDivider(array, 5))


//todo 4. Real Project Simulation
//?একটা mini banking system বানাও যেখানে multiple user থাকবে।
// let banking = [
//     {name: 'mamu', limit: 1000, deposit: 2322, withdraw: 23288 },
//     {name: 'miakhalifa', limit: 293798974, deposit: 12192921, withdraw: 99887 },
//     {name: 'Ratul', limit: 5659, deposit: 321222, withdraw: 9832 },
//     {name: 'kalu', limit: 2831, deposit: 8889, withdraw: 9238 },
//     {name: 'Zihad', limit: 293128, deposit: 2332, withdraw: 1328 },
//     {name: 'Rohan', limit: 2388, deposit: 2322, withdraw: 9118 },
// ];
// function findUser(name){
//     return banking.find(user => user.name === name)
// } 
// function deposit(name, amount){
//     let user = findUser(name);
//     if(!user ) return console.log('User  not Faund re vai.........! pristha namber chudling pong')
//     user.deposit += amount;
// console.log(`${name} deposited ${amount}. New deposit total = ${user.deposit}`)
// }
// function withdraw(name, amount){
//     let user = findUser(name);
//     if(!user ) return console.log('User  not Faund re vai.........! pristha namber chudling pong')
//     user.withdraw -= amount;
// console.log(`${name} withdraw ${amount}. New withdraw total = ${user.withdraw}`)
// }


//todo 5. Complex Logic
//?একটা function বানাও যেটা sentence থেকে সবচেয়ে বেশি ব্যবহৃত শব্দ বের করবে।
// function mostUsewdWord(sentence){
//     let words = sentence.toLowerCase().split(" ");
//     let count = {}
//     for(let i =0; i<words.length; i++){
//         let word =words[i];
//         if(count[word]){
//             count[word]++
//         }else{
//             count[word] = 1
//         }
//     }
//     let maxWord = ""
//     let maxCount = 0;
//     for(let word in count){
//         if(count[word]> maxCount){
//             maxWord = word
//             maxCount = count[word]
//         }
//     }
//     return  `${maxWord} (${maxCount} times)`;
// }
// let str = 'Chudling pong is our bidrohi vasha in our contry.'
// mostUsewdWord(str)


//?একটা function বানাও যেটা array তে duplicate item কয়বার এসেছে তা গণনা করবে।
// function countDuplicates(arr) {
//   let count = {};
//   arr.forEach(v => count[v] = (count[v] || 0) + 1);
//   return count;
// }


// let nums = [1, 2, 2, 3, 3, 3, 4];
// console.log(countDuplicates(nums));


//?একটা function বানাও যেটা object array এর average salary বের করবে।
// function averageSalary(arr) {
//   let total = arr.reduce((a, v) => a + v.salary, 0);
//   return total / arr.length;
// }

// let employees = [
//   {name: "A", salary: 30000},
//   {name: "B", salary: 50000},
//   {name: "C", salary: 40000}
// ];
// console.log(averageSalary(employees));


//?একটা function বানাও যেটা বড় string কে নির্দিষ্ট দৈর্ঘ্যে ভাগ করবে।
// function splitString(str, size) {
//   let result = [];
//   for (let i = 0; i < str.length; i += size) {
//     result.push(str.slice(i, i + size));
//   }
//   return result;
// }


// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(splitString(text, 5));


//?একটা function বানাও যেটা array এর element গুলো shuffle করে random করে দেবে।
// function shuffle(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let r = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[r]] = [arr[r], arr[i]];
//   }
//   return arr;
// }


// let items = [1, 2, 3, 4, 5, 6];
// console.log(shuffle(items));

//?একটা mini leaderboard বানাও যেখানে top ৩ scorer প্রিন্ট করবে।
// function topThree(arr) {
//   return arr.sort((a, b) => b.score - a.score).slice(0, 3);
// }


// let players = [
//   {name: "Rohan", score: 88},
//   {name: "Afnan", score: 95},
//   {name: "Siam", score: 76},
//   {name: "Nayeem", score: 99},
//   {name: "Jahid", score: 82}
// ];

// console.log(topThree(players));

