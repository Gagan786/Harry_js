class Pizza{
    constructor(size,crust,sauce){
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.toppigs = []

    }
prepare(){ console.log("Preparing...")}
bake(){console.log(`Bakin`)}
ready(){console.log(`ready!`)}
}

class Salad{
   constructor(size,dressing){
       this.size = size;
       this.dressing = dressing;

   }
   prepare(){console.log(`preparing...`)}
   toss(){console.log(`tossing...`)}
   ready(){console.log(`Ready!`)}
}
class StuffedCrushedPizza extends Pizza{
    stuff(){console.log(`stuffing...`)}
}
class ButterCrushedPizza extends Pizza{
    butter(){console.log(`buttering...`)}
}
//problem Repeating methods  - Not D.R.Y 
class stuffedButterCrustPizza extends Pizza {
    stuff(){console.log(`Stuffing the pizza`)}
    butter(){console.log(`butter the pizza...`)}
}

const pizza = new stuffedButterCrustPizza();
pizza.stuff();
pizza.butter();

//Instead Composition over Inheritance

const stuff = () =>{
    return { function() {
        console.log(`Stuffing...`);
    }}
}
const butter = () =>{
    return () => {
        console.log(`Buttering...`);
    } 
}
const prepare = () =>{
    return () => {
        console.log(`Preparing...`);
    }
}
const bake = () =>{
    return ()=> {
        console.log(`Baking...`);
    }
}
const ready = () =>{
    return () => {
        console.log(`Ready!...`);
    }
} 
const toss = () =>{
    return ()=> {
        console.log(`tossing...`);
    }
}
const pizzaFxn = (size,crust,sauce) =>{
   const createPizza = {
        size : size,
        crust : crust,
        sauce : sauce,
        toppigs : []
   }
   let preparePizza = prepare();
   let bakePizza = bake();
   let readyPizza = ready();
    return {
        ...createPizza,
        pre : prepare(),
        baker : bake(),
        read : ready(),
        preparePizza,
        bakePizza,
        readyPizza
    } 
}

const createSalad = (size,dressing) =>{
    return{
        size,
        dressing,
        ...prepare(),
        ...bake(),
        ...ready()
    }
}


const myPizza = pizzaFxn('medium','thin','original');
console.log(myPizza); 
console.log(myPizza.pre());
console.log(prepare()());