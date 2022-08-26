const inti = async() => {
    console.log(multiplyBy10(10));
    console.log(multiplyBy10(11));
    console.log(multiplyBy10(12));
}

window.addEventListener('DOMContenLoaded', inti);

const multiplyBy10 = (num) => {
    return num * 10;
}