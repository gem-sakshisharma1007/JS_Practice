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

