// Operators 

// let a=10,b=2

// console.log(a+b)
// console.log(a-b)
// console.log(a/b)
// console.log(a*b)
// console.log(a%b)

// assignement operators 

// console.log(a+=2)     
// console.log(a-=2)
// console.log(a*=2)
// console.log(a/=2)
// console.log(a**=2)

// comparsion operators 

// Let a =20 b =30
// console.log (x>y)
// console.log (x<Y)


// let age = 50

// if (age<18){
//     console.log("adult");
// }else if (age>60) {
//     console.log("senior citizen");
// }else if (age<60) {
//     console.log("citizen")
// }

// Loop 

// Print the numbers divisible by 5 from 1 - 50

// for(let i=1 ; i<=50 ;i++){
//     if (i%5===0)
//     {
//         console.log(i)
//     }
       
// }

// for (let i=1 ; i<=20 ; i++) {
//     if (i%2 !==0){
//         console.log(i);
//     }
// }

// Print numbers from 1 to 30 that are not divisible by 2.

// for (let i=1; i<30; i++){
//     if (i%2 !==0) {
//         console.log(i)
//     }
// }


// Print numbers from 1 to 100 that are divisible by 7

// for (let i=1; i<70; i++){
//     if (i%7===0){
//         console.log(i)
//     }
// }

// Print numbers from 1 to 50 that are divisible by both 3 and 5.

// for (let i=1; i<50; i++){
//     if (i%3,i%5===0){
//         console.log(i)
//     }
// }
   
// Print numbers from 1 to 100 that are divisible by 3 and 5, but NOT divisible by 2.

// for(let i=1; i<100; i++){
//     if(i%3===0 && i%5===0 && i%2!==0){
//      console.log(i);
//     }
// }
// Print numbers from 1 to 100 that are divisible by 4 OR 6, but NOT divisible by 12.

// for (let i=1 ; i<100 ; i++ ) {
//     if ((i%4===0 || i%6===0) && i%12!==0){
//         console.log(i)
//     }  
//     }

// Print numbers from 1 to 100 that are divisible by 7 but NOT divisible by 3.

// for (let i=1 ; i<100 ; i++){
//     if(i%7===0 && i%3!==0) {
//         console.log(i)
//     }
// }

// ===== comparison===

// let age = 50

// if (age<18){
//     console.log("adult");
// }else if (age>60) {
//     console.log("senior citizen");
// }else if (age<60) {
//     console.log("citizen")
// }

// Print numbers from 1 to 50 that are greater than 25 and less than 40.

// for (let i=1 ; i<50;i++) {
//     if(i>25 && i<40 ){
//         console.log(i);
//     }
// }

// let age = 90

// if (age<60){
//     console.log("senior citizen")
// }else if (age<18) {
//     console.log("child")
// }else if (age>18) {
//     console.log("adult")
// }

// var product = "mobile"
// var product = "laptop"
// var product = "mouse"
// console.log(product)
// console.log(typeof product)

// const price = 4000
// const price = 4000
// price = 6000
// console.log(price);

// =======scoping 

// function calculation(){               Let is the blockscope variables 
//     let mark = 35                     const is the blockscope variables
//     if (mark > 30) {
//         console.log("passed")
//     }else {
//         console.log("failed")
//     }
// }
// calculation()

// Operators 

let a=10, b=2 

// console.log(a+b);
// console.log(a*b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);

// Assignment operators

// console.log(a+=2) //a=a+2=>10+2=12  //new value of a=12
// console.log(a-=2) //a=a-2=>12-2=10  //new value of a=10
// console.log(a*=4) //a=a*4=>10*4=40  //new value of a=40
// console.log(a/=4) //a=a*4=>40/4=10  //new value of a=10
// console.log(a%=4) //a=a*4=>10/4=10  //new value of a=2
// console.log(a**=4) //a=a**4=>2**4=2*2*2*2  //new value of a=16

//comparision operators

// let x=20,y=10

// /* console.log(x>y) //true
// console.log(50>100) //false
// console.log(x<y) //false
// console.log(x<=20) //true
// console.log(x>=10) //true */


//strict equality(===) , this compares both the datatype and the value 
// console.log(1==="1") //false, number===string, value is same but datatype is different, so it returns false
// console.log(undefined===null)//

//loose equality(==), this compares only the value
//coerction-type conversion takes place
// console.log(1=="1")//true
// console.log(1==true)//true
// console.log(undefined==null)//true

//difference '='(assignment operator) and '===' or '=='(comparision operators)

//logical operators
//and(&&)=> (true&&true)=>true
//OR(||)=> (true||false)=>true
//Not(!)=> (!(true))=> false

// let c=4, d=2

// console.log(c>d && d<c)//true && true =true
// console.log(c<d || d>c)//false || false =false
// console.log(!(d>c))//(!(false))=true

