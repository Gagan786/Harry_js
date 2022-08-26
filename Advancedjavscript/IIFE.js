let x = "Shaggy World";
const hello = ()=> "hello World";

(function(){
    let x = "IIFE world";
    // const hello = () => "hello IIFe";
    console.log(x)
    console.log(hello());
})();
  

const score = (()=>{
let count = 0;
 
return {
    current:() => count,
    increment: () => ++count,
    reset: () => count = 0 
}

})()

console.log(score.current());
console.log(score.increment());
console.log(score.current());
console.log(score.increment());
    