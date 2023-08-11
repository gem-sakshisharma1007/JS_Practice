function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
     return y;            //or y();
}
var z =x();
console.log(z)

//closure is a function bundled together with its lexical environment.
//function remember their lexical scope.

//we have our lines of code.
z(); 




// function func1(){
//     var b = 10;
//     function func2(){
//         console.log(b);
//     }
//     b=20;
//     return func2;            //or y();
// }
// var q =func1();
// console.log(q)
// q();

function func3(){
    var c =67;
    function func1(){
        var b = 10;
        function func2(){
            console.log(b,c);
        }
        func2();           
    }
    func1();
}
func3();

//uses of closures:-

// -module design pattern
// -currying
// -functions like once
// -memoize
// -maintaining state in sync world   
// -setTimeouts 
// -Iterators


