const add2 = (x) => x+2;
const multiplyBy5 = y => y * 5;
const subtract1 = x => x-1;
let array1 = [1,2,3,4];
const compose = (...fns) => val =>fns.reduceRight((prev,fn) => fn(prev),val);
const compose2 = (...fns) =>fns.reduceRight((prev,fn,idx) => { return(prev + fn)  });
const pipe = (...fns) => (val) => fns.reduce((acc,fn)=> fn(acc),val);

const composeRes = compose(multiplyBy5,add2,subtract1)(4);
const compose2Res = compose2(1,2,3,4);
const pipeRes = pipe(multiplyBy5,add2,subtract1)(4);
// console.log(compose2Res);
console.log(composeRes);
console.log(pipeRes);
 const string1 = "loreum is good boy";
   const splitOnSpace = (string) => string.split(' ');
   const count  = (array) => array.length;
    const stringLength = pipe(splitOnSpace,count)(string1);
    console.log(stringLength);
    
console.log(splitOnSpace("taco cat").reverse().join(' '));
