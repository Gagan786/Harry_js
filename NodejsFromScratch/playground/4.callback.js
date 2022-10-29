// setTimeout(() => {
//     console.log("this is after 2 seconds");
// }, 2000);

// const names = ['Andrew', 'tate'];
// const shortNames = names.filter((name) => {
//     return name.length > 4;
// });
// // this thing gonna execute after main function finishes executing.
// const geocode = (adress,callback) => {
    
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data);
//         return data;
//     }, 2000);
// }
// // const data get retured value when main fucntion ahs finished its exection.
// const data = geocode('Philadelphia', () => {


// });
// console.log(data);

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
    setTimeout(() => {
        var sum = a + b;
        callback(sum);
    }, 2000);
}

add(1, 8, (sum) => {
    console.log(sum) // Should print: 5
})
