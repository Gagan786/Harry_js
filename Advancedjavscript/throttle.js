console.log("this is throttle");

const init = () => { 
    const tButton = document.querySelector('button');
    buttonResult = tButton.addEventListener('click', throttle(clickLog, 2000));
    console.log(buttonResult);
}
const clickLog = () => {
    console.log("clicked");
};
// setInterval(()=>{ console.log('clicked') }, 200);
let buttonResult;
console.log(buttonResult);
document.addEventListener('DOMContentLoaded', init);

const throttle = (fn, delay) =>
{
    let lastTime = 0 ;
    console.log("called throttle immediately");

    return () => {
        const now = new Date().getTime();
        if (now - lastTime < delay) return;
        lastTime = now;
        fn();
    }
    
}