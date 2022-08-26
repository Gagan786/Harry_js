
class Person{
    constructor(fname,lname){
    this.fistName = fname,
    this.lastName = lname
    }

    sayMyName(){
        console.log("My name is hi " + this.fistName + this.lastName )
    }
}

let classP1 = new Person("walker","dwayne");

class SuperHero extends Person{ //inheriting the properties and methods of Person class
    constructor(fname,lname){
        super(fname,lname) // this will call the Person class constructor
    }
}
classP1.sayMyName();

let superP1 = new SuperHero('jack','daniel');
superP1.sayMyName();

console.log(classP1.__proto__);