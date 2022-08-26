//arrow function
const buildSandwich = (ingredient1) => 
{ return (ingredient2) => 
    { return(ingredient3) => 
        {
            return `${ingredient1} ${ingredient2} ${ingredient3}`;
        }
    }
}
let mySandwich = buildSandwich("lettuce")("Bacon")("tomato");
console.log(mySandwich);

// without arrow function
function buildSandwich2(ingredient1){
    return function(ingredient2){
        return function(ingredient3){
            return function(ingredient4){
                return `${ingredient1} ${ingredient2} ${ingredient3} ${ingredient4}`;
            }
        }
    }

}

const mySandwich2 = buildSandwich2("Bacon");
console.log(`this is sandwich ${mySandwich2}`);
console.log(mySandwich2()()());

// //arrow short function
// const buildSandwich3 = ingredient1 => ingredient2 => ingredient3 => `${ingredient1}. ${ingredient2}, ${ingredient3}`;
// let mySandwich3 = buildSandwich3("mirchi")("corrainder")("turmeric");
// console.log(mySandwich3);
// function sum(a,b,c){
//     return 2;

// }

// // console.log(sum(2)(3)(5));

// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c);
//             }
//         }
//     }

// }
// const curriedSum = curry(sum);
// // console.log(curry(sum(2)(3)(4)));

// console.log(curriedSum(2));