import {posts} from "./posts.mjs";

// console.log(posts.id);
// console.log(posts.filter((post) => post.id));
let arrayId = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const init = async () => {
    useForEach(arrayId);
}
// var document = Document;
document.addEventListner('DOMContentLoaded', initApp);

const getPost = async (id) =>{
    return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
}
const useForEach = (ids) => {
    ids.ForEach(id => console.log(id));
}