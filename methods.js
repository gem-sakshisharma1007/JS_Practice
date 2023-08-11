//higher order functions are the functions that take another function as argument and returns a functions.



const array = [
    {name:"Sakshi", age:10},
    {name:"Parul", age:12},
    {name:"Aaliya", age:14},
]

const nameArray = array.map(obj => (obj.name));
console.log(nameArray);

const agefilter = array.filter(obj => obj.age<14);
console.log(agefilter);

const sumAges = array.reduce((sum, obj) => sum +obj.age, 0);
console.log(sumAges);
