//function invocation and variable environment

var example =1;
a();
b();
console.log(example);
function a(){
    var example = 10;
    console.log(example);
}

function b(){
    var example = 100;
    console.log(example);
}
//understanding window:-

var x=10;
function c(){
    var test= "String";
}

console.log(window.x);   //or
console.log(x);   //or
console.log(this.x);

//undefined vs not defined

var y;
console.log(y);
var y= 10;
console.log(y);
var y = "Hello World!";
console.log(y);

//console.log(z);


//Scope chain and Lexical Environmemt:

// function testing(){
//     testing1();
//     function testing1(){
//         console.log(q);
//     }

    
// }
// var q=90;
// testing();
function testing2(){
    testing1();
    function testing1(){
        var q=90;
      
    }

    
}
//console.log(q);
//scope is where we can access the variable that come into picture.
//Lexical env. is the local memory along with the lexical environment of parent.Reference of GEC is Null.
//Scope chain is the chain of all the lexical environment/parent references.



//understanding let and const

//let and const declarations are "HOISTED"./Temporal DeadZone.
console.log(ex2);
//console.log(ex1);  //throws error

let ex1 = 10;
var ex2 = 20;

//temporal deadzone is the time since the let hoisted till it is assigned some value.


const timeoutId = setTimeout(() => {
    console.log("This message will be canceled if clearTimeout is called.");
  }, 3000);
  
  // After 2 seconds, cancel the timeout using clearTimeout
  setTimeout(() => {
    clearTimeout(timeoutId);
    console.log("Timeout canceled before it could execute.");
  }, 2000);