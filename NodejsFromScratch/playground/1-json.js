//json is used to manipulate teh data
const fs = require('fs');
// const { parse } = require("path");
// const { json } = require('stream/consumers');

// var book = {
//     title: 'Ego is the enemy',
//     author : 'Ryan Holiday',
// }
//convert the data into string
// let bookJSON  = JSON.stringify(bo/ok);
// console.log(bookJSON);
//convert the Strign data into object 
// let parseData = JSON.parse(bookJSON);
// console.log(parseData);
//read filesync returns datA Buffer i.e. in binary form
const jsonData = fs.readFileSync('1-json.json');
const bookData = jsonData.toString();
const updateData = JSON.parse(bookData);
// updateData.title = "new title"
console.log(updateData);

// fs.appendFileSync('1-json.json', jsonData);

