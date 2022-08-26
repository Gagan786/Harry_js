let a = 10;

// function outer(){
//     let b = 20;
//     function inner(){
//         let c = 30;
//         console.log(a,b,c);
//     }
//     inner();
// }
// outer();

function outer(){
    let counter = 0;
    console.log("outer");
    function inner(){
        counter++;
        console.error(counter);
    }
    return inner;
}
let fn = outer();
fn();
fn();
// console.log(outer());
fn();
console.log(fn.prototype);
// console.log(a,b,c);