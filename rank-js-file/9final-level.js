// ==========================
// 👑 Grand Master Rank – Ultimate JavaScript Challenge Solutions
// ==========================

// --------------------------
// 1️⃣ Student Report Management System
// --------------------------
function studentReport(students) {
  const result = students.map(s => {
    const total = s.marks.reduce((a,b)=>a+b,0);
    const avg = total / s.marks.length;
    let grade;
    if(avg < 33) grade = "F";
    else if(avg>=80) grade="A";
    else if(avg>=60) grade="B";
    else if(avg>=40) grade="C";
    else grade="D";
    return { name: s.name, roll: s.roll, average: avg.toFixed(2), grade };
  });
  const gradeOrder = {A:1,B:2,C:3,D:4,F:5};
  result.sort((a,b)=> gradeOrder[a.grade]-gradeOrder[b.grade]);
  return result;
}

// --------------------------
// 2️⃣ E-Commerce Inventory Manager
// --------------------------
function inventoryManager(inventory) {
  const totalValue = inventory.filter(p=>p.stock>0).reduce((sum,p)=>sum+p.price,0);
  const outOfStock = inventory.filter(p=>p.stock===0).map(p=>p.name);
  const maxPriceProduct = inventory.reduce((max,p)=>p.price>max.price?p:max,{price:0});
  return { totalValue, outOfStock, maxPriceProduct };
}

// --------------------------
// 3️⃣ Employee Performance Tracker
// --------------------------
function employeePerformance(employees) {
  const avgSales = employees.reduce((sum,e)=>sum+e.sales,0)/employees.length;
  const topPerformers = employees.filter(e=>e.sales>avgSales).map(e=>e.name);
  const lowest = employees.reduce((min,e)=>e.sales<min.sales?e:min);
  return { avgSales, topPerformers, lowestPerformer: lowest.name };
}

// --------------------------
// 4️⃣ Bank Transaction Analyzer
// --------------------------
function bankAnalyzer(transactions) {
  const deposit = transactions.filter(t=>t.type==="deposit").reduce((sum,t)=>sum+t.amount,0);
  const withdraw = transactions.filter(t=>t.type==="withdraw").reduce((sum,t)=>sum+t.amount,0);
  const balance = deposit - withdraw;
  return { deposit, withdraw, balance };
}

// --------------------------
// 5️⃣ Ride Fare System
// --------------------------
function rideFare(distance) {
  if(distance<=10) return distance*25;
  return 10*25 + (distance-10)*20;
}

// --------------------------
// 6️⃣ Tax Calculator
// --------------------------
function calculateTax(income) {
  if(income<=20000) return 0;
  else if(income<=50000) return (income-20000)*0.1;
  else if(income<=100000) return 30000*0.1 + (income-50000)*0.2;
  else return 30000*0.1 + 50000*0.2 + (income-100000)*0.3;
}

// --------------------------
// 7️⃣ JSON Data Merger
// --------------------------
function mergeObjects(arr1,arr2) {
  const map = {};
  [...arr1,...arr2].forEach(item=>{
    if(map[item.id]) map[item.id].quantity += item.quantity;
    else map[item.id]={...item};
  });
  return Object.values(map);
}

// --------------------------
// 8️⃣ Movie Rating Dashboard
// --------------------------
function movieDashboard(movies) {
  const highRated = movies.filter(m=>m.rating>=8);
  const maxRated = movies.reduce((max,m)=>m.rating>max.rating?m:max,{rating:0});
  return { highRated, maxRated };
}

// --------------------------
// 9️⃣ Cart Discount System
// --------------------------
function cartDiscount(total) {
  if(total<5000) return 0;
  else if(total<=10000) return 0.1*total;
  return 0.2*total;
}

// --------------------------
// 10️⃣ Game Leaderboard
// --------------------------
function leaderboard(players) {
  const sorted = [...players].sort((a,b)=>b.score-a.score);
  return sorted.slice(0,3);
}

// --------------------------
// 11️⃣ Task Planner
// --------------------------
function taskPlanner(tasks) {
  const today = new Date();
  const expired = tasks.filter(t=>new Date(t.date)<today).map(t=>t.name);
  const completedCount = tasks.filter(t=>t.completed).length;
  return { expired, completedCount };
}

// --------------------------
// 12️⃣ Math Utility
// --------------------------
function mathUtility(a,b) {
  return { sum:a+b, difference:a-b, product:a*b, division:b!==0?a/b:null };
}

// --------------------------
// 13️⃣ Stock Market Analyzer
// --------------------------
function maxProfit(prices) {
  let min=Infinity, profit=0;
  for(let p of prices){
    if(p<min) min=p;
    profit=Math.max(profit,p-min);
  }
  return profit;
}

// --------------------------
// 14️⃣ Weather Report
// --------------------------
function weatherReport(temps) {
  const total = temps.reduce((a,b)=>a+b,0);
  const avg = total/temps.length;
  const min = Math.min(...temps);
  const max = Math.max(...temps);
  return { avg, min, max };
}

// --------------------------
// 15️⃣ Error Handling System
// --------------------------
function checkNumber(input) {
  if(typeof input!=="number") throw new Error("Input is not a number");
  return input;
}

function safeNumber(input){
  try {
    return checkNumber(input);
  } catch(e){
    return e.message;
  }
}

// --------------------------
// 16️⃣ Factorial Finder
// --------------------------
function factorial(n) {
  if(n<=1) return 1;
  return n*factorial(n-1);
}

// --------------------------
// 17️⃣ Reverse Words
// --------------------------
function reverseWords(sentence) {
  return sentence.split(" ").map(w=>w.split("").reverse().join("")).join(" ");
}

// --------------------------
// 18️⃣ Unique ID Generator
// --------------------------
function generateUniqueIDs(count=10) {
  const set = new Set();
  while(set.size<count){
    set.add(Math.floor(100000+Math.random()*900000));
  }
  return Array.from(set);
}

// --------------------------
// 19️⃣ Deep Object Access
// --------------------------
function deepAccess(obj,key) {
  if(obj.hasOwnProperty(key)) return obj[key];
  for(let k in obj){
    if(typeof obj[k]==="object"){
      const val = deepAccess(obj[k],key);
      if(val!==undefined) return val;
    }
  }
}

// --------------------------
// 20️⃣ Mini Earning Tracker
// --------------------------
function earningTracker(dailyIncome){
  const total = dailyIncome.reduce((a,b)=>a+b,0);
  const avg = total/dailyIncome.length;
  const max = Math.max(...dailyIncome);
  return { total, avg, max };
}

// ==========================
// End of Grand Master Rank JS File
// ==========================
