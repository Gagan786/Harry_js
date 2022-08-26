let sum = (...args) => 
{
    console.log("this is sum");
    return [...args].reduce(function(acc,num) { 
        return acc + num;
    });

}

const callCounter = (fn) => {
    let count = 0;
    return  (...args) => {
        console.log(`sum has been called ${count += 1} times`);
        return fn(...args);
    }
}
sum = callCounter(sum);
console.log(sum(2,5,3));
console.log(sum(2,5,3));
// check for valid data  and number of params
let rectangleArea = (length , width) => { 
    return length * width;
}

const countParams = (fn) => {
    return (...params) => {
       if( params.length !== fn.length ){
           throw new Error(`innocent number of parameter for ${fn.name}`);
       }
       return fn(...params);
    }
}

const  requireIntegers = (fn) => {
    const name = fn.name;
    return (name,...params) => {
        params.forEach(param => {
            if(!Number.isInteger(param)){
                throw new TypeError(`params for ${fn.name} must be integers`);
            }
        })
        return fn(...params);
    }
}
// rectangleArea = countParams(rectangleArea);
// console.log(`${rectangleArea}`);

// rectangleArea = requireIntegers(rectangleArea);
// // console.log(rectangleArea(20,30) );
// // console.log(rectangleArea(20,'hey'));
// console.log(`${rectangleArea(20,30)}`);
//decorating  an async API call  function
//time data requests during developement

let requestData = () => {
    try{
        const response  = await fetch(url);
        const data = await response.json;
        return data;
    }
    catch{
        console.error(err);
    }
}

const dataResponseTime = (fn) => {
    return async(url) => {
console.time('fn');
         const data  = await fn(url);
         console.timeEnd('fn');
         return data;
    }
}
const myTestFunction = async() =>{
    requestData  = dataResponseTime(requestData);
    const data = await requestData('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
}
