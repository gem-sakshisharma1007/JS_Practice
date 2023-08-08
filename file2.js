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
