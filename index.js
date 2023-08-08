
function displayWelcomeMessage() {
    const welcomeMessage = document.createElement("h2");
    welcomeMessage.textContent = "Welcome to our website!";
    document.body.appendChild(welcomeMessage);
}
  
// Delay the display of the welcome message by 3 seconds
setTimeout(displayWelcomeMessage, 3000);

//promise:-


const promise = new Promise((resolve, reject) => {
    isNameExist = true;
    if (isNameExist) {
        resolve("User name exist")
    } else {
        reject("error")
    }
})
promise.then(result => console.log(result)).catch(() => {
            console.log('error!')
 })
//async/await


 const showPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    console.log(posts) ;
  }
  showPosts();



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
// let paintColor = 'red'
// const paint = (() => {
//     return {
//         changeColorToBlue: () => {
//             paintcolor: 'Blue'; 
//             return paintColor;
//         },
//         changeColorToGreen: () => {
//             paintColor: 'Green';
//             return paintColor;
//         }
//     }
// })();
// console.log(
//     paint.changeColorToBlue()
// )

// //closures


// const first = () => {
//     const greet = 'Hi';
//     const second = () => {
//         const name = 'john';
//         console.log(greet);
//     }
//     return second;
// }
// const newFunc = first();
// newFunc();

// //callback
// const greeting = (name) => {
//     console.log('Hello' + name);
// }
  
// const processUserName = (callback) => {
//     name = 'GeeksforGeeks';
//     callback(name);
// }
// processUserName(greeting);

// const test = (example) =>{
//     console.log("Hi"+ " " +example);

// }

// const test2 = (callback) =>{
//     name1  = "John"
//     callback(name1);
// }

// test2(test);

// var x = 0;
// function fun(){
// ++x;
// this.x = x;
// return x;
// }
// var bar = new new fun;
// console.log(bar.x);


