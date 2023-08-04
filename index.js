//Hoisting 

// getName();
// console.log(x);    //undefined
// console.log(getName);

// var x=7 ;
// // function getName(){
// //     console.log("Hello JavaScript");

// // }
// var getName = () =>{
//     console.log("Hello JavaScript");

// }

// // getName();
// // console.log(x);


// IIFE
let paintColor = 'red'
const paint = (() => {
    return {
        changeColorToBlue: () => {
            paintcolor: 'Blue'; 
            return paintColor;
        },
        changeColorToGreen: () => {
            paintColor: 'Green';
            return paintColor;
        }
    }
})();
console.log(
    paint.changeColorToBlue()
)

//closures


const first = () => {
    const greet = 'Hi';
    const second = () => {
        const name = 'john';
        console.log(greet);
    }
    return second;
}
const newFunc = first();
newFunc();

//callback
const greeting = (name) => {
    console.log('Hello' + name);
}
  
const processUserName = (callback) => {
    name = 'GeeksforGeeks';
    callback(name);
}
processUserName(greeting);