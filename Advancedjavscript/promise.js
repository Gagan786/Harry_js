//promise states - pending,fulfilled,rejected
const dataCheck = () => {
    return {
        name : 'Ginny',
        age: 20,
        profession : 'engineer,youtuber,enterpreneur'
    }

}
const myPromise = new Promise((resolve, reject) => {
    let error = false;
    let success = dataCheck();
    if (success) {
        resolve(success);
    }
    else {
        reject('bo! rejected the promise has been rejected');
    }
});
console.log(myPromise);
let proResult = myPromise;
console.log(`${proResult}`);
myPromise.then(value=>{
    console.log(value.name);
}).catch(error=>{
    console.log(error);
})