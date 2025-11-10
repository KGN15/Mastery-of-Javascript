//!🏆 Grand Master Rank
//todo 1. Student Report Generator
// ?একটা function বানাও যেটা student list নেয় (name, subjects, marks) এবং প্রতিটি student এর average ও grade (A/B/C/F) রিটার্ন করে।
// function calculateResults(students) {
//   return students.map(student => {
//     const total = student.marks.reduce((sum, m) => sum + m, 0);
//     const count = student.marks.length;
//     const average = total / count;
//     let grade;
//     if (average >= 80) grade = "A";
//     else if (average >= 60) grade = "B";
//     else if (average >= 40) grade = "C";
//     else grade = "F";

//     return {
//       name: student.name,
//       average: average.toFixed(2),
//       grade: grade,
//     };
//   });
//     const gradeOrder = { A: 1, B: 2, C: 3, F: 4 };
//  result.sort((a, b) => gradeOrder[a.grade] - gradeOrder[b.grade]);
//  return  result;
// }

//?সবাইকে grade অনুযায়ী সাজাও (A highest)।

// function calculateResults(students) {
//   return students.map(student => {
//     const total = student.marks.reduce((sum, m) => sum + m, 0);
//     const count = student.marks.length;
//     const average = total / count;
//     let grade;
//     if (average >= 80) grade = "A";
//     else if (average >= 60) grade = "B";
//     else if (average >= 40) grade = "C";
//     else grade = "F";

//     return {
//       name: student.name,
//       average: average.toFixed(2),
//       grade: grade,
//     };
//   });
//     const gradeOrder = { A: 1, B: 2, C: 3, F: 4 };
//  result.sort((a, b) => gradeOrder[a.grade] - gradeOrder[b.grade]);
//  return  result;
// }

//?fail করা student দের নাম লিস্ট আকারে দেখাও।
// function getFailedStudents(students) {
//   const results = calculateResults(students);
//   const failed = results
//     .filter(stu => stu.grade === "F")
//     .map(stu => stu.name);
//   return failed;
// }

//todo 2. Product Inventory Dashboard
//?নিচের data ব্যবহার করো:

// const products = [
//   { id: 1, name: "Laptop", price: 50000, stock: 3 },
//   { id: 2, name: "Mouse", price: 1000, stock: 10 },
//   { id: 3, name: "Keyboard", price: 2000, stock: 0 },
//   { id: 4, name: "Monitor", price: 15000, stock: 5 }
// ];
// সব product এর মোট মূল্য বের করো।
// যেগুলোর stock ০, সেগুলো “Out of Stock” হিসেবে দেখাও।
// price অনুযায়ী descending order এ sort করো।

// const products = [
//   { id: 1, name: "Laptop", price: 50000, stock: 3 },
//   { id: 2, name: "Mouse", price: 1000, stock: 10 },
//   { id: 3, name: "Keyboard", price: 2000, stock: 0 },
//   { id: 4, name: "Monitor", price: 15000, stock: 5 },
// ];

// const totalPrice = products.reduce((sum, p) => sum + p.price, 0);

// const updatedProducts = products.map((p) => ({
//   ...p,
//   status: p.stock === 0 ? "Out of Stock" : "Available",
// }));

// const sortedProducts = [...updatedProducts].sort((a, b) => b.price - a.price);

// console.log("Total Price:", totalPrice);
// console.log("Updated Products:", updatedProducts);
// console.log("Sorted Products:", sortedProducts);



//todo 3. Employee Performance Tracker
//?একটা function বানাও যেটা নিচের data বিশ্লেষণ করবে:

// const employees = [
//   { name: "A", sales: 120 },
//   { name: "B", sales: 200 },
//   { name: "C", sales: 180 },
//   { name: "D", sales: 90 }
// ];
// গড় sales বের করো।
// যাদের sales গড়ের বেশি, তাদের নাম দেখাও “Top Performer” হিসেবে।
// সবচেয়ে কম পারফর্মার কে তা নির্ধারণ করো।


// function analyzeEmployees(employees) {
//   const totalSales = employees.reduce((sum, emp) => sum + emp.sales, 0);
//   const average = totalSales / employees.length;
//   const topPerformers = employees
//     .filter(emp => emp.sales > average)
//     .map(emp => emp.name);
//   const lowestPerformer = employees.reduce((min, emp) =>
//     emp.sales < min.sales ? emp : min
//   );

//   return {
//     averageSales: average,
//     topPerformers,
//     lowestPerformer: lowestPerformer.name
//   };
// }


//todo 4. Financial Calculation System
//?একটা bank transaction array তৈরি করো যেখানে প্রতিটি entry তে amount, type (‘deposit’/‘withdraw’) থাকবে।

// const transactions = [
//   { amount: 5000, type: "deposit" },
//   { amount: 1200, type: "withdraw" },
//   { amount: 3000, type: "deposit" },
//   { amount: 800, type: "withdraw" },
//   { amount: 15000, type: "deposit" }
// ];


//?সব deposit এর যোগফল এবং সব withdraw এর যোগফল আলাদা করে বের করো।
// const transactions = [
//   { amount: 5000, type: "deposit" },
//   { amount: 1200, type: "withdraw" },
//   { amount: 3000, type: "deposit" },
//   { amount: 800, type: "withdraw" },
//   { amount: 15000, type: "deposit" }
// ];

// function calculateTotals(transactions) {
//   let totalDeposit = 0;
//   let totalWithdraw = 0;

//   transactions.forEach(t => {
//     if (t.type === "deposit") {
//       totalDeposit += t.amount;
//     } else if (t.type === "withdraw") {
//       totalWithdraw += t.amount;
//     }
//   });

//   return { totalDeposit, totalWithdraw };
// }

// console.log(calculateTotals(transactions));


//?মোট balance রিটার্ন করো।
// function getBalance(transactions) {
//   let balance = 0;

//   transactions.forEach(t => {
//     if (t.type === "deposit") {
//       balance += t.amount;
//     } else if (t.type === "withdraw") {
//       balance -= t.amount;
//     }
//   });

//   return balance;
// }


//?balance যদি negative হয়ে যায়, তাহলে “⚠️ Low Balance Warning” দেখাও।
// function getBalance(transactions) {
//   let balance = 0;

//   transactions.forEach(t => {
//     if (t.type === "deposit") {
//       balance += t.amount;
//     } else if (t.type === "withdraw") {
//       balance -= t.amount;
//     }
//   });
//   if (balance < 0) {
//     return "⚠️ Low Balance Warning";
//   }

//   return balance;
// }


//todo 5. Data Analytics + Logic
//?একটা array থেকে unique item frequency count করো (যেমন [‘a’, ‘b’, ‘a’, ‘c’] → a=2, b=1, c=1)।
// function getFrequency(arr) {
//   const freq = {};

//   arr.forEach(item => {
//     freq[item] = (freq[item] || 0) + 1;
//   });

//   return freq;
// }


//?একটা বড় object থেকে নির্দিষ্ট key (deep nested) safe ভাবে access করো optional chaining দিয়ে।
// const data = {
//   user: {
//     profile: {
//       name: "Rakib",
//       address: {
//         city: "Dhaka",
//         zip: 1207
//       }
//     },
//     preferences: {
//       theme: "dark"
//     }
//   }
// };
// const city = data.user?.profile?.address?.city;

// const country = data.user?.profile?.address?.country;


//?একটা function বানাও যেটা array কে ascending এবং descending দুইভাবে sort করতে পারে (parameter দিয়ে নির্ধারণ করবে)।
// function sortArray(arr, order = "asc") {
//   const sorted = [...arr];

//   if (order === "asc") {
//     sorted.sort((a, b) => a - b); 
//   } else if (order === "desc") {
//     sorted.sort((a, b) => b - a); 
//   } else {
//     throw new Error("Invalid order parameter. Use 'asc' or 'desc'.");
//   }

//   return sorted;
// }


//?একটা function বানাও যেটা বড় array optimize করে pagination আকারে ভাগ করবে।
// function paginate(array, pageSize, pageNumber) {

//   const start = (pageNumber - 1) * pageSize;
//   const end = start + pageSize;

//   return array.slice(start, end);
// }


//?একটা system বানাও যেটা error ধরতে পারে try-catch দিয়ে এবং proper message দেখায়।
// function safeExecute(fn) {
//   try {
//     const result = fn();
//     return {
//       success: true,
//       result
//     };
//   } catch (error) {
//     return {
//       success: false,
//       message: error.message,
//       stack: error.stack 
//     };
//   }
// }



//?একটা simple todo app logic বানাও — addTask, removeTask, markCompleted ফাংশনসহ।
// Todo List Array
// const todoList = [];

// function addTask(taskName) {
//   const task = {
//     id: Date.now(), 
//     name: taskName,
//     completed: false
//   };
//   todoList.push(task);
//   return task;
// }


// function removeTask(taskId) {
//   const index = todoList.findIndex(t => t.id === taskId);
//   if (index !== -1) {
//     return todoList.splice(index, 1)[0];
//   }
//   return null; 
// }


// function markCompleted(taskId) {
//   const task = todoList.find(t => t.id === taskId);
//   if (task) {
//     task.completed = true;
//     return task;
//   }
//   return null; 
// }

// function getTasks() {
//   return todoList;
// }


//?সব data localStorage এর মতো একটা simulated object এ সংরক্ষণ করো (store, get, delete)।
// const myStorage = (function() {

//   const storage = {};

//   return {

//     setItem: function(key, value) {
//       storage[key] = JSON.stringify(value); 
//     },


//     getItem: function(key) {
//       if (storage.hasOwnProperty(key)) {
//         return JSON.parse(storage[key]);
//       }
//       return null;
//     },

//     removeItem: function(key) {
//       if (storage.hasOwnProperty(key)) {
//         delete storage[key];
//       }
//     },

//     clear: function() {
//       for (let key in storage) {
//         delete storage[key];
//       }
//     },

//     keys: function() {
//       return Object.keys(storage);
//     }
//   };
// })();



