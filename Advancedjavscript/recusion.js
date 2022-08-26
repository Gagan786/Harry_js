const fibonacci = (num,array = [0,1]) =>{
while(num > 2){
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num -= 1;
}
return array;

}
console.log(fibonacci(12));