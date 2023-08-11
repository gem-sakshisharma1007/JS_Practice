//console.log(a);
let a=10;
console.log(a);
var b=45;
console.log(window.a);     //shows undefined
console.log(window.b);

let c=23;
//let c="Hello";  //Cannot redeclare block-scoped variable 'c'.
console.log(c);

//const is more strict than let.

// const y;
// y=34;        throws syntax error  const y=80; y=90;



//to avoid temporal deazone we should declare all the variables at the top of our code.

//block/compound statement= defined by { }, used to combine multiple js statements into group where js expects only one statement.
if(true) console.log("Hi how are you?")

if(true){
    let v=67;
    console.log(v);
}

//BLOCK Scope= all the variables and function which we can access in the block.
var eg1= 67;
{
    var eg1 = 90;
    let eg2 = 56;
    const eg3 = 78;
    console.log(eg1);
    console.log(eg2);
    console.log(eg3);

}
console.log(eg1);
//onsole.log(eg2);
//console.log(eg3);
//shadowing  var variable gets shadowed as the in global scope as well in the block scope it points to the same memory.here we are eg1 in block shadowed the global eg1 variable,  but it will not act same in case of let and const variable.
//shadowing behaves same in function scope.
let eg2= 67;
{
    var eg1 = 90;
    let eg2 = 56;
    const eg3 = 78;
    console.log(eg1);
    console.log(eg2);
    console.log(eg3);

}
console.log(eg2);

//illegal shadowing
let eg4= 89;
{
    var eg4 =56;
}

//valid
var eg5 = 89;
{
    let eg5= 78;
}
