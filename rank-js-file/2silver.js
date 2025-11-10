//!Silver Rank
//todo 1. Array Basics
//?একটা array বানাও যেখানে তোমার ৫টা বন্ধুর নাম থাকবে।
// let frendsName = ['Rohan', 'zihad', 'Masud','Ratul','Fahim']

//?ওই array এর দ্বিতীয় বন্ধুর নাম প্রিন্ট করো।

// let frendsName = ["Rohan", "zihad", "Masud", "Ratul", "Fahim"];
// console.log(frendsName[1])

//?push() দিয়ে একটা নতুন নাম যোগ করো array এর শেষে।
// let frendsName = ['Rohan', 'zihad', 'Masud','Ratul','Fahim']
// frendsName.push('Mostakim');
// console.log(frendsName)

//?pop() দিয়ে array এর শেষ নামটি বাদ দাও।
// let frendsName = ['Rohan', 'zihad', 'Masud','Ratul','Fahim']
// frendsName.pop();
// console.log(frendsName)

//?unshift() দিয়ে array এর শুরুতে একটা নাম যোগ করো।
// let frendsName = ['Rohan', 'zihad', 'Masud','Ratul','Fahim']
// frendsName.unshift('Mostakim');
// console.log(frendsName)

//?shift() দিয়ে array এর প্রথম নাম বাদ দাও।
// let frendsName = ['Rohan', 'zihad', 'Masud','Ratul','Fahim']
// frendsName.shift();
// console.log(frendsName)

//?length প্রোপার্টি ব্যবহার করে array এর মোট length প্রিন্ট করো।
// let frendsName = ['Rohan', 'zihad', 'Masud','Ratul','Fahim']

// console.log(frendsName.length)

//todo 2. Array Loops

//?একটা array থেকে slice() ব্যবহার করে মাঝের ২টা element বের করো।
// let frendsName = ["Rohan", "zihad", "Masud", "Ratul", "Fahim"];
// let newNames = frendsName.slice(1, 3);
// console.log(newNames);

//?splice() ব্যবহার করে array থেকে ১টা নাম বাদ দাও।
// let frendsName = ['Rohan', 'zihad', 'Masud','Ratul','Fahim']
// frendsName.splice(0,1)
// console.log(frendsName)

//?includes() ব্যবহার করে দেখো কোনো নির্দিষ্ট নাম array তে আছে কিনা।

// let frendsName = ['Rohan', 'zihad', 'Masud','Ratul','Fahim']
// frendsName.includes('Mostakim');
// console.log(frendsName)

//?indexOf() দিয়ে কোনো নামের অবস্থান বের করো।

// let frendsName = ['Rohan', 'zihad', 'Masud','Ratul','Fahim']
// frendsName.indexOf(0,2);
// console.log(frendsName)

//todo4. Array Logic Problems

//?একটা array আছে [1, 2, 3, 4, 5] — সব element এর যোগফল বের করো।
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.reduce(function (col, val) {
//   return col + val;
// });


//?একটা array থেকে শুধু even সংখ্যাগুলো প্রিন্ট করো।
// let arr = [1,2,3,4,5,6,7,8,9,0]
// let newarr = arr.forEach(function(val){
//     if(val%2 === 0){
//        console.log(val)
//     }
// })


//?একটা array থেকে শুধু odd সংখ্যাগুলো প্রিন্ট করো।
// let arr = [1,2,3,4,5,6,7,8,9,0]
// let newarr = arr.forEach(function(val){
//     if(val%3 === 0){
//        console.log(val)
//     }
// })

//?একটা array থেকে সবচেয়ে বড় সংখ্যা বের করো।
// let arr = [12,34,52,67,23,89,65,34,64,10]
// let newarr = Math.max(...arr);
//?একটা array থেকে সবচেয়ে ছোট সংখ্যা বের করো।
// let arr = [12,34,52,67,23,89,65,34,64,10]
// let newarr = Math.min(...arr);

//?একটা array reverse করে প্রিন্ট করো (method বা loop যেভাবে পারো)।

// let arr = [1,2,3,4,5,6,7,89,0,0]
// arr.reverse();
// console.log(arr)

