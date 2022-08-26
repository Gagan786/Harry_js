// function sayMyName(name){
//     console.log(`my name is ${name}`);

// }

// sayMyName("gagan Gupta");

// const person = {
//     name : "Vishwas",
//     sayMyName : function(){
//         console.log(`My name is ${this.name}`);
//     }
// }
// person.sayMyName();
// console.log(person.name);

function sayMyName(){
    console.log(`this is my name ${this.name}`);
}
globalThis.name = "radhey";
// sayMyName.call(person);

function person(name){
    this.name = name;
}
sayMyName();
let p1= new person("Vishwas");
let p2 = new person("vashnavi");
// console.log(p1.name);
console.log(person.prototype);
console.log(p1.__proto__)
