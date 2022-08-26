// const multiply  = (x,y) => x * y;

// const multipied = (x) => (y) => x*y;

// let mymultiply = multipied(2);
// console.log(mymultiply(3));
// // console.log(multiply(2));

let addCustomer = (fn) => {
    return (...args) => {
    console.log("saving customer info...");
    return fn(...args);
    } 
}

let processOrder = (fn) => {
    return (...args) => {
    console.log(`processing Order #${args[0]}`);
    return fn(...args);
    }
}

  let x =5;
let completeOrder = (...args) => {
    console.log(`order #${[...args].toString()} completed `);
    return;
}

function addCustomer2(fn){
    return function(...args){ 

        console.log("saving cusomter info...");
        return fn(...args);
    }
}
function processOrder2(fn){
    return function(...args){
            console.log(`processing order #${args[0]}`);
            return fn(...args);
        
    }
}

function completeOrder2(...args){
        console.log(`order #${[...args].toString()} compplete`);
    
}

// console.log(completeOrder());
// // console.log(`${processOrder()}`);
// // console.log(`${addCustomer()}`);
// completeOrder = (processOrder(completeOrder));
// console.log(`${completeOrder}`);
// completeOrder = (addCustomer(completeOrder));
// // completeOrder("5000");
// console.log(completeOrder(2));

completeOrder2 = processOrder2(completeOrder2);
completeOrder2 = addCustomer2(completeOrder2);
console.log(`${completeOrder2(5000)}`);

// const curry = fn => {
//     return curried = (...args) =>{
//         if(fn.length!==args.length){
//             return curried.bind(null,...args);
//         }
//         return fn(...args);
//     }
// }

// const total = (x,y,z) => x + y + z; 
    