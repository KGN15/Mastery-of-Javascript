//? In This File We Practis sam quactions for storong in function and see sam use case

//*Q1.What's the difference between function declaration and expression in terms of hoisting?
//Ans:
// ab()
// we get a eroro
// let ab = function(){}

// ab()
//we can'nt get a eror

// function ab(){}

//*Q2.What out put cams this

// greet()

// function greet(){
//     console.log("Hello World")
// }

//*Q3 Convert This function in the arro function
// function multiply(a,b){
//     return a*b;
// }

//Ans:

// let multiply = (a,b)=>{
//     return a*b;
// }

//*Q4 So Identify peramiytars and argio ments
// function welcome(name){console.log(name);}
// welcome("mahir")

// name = peramitars
// and welcome("mahir") = argiuments

//*Q5 How meny perametars in this fanc and how meny arguiment have
// function demo(a, b, c) {}
// demo(1,2);

// Ther a re 3 prramitars and 2 arguiments

//*Q6 Pridict this/ gassthis output
//  =>
//     function sayHi(name = "Guest"){
//     console.log("Hi" , name)
//  }
//  sayHi();

// Ans: Output: HiGuest

//*Q7 What dose the ... operatior mean is pranctens?

//?Ans:

// function demo(...val){
//     console.log(val)
// }
// demo(1,2,3,4,2,1,3,5,6,8,8,6,5,4,3,1);

//Suppose that while calling one of our functions we take many arguments, for example demo (1,2,3,4,2,1,3,5,6,8,8,6,5,4,3,1) Now for so many arguments, it becomes tough to take so many parameters. Then we can use ... or the rest operator which is called rest. This is the rule of usage => demo (...val) Now all the arguments will be stored inside this val which will work like a parameter.

//*Q8 use rest peramiter to acsept any naumber of scors and return that totall
//?Ans:

// function getScoor(...scoors){
//     let tootalScoots = 0;
//     scoors.forEach(function(val){
//         tootalScoots = tootalScoots + val;
//     })
//     return tootalScoots;
// }
// console.log(getScoor(1.1,1,1,11,1,1,1,1,1,1,1,1,1))

//*Q9 ixe the code func using erli retarn
// =>
// function checkAge(age){
//     if(age <18){
//         console.log('Too young')
//     }else{
//         console.log('Allowed')
//     }
// }
//?Ans:

// function checkAge(age){
//     if(age<18) return "Too young"
//     else return "Allowed"
// }

// console.log(checkAge(20))

//*Q11 What does it mean when we say "functions are first-classcitizens"?
//?Ans:
// Function will terd like a value that we say functions are first-classcitizens....!
// //TODO:- Example Code:
// let a = 10; // ther we stor 10 valu in a vareable.
// in functions are first-classcitizens we can tor functions like this

// let func = function(){

// }

// Onther on:
// function ab (a){
//     return a;
// }
// ab(18); /// in this case we pass a 18 values arguiment
//in functions are first-classcitizens we can pass a function ass a arguiment
//?like:
// function ab(a) {
//   return a;
// }
// ab(function(){
//     console.log("Hello Lerners")
// });


//*Q12 // Can you assign a function to a variable and then call it? Show how.
//?Ans:-
// let abc = function(){

// }
// abc();

//*Q13 // Pass a function into another function and execute it inside.
//?Ans:-
// function abc(val){
//     val();
// }
// abc(function(){
//     console.log("Hello Larners.........!")
// })

//*Q14:- What is higher-order function?
//?Ans:-
//Higher-order function such a function who return a anoder function like this:- 
// function abc(){
//     return function(){

//     }
// }

// on the other way such a function who acsept a function passed in peramiter //? Like:-
// function abc (val){
//     val
// }
// abc(function(){

// })

//*15 What does this function is pure or impure ?
//CODE:_ let total = 0;
        // function addtotal (nam){
        //     total += nam;
        // }
//?Ans:-
//This sis impure function beccas the total variqable value was chainging bay the function.