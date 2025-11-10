# 👑 Grand Master Rank – Ultimate JavaScript Challenge

**Description:**
এই লেভেলটা JavaScript mastery প্রমাণ করার জায়গা। এখানে তুমি বাস্তব প্রজেক্ট টাইপ প্রোবলেম solve করবে। প্রতিটা টাস্কে function, object, array, condition, loop, optimization, error handling—সবকিছু একসাথে ব্যবহার করতে হবে।
প্রতিটি সমস্যায় ডিটেইল লজিক লিখো এবং সবগুলো real output টেস্ট করো।

---

## 🧠 Level Goals

* Complex multi-step problem-solving
* Combining objects, arrays, and functions
* Building small simulation projects
* Real-world logic + performance thinking

---

## 🧩 Problems (20 Total)

### 1. 🧾 Student Report Management System

* একটি student array থাকবে, যেখানে name, roll, subject, marks থাকবে।
* প্রতিটি student এর average marks বের করো।
* যারা ৩৩ এর নিচে, তাদেরকে “Fail” দেখাও, বাকিদের grade হিসাব করো (A/B/C/D/F)।
* সবগুলো student grade অনুযায়ী descending order এ সাজাও।

---

### 2. 🏪 E-Commerce Inventory Manager

```js
const inventory = [
  { id: 1, name: "Laptop", price: 60000, stock: 5 },
  { id: 2, name: "Mouse", price: 1200, stock: 0 },
  { id: 3, name: "Monitor", price: 15000, stock: 8 },
  { id: 4, name: "Keyboard", price: 2000, stock: 2 },
];
```

* সব available item এর total value বের করো।
* stock ০ যেগুলা আছে সেগুলা “Out of Stock” হিসেবে লিস্ট করো।
* সর্বোচ্চ দামের product নির্ধারণ করো।

---

### 3. 💼 Employee Performance Tracker

* name ও sales সহ একটি employee array বানাও।
* গড় sales বের করো।
* যাদের sales গড়ের বেশি, তাদের “Top Performer” হিসেবে লিস্ট করো।
* সর্বনিম্ন sales করা কর্মীকে আলাদা করে দেখাও।

---

### 4. 💳 Bank Transaction Analyzer

```js
const transactions = [
  { id: 1, type: "deposit", amount: 5000 },
  { id: 2, type: "withdraw", amount: 2000 },
  { id: 3, type: "deposit", amount: 3000 },
];
```

* সব deposit এর যোগফল বের করো।
* সব withdraw এর যোগফল বের করো।
* ব্যালেন্স বের করো।

---

### 5. 🚕 Ride Fare System

* প্রতি কিলোমিটার ২৫ টাকা, কিন্তু ১০ কিমি পার হলে পরের কিমি প্রতি ২০ টাকা।
* একটা function বানাও যেটা total distance নেবে এবং মোট ভাড়া রিটার্ন করবে।

---

### 6. 🏦 Tax Calculator

* একটি function লিখো যেটা income নেবে এবং নিচের নিয়মে tax বের করবে:

  * 0–20000 → 0%
  * 20001–50000 → 10%
  * 50001–100000 → 20%
  * 100000+ → 30%

---

### 7. 🧾 JSON Data Merger

দুইটা object array merge করে একই id থাকলে quantity যোগ করে নতুন object বানাও।

---

### 8. 🎬 Movie Rating Dashboard

```js
const movies = [
  { name: "Inception", rating: 9.2 },
  { name: "Avatar", rating: 7.8 },
  { name: "Titanic", rating: 8.7 },
];
```

* ৮ বা তার বেশি rating এর মুভিগুলা লিস্ট করো।
* সবচেয়ে বেশি rating এর মুভি বের করো।

---

### 9. 🛒 Cart Discount System

* মোট দামের উপর নির্ভর করে ডিসকাউন্ট দাও:

  * ৫০০০ এর নিচে → ০%
  * ৫০০০–১০০০০ → ১০%
  * ১০০০০+ → ২০%

---

### 10. 🕹 Game Leaderboard

* name এবং score সহ একটি array থাকবে।
* score descending order এ sort করে টপ ৩ player দেখাও।

---

### 11. 📅 Task Planner

* date, name, completed status সহ object array।
* আজকের তারিখের আগের সব task “Expired” হিসেবে দেখাও।
* completed task count করো।

---

### 12. 🧮 Math Utility

* একটা function বানাও যেটা ২টা সংখ্যা নিয়ে “sum”, “difference”, “product”, “division” return করে object আকারে।

---

### 13. 📊 Stock Market Analyzer

* price list থেকে সর্বোচ্চ profit বের করো (buy low, sell high)।

---

### 14. 🌦 Weather Report

* temperature list থেকে average temperature বের করো।
* সর্বনিম্ন ও সর্বোচ্চ temperature দেখাও।

---

### 15. 🧑‍💻 Error Handling System

* একটা function বানাও যেটা number input নেবে।
* number না দিলে error throw করবে।
* try-catch দিয়ে error handle করো।

---

### 16. 🧮 Factorial Finder

* recursive function দিয়ে factorial বের করো।

---

### 17. 🔄 Reverse Words

* একটা function বানাও যেটা sentence এর প্রতিটা শব্দ উল্টো করে দেয় (word-wise reverse)।

---

### 18. 🎟 Unique ID Generator

* ১০টা random ৬-digit unique number generate করো।
* duplicate না আসে তা নিশ্চিত করো।

---

### 19. 🧰 Deep Object Access

* একটা nested object থেকে নির্দিষ্ট key খুঁজে বের করার function লিখো (recursive)।

---

### 20. 🚀 Mini Earning Tracker

* daily income array থেকে total income, average income, এবং highest earning day বের করো।

---

📁 **File name:** `README.md`
📂 **Category:** `Grand Master Rank`
