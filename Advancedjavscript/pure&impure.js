//impure
let x = 5;
let array = [1,2,3];
const  chnageValue = y => ++y;
const arrayValue = arr =>{
    arr.push(5);
    return arr;
}

console.log(chnageValue(x));
console.log(x);
console.log(arrayValue(array));
console.log(array);
