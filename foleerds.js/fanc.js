// ? Default, rest, and sperad parametesr

//!Default perametars

//* ধরি আমার  একটা ভেরিয়েবল বা পেরামিটার নিতে হইছে কিন্তু আমি জানিনা যে তার ভেলু কি দিবো। তখন আমি তার default ভেলু হিসাবে তাতে কিছু ডেটা দিতে পারি। এই ডেটা দেওয়ার পঈসেসই হলো //!Default perametars
//*Suppose I have to take a variable or parameter but I don't know what its value should be. Then I can give some data as its default value. The process of setting this data is //!Default Parameters

// function add(v1 = 0, v2 = 0) {
//   console.log(v1 + v2);
// }
// add();

//! rest perametars

//* ধরি আমরা একটা function এ  অনেক গুলা আরগুই মেন্ট নিলাম (উদাহরন: ১,২,৩,৪,৬,৭,৮,৫,৩২,,৪,৬,৮,৫,৩,২)
//* এখন এতো গুলা আরগিউমেন্টের জন্য় তো এতো গুলা পেরামিটারস নিতে পারবো না বা নেওয়া যাবেনা। তার জন্য় এটা থেকে বাচার জন্য় //আমরা //! rest perametars // ব্য়বহার করতে পারি
//** Suppose we take many arguments in a function (Example: 1,2,3,4,6,7,8,5,32,,4,6,8,5,3,2)
//* Now for so many arguments, we cannot or should not take so many parameters. Therefore, to avoid this, //we can use //! rest parameters //

// function abc(আ,বা,ছা,...val){
//     console.log(আ, বা, ছা, val)

// }
// abc(1,2,23,4,5,6,76,45,43,343,43,43,3,4,34,4,34,343,4,3,43,4,4)

//TODO:- sperad parametesr is cuaming in arrys and objects.

//? Return values and early return

//!Return values

//* return েএর মানে যেখান থেকে এসেছিলো ওখানেই আবার দেওয়া।
//* return means to put it back where it came from.

// function hello(v){
//     return 10+v
// }

// console.log(hello(2))

//! Farst Class Functions
//*জাভাস্ক্রিপ্টে, একটি প্রথম-শ্রেণীর ফাংশন হল এমন একটি ফাংশন যা ভাষার অন্য যেকোনো মান বা চলকের মতোই বিবেচিত হয়।
//*In JavaScript, a first-class function is a function that is treated like any other value or variable in the language.
//?Eample:

// function abc(val){
//     val();
// }

// abc(function(){
//     console.log("Huihuihui")
// })

//!high order function
//* েএইটা এমন এক function যা retunrn করে একটা function এবং একসেপ্ট করে পেরামিটারী।

// function pagla(pagli){
//     return pagli + 10 - 10 + 100 - 100 * 5000 / 10000 + function(chual){
//         chual+ 10 - 10 + 100 - 100 * 5000 / 10000 + function(nati){
//             nati + 10 - 10 + 100 - 100 * 5000 / 10000 + function(puti){
//                 puti - 10 + 10 - 100 + 100 * 10000 / 500;
//             }
//         }
//     }
// }

// console.log(pagla("Dalal"))

//!pure vs impure func
//* েএমন ফাংশন যা বাহির থেকে বদলেনা তাই pure func
//?Like:
// let a = 10;
// function abcd(){
//     console.log(a)
// }
// abcd()

//*  েএমন ফাংশন যা বাহিরের ভেলু বদলে তাই impure func
//?Linke:
// let a = 10;
// function abs(){
//     a++
//     console.log(a)
// }

//! Closeres
//* েএমন একটা ফাংশন যেটা রিটারন করে একটা ফাংশন এবং রিটারন করা ফাংশন ব্য়াবহার করে পেরেন্ট ফাংশনের কোনো একটা ভেরিয়েবল বা সিমবল;
//? Linke

// function mama(){
//     let a = 10;
//     return function(){
//         console.log(a)
//     }
// }

//! lexical scoping
//* ধরি একটা ফাংশন নিলাম এবং সেই ফাংশনের নাম দিলাম ab েএবং সেই ab ফাংশনের ভিতরে ধরো াআরেকটা ফাশন নিলাম cd নামে সেই cd েএর ভিতরে াআরেকটা ফাংশন নিলাম ef নামে এমন করে ফাংশনের ভিতরে ফাংচন দেওয়াই হলো lexical আর ধরলাম ab ফাংশনে আমি একটা ফেরিয়েবল নিলাম। এখন ওই ভেরিয়েবল আমি ওই ফাংশনে যে কোনো জয়গাই ব্য়বহার করতরে পারবো কিন্তু বাইরেনা। তেমনই যদি আবার cd ফাংনে একটা ভেরিউয়েবল নিই তবে সেটা আমি ব্য়বহার করতে পারবো শুধু cd ফাংশনের ভিতরই তার বাইরে যেমন ab পাংশনে নাহ। তো এটাই হলো lexical scoping
//?Like

// function ab() {
//   let c = 10;
//   function cd() {
//     let b = 10;
//     function ef() {
//       let a = 10;
//     }
//   }
// }

//! IFE (Immediately invoked function expertion)
//*সাথে সাথে চলে কল করতে হয় না
//? Like
// (function(){
//     console.log("huihuihui") 
// })()


//! Hoisting differens between declaration and expression;

//* হোইসটিং বলতে বোজায় যে সবার আগে াআআইসা কলকরা এবং ফাংশন বানানো হয় পরে যযাকে বলা হয় হোইসটিং। এটা ফাংশন একসপ্রেশনের সথে হয় না।

// ab();




//Alllowd



// function ab(){
//     console.log("mama")
// }

//func expe
// cd()// We get a eroor: Uncaught ReferenceError: Cannot access 'cd' before initialization




// let cd = function(){
//     console.log('nah nah nah')
// }

