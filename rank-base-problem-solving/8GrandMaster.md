# 🏆 Grand Master Rank – Final Boss Level (Project Simulation + Optimization)

**Description:**
এটাই তোমার শেষ লেভেল। এখানে থাকবে full project-style challenges, যেখানে logic, data structure, error handling, optimization, সব একসাথে ব্যবহার করতে হবে।
এই লেভেল তোমাকে বাস্তব developer হিসেবে চিন্তা করা শেখাবে।

---

## 🧠 Level Goals

* Full project simulation with JS
* Combining arrays, objects, loops, and functions
* Handling errors & edge cases
* Thinking like a professional developer

---

## 🧩 Problems (20 Total)

### 1. Student Report Generator

1. একটা function বানাও যেটা student list নেয় (name, subjects, marks) এবং প্রতিটি student এর average ও grade (A/B/C/F) রিটার্ন করে।
2. সবাইকে grade অনুযায়ী সাজাও (A highest)।
3. fail করা student দের নাম লিস্ট আকারে দেখাও।

---

### 2. Product Inventory Dashboard

4. নিচের data ব্যবহার করো:

   ```js
   const products = [
     { id: 1, name: "Laptop", price: 50000, stock: 3 },
     { id: 2, name: "Mouse", price: 1000, stock: 10 },
     { id: 3, name: "Keyboard", price: 2000, stock: 0 },
     { id: 4, name: "Monitor", price: 15000, stock: 5 }
   ];
   ```

   * সব product এর মোট মূল্য বের করো।
   * যেগুলোর stock ০, সেগুলো “Out of Stock” হিসেবে দেখাও।
   * price অনুযায়ী descending order এ sort করো।

---

### 3. Employee Performance Tracker

7. একটা function বানাও যেটা নিচের data বিশ্লেষণ করবে:

   ```js
   const employees = [
     { name: "A", sales: 120 },
     { name: "B", sales: 200 },
     { name: "C", sales: 180 },
     { name: "D", sales: 90 }
   ];
   ```

   * গড় sales বের করো।
   * যাদের sales গড়ের বেশি, তাদের নাম দেখাও “Top Performer” হিসেবে।
   * সবচেয়ে কম পারফর্মার কে তা নির্ধারণ করো।

---

### 4. Financial Calculation System

10. একটা bank transaction array তৈরি করো যেখানে প্রতিটি entry তে amount, type (‘deposit’/‘withdraw’) থাকবে।
11. সব deposit এর যোগফল এবং সব withdraw এর যোগফল আলাদা করে বের করো।
12. মোট balance রিটার্ন করো।
13. balance যদি negative হয়ে যায়, তাহলে “⚠️ Low Balance Warning” দেখাও।

---

### 5. Data Analytics + Logic

14. একটা array থেকে unique item frequency count করো (যেমন `[‘a’, ‘b’, ‘a’, ‘c’]` → a=2, b=1, c=1)।
15. একটা বড় object থেকে নির্দিষ্ট key (deep nested) safe ভাবে access করো optional chaining দিয়ে।
16. একটা function বানাও যেটা array কে ascending এবং descending দুইভাবে sort করতে পারে (parameter দিয়ে নির্ধারণ করবে)।
17. একটা function বানাও যেটা বড় array optimize করে pagination আকারে ভাগ করবে।
18. একটা system বানাও যেটা error ধরতে পারে try-catch দিয়ে এবং proper message দেখায়।
19. একটা simple todo app logic বানাও — addTask, removeTask, markCompleted ফাংশনসহ।
20. সব data localStorage এর মতো একটা simulated object এ সংরক্ষণ করো (store, get, delete)।

---

## 🏁 Final Achievement

✅ Grand Master Level Complete হলে comment করো “**#GrandMasterUnlocked**”
তারপর তুমি officially **KGN JavaScript LEGEND** 🎯

---

## 🪄 Bonus Challenge (Optional)

🔹 একটা mini JS project বানাও (যেকোনোটা):

* Student Management App
* Product Inventory System
* To-Do List
* Expense Tracker
  — এবং সব logic নিজের হাতে লিখো (without frameworks)।

🎉 শেষ হলে লিখো: “#KGNCompletedTheJourney”
