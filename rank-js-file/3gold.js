//!Gold Rank
//todo1. Array Transformation (map, filter)
//?একটা array [1,2,3,4,5] থেকে প্রতিটা সংখ্যার double value রিটার্ন করো (map ব্যবহার করে)।

// let arr = [1,2,3,4,5];
// let newarr = arr.map(function(val){
//     return val*val;
// })

//?একই array থেকে শুধু even সংখ্যাগুলো রাখো (filter ব্যবহার করে)।
// let arr = [12,23,9,3,6,7,4,2,3,12,2];
// let newarr = arr.filter(function(val){
//     if(val%2 === 0){
//         return val;
//     }
// })

//?একটা array থেকে শুধু ১০ এর বেশি সংখ্যাগুলো বের করো।
// let arr = [1,33, 65, 23, 9, 3, 5, 3];
// let newarr = arr.filter(function (val) {
//   if (val >= 10) {
//     return val;
//   }
// });

//?[‘a’, ‘b’, ‘c’] array থেকে প্রতিটি element এর সাথে “-letter” যোগ করো।
// let alphaLetar = [`‘a’`, `‘b’`, `‘c’`]
// let newarr = alphaLetar.map(function(val){
//     return val+"“-letter”";
// })

//todo 2. Array Searching (find, includes)

//?একটা array [10,20,30,40,50] থেকে find() ব্যবহার করে প্রথম ৩০ এর বেশি সংখ্যাটা বের করো।

// let arr = [10,20,30,40,50];
// let newarr = arr.find(function(val){
//     if(val> 30){
//         return val;
//     }
// })

//?একটা নামের list এ “Mashud” আছে কিনা includes() দিয়ে চেক করো।
// let nameList = ['zihad', 'Mashud', 'rohan', 'fahim']
// let newarr = nameList.includes('Mashud');

//?একটা array তে “KGN” থাকলে “Found”, না থাকলে “Not Found” প্রিন্ট করো।
// let nameList = ['RHK', 'RC', 'FX', 'RRQ', 'KGN', 'Fluxo']
// if(nameList.includes('KGN')){
//     console.log('Found')
// }else{
//     console.log('Not Found')
// }

//todo 3. Array Sorting & Reducing

//? [5,1,3,2,4] array টা ascending order এ সাজাও (sort)।
// let arr = [5,1,3,2,4];
// let newarr = arr.sort();

//?একই array descending order এ সাজাও।
// let arr = [5,1,3,2,4]
// let newarr = arr.sort().reverse();

//?[10,20,30,40] array এর সব element এর যোগফল বের করো (reduce ব্যবহার করে)।
// let arr = [10,20,30,40]
// let newarr = arr.reduce(function(col,val){
//     return col+val;
// },0)

//?একটা array এর average মান বের করো।
// let arr = [10,20,30,40]
// let newarr = arr.reduce(function(col,val){
//     return col+val;
// },0)

// let average = newarr / arr.length;

//todo 4. Real-Life Mini Tasks

//?একটা array আছে [‘apple’, ‘banana’, ‘mango’, ‘apple’] – duplicate element বাদ দিয়ে unique item এর নতুন array বানাও।

// let arr = ['apple', 'banana', 'mango', 'apple']
// let copyArr = [...arr];

//?একটা array থেকে শুধুমাত্র string element গুলো রাখো, number বাদ দাও।
// let arr = ['Mahir vai', 15, 'Sadik', 20, 'Js', 1986]
// let newarr = arr.filter(function(val){
//     return typeof val === 'string';
// })

//?একটা array থেকে ৫ এর গুণিতকগুলো বের করো।
// let numbers = [3, 5, 10, 14, 15, 22, 25, 30, 42];
// let newNambers = numbers.filter(function(val){
//     return val%5 === 0;
// })

//?একটা shopping cart array বানাও (price গুলো number আকারে থাকবে) এবং total price বের করো।

// let arr = [122, 38478, 2321, 1212, 121, 21, 2];
// let total = arr.reduce(function (col, val) {
//   return col + val;
// }, 0);


//?একটা array তে name গুলা আছে, প্রতিটা নাম capitalized আকারে রিটার্ন করো।
// let names = ['mama', 'chaca', 'tilu', 'nana']
// let capitalized = names.map(function(val){
//     return val.toUpperCase();
// })

//?একটা sentence (“I love JavaScript”) কে split করে array বানাও এবং আবার join করে একত্র করো
// let a = 'I Love Javascript';
// let v = a.split(' ');

// let b = v.join(' ');


//?[1, 2, [3, 4, [5]]] এর মতো nested array কে একদম flat করে দাও (flat method ব্যবহার করে)।

// let arr = [1, 2, [3, 4, [5]]]
// let newarr = arr.flat(2);

//?একটা array থেকে random element pick করো।
// let arr = ["Mahir", "Mahir", "Ratul", "Fahim", "Zihad",'rohan','mithu','ridoy','kausar','mostakim'];
// let randomIndex = Math.floor(Math.random() * arr.length);
// let randomElement = arr[randomIndex];

// console.log("Random Element:", randomElement);


//?একটা array এর সব element কে একসাথে string আকারে join করো।
// let arr =['our','contery','name','is','bangladesh','!']
// let newarr = arr.join();
