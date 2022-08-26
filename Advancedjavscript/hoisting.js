stepOne();

 function stepOne(){
    console.log("this is step One");
}
// var x ;
// console.log(x);
// const x ;
const initApp = ()=>{
    console.log("step one");
    stepTwo();
}
window.addEventListener("DomContentLoaded",initApp());
const stepTwo = () => { 
    console.log("set up/")
}