// const spreader = (function(x,y,z,a) {console.log("hello");
// return "hi"})();

let array1 = [1,2,3,4];
const applyFunc = (x,y,z) => x + y + z;
console.log(applyFunc.apply(null,array1));

let sum = array1.reduce((previous,next) =>{
    return previous + next;
});
console.log(sum);