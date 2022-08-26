const xArray  = [1,2,3];
const arrayAdd = (array,score) =>{
    array.push(score);
    return array;

}

let result = arrayAdd(xArray,5);
console.log(result);
xArray[3]  = 6; //mutable 
// //Reassigining is not same as mutable or immutable
// // xArray = [1,2,3];
// console.log(xArray);
// console.log(result);
// const name = "gagan";
// // name = "va";
// console.log(name);

//Shallow copy
//with spread operator
const zArray = [...xArray];
let bArray = [xArray,20];

console.log(zArray == xArray);
console.log(bArray);
//with Object.assign functiom

zArray.push([11,12,13]);
console.log(zArray);
let znewArray = Object.assign([],zArray);
console.log("this is " + (zArray === znewArray));
znewArray.push(4);
console.log(zArray);

//Shallow copy of object 
const objShallow = {
    name : "gagan",
    id : "23BT",
    course : {
        name : ["web development"],
        id : "WB11"
    }
}
 Object.freeze(objShallow); // shallow Freeze

console.log(objShallow);
objShallow.course.name = "AI";
console.log(objShallow);

const objSpdAgn = {...objShallow};
console.log("this is comparison " , objSpdAgn == objShallow);
objShallow.course.id = "AI01";
objShallow.name = "Rahul";
console.log("this is spread Assign " , (objSpdAgn));
const newObj = JSON.parse(JSON.stringify(objSpdAgn));
console.log("newobj " + newObj.name);

let deepClone = obj => {

    if((typeof obj !== "object") || obj == null) 
        return obj;

    let newObject  = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        let value = obj[key];
        newObject[key] = deepClone(value);
    }
    return newObject;
}

const newObjShallow = deepClone(objShallow);
console.log(newObjShallow == objShallow);
newObjShallow.course.name = "DBMs";
console.log(newObjShallow);

    

