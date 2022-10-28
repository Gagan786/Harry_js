console.log("Starting");
setTimeout(() => {
    console.log("2 seconds"); 
}, 2000);
setTimeout(() => {
    console.log("0 seconds");
}, 0);
console.log("fininshing");
console.log("this is finished");

function funny() {
    console.log('this is tocheck the stack working in node js');
}
funny();
