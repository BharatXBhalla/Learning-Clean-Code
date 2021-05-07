
const readline = require("readline");
let rl = readline.createInterface({
    input:process.stdin,
    output:process.output
})

// Inheritance is the main focus.

class HotDrink{
    consume(){}
}//asbstract

class Tea extends HotDrink {
    consume(){
        console.log("this tea is nice with lemon");
    }
}
class Coffee extends HotDrink {
    consume(){
        console.log("This is coffee is declious");
    }
}

class HotDrinkFactory{
    prepare(){}
}

class TeaFactory extends HotDrinkFactory{
    prepare(){
        console.log("Puting Tea Back");
        return new Tea();
    }
}

class CoffeFactory extends HotDrinkFactory {
    prepare(){
        console.log("Putting some Beans");
        return new Coffee();
    }
}

let AvailableDrink = Object.freeze({
    coffee:CoffeFactory,
    tea:TeaFactory
})

//Input to it gives Drink
// New Factory ==> HptDrinkMachine Has to be changed 
class HotDrinkMachine{

    constructor(){
        this.factories={};
        for(let drinkfactory in AvailableDrink){
            this.factories[drinkfactory] = new AvailableDrink[drinkfactory]();
        }
    }

    interact(consumer){
        rl.question('Please Specifiy Drink and Amt ', (answer,tmp=this) =>{
            let drinkname=answer;
            let df = tmp.factories[drinkname].prepare(10);
            rl.close();
            consumer(df);
        });
    }

    makeDrink(type){

        switch(type){
            case 'tea':
                return new TeaFactory().prepare(200);
            case 'coffee':
                return new CoffeFactory().prepare(100);
            default:
                throw new Error('Which Drink I don\' know');
        }
    }
}

let hdf = new HotDrinkMachine();

hdf.interact(function(drink){
    drink.consume();
})
// rl.question("Which HotDrink ?",function(answer){

//     let drink = hdf.makeDrink(answer);
//     drink.consume();

//     rl.close();
// });

