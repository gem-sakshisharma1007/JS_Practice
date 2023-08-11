//more about functions

// test();
// test2();
//function statement/FunctionDeclaration
function test(){
    console.log("func called!");
}
test();
//function expression
var test2 = function(){
    console.log("test2 function called");   //here anonymous function can be used.
}
test2();

//difference between function and expression is hoisting.

//Anonymous function= a function without a name is Anonymous function.
//Eg:- Syntax Error    function(){}

//Named function expression
var c = function xyz(){
    console.log("Hello");
}
//xyz();     throws error,

// let and const behave same as var here.
var example= function(param1){
    console.log(param1);
}
function abc(){

}
example(function(){

});
example(abc);
//we can also return a function from a function.
//FIRST CLASS FUNCIONS:- the ability to use the functions inside the function is known as First class functions.