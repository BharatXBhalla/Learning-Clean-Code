
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

//Input to it gives Drink
// New Factory ==> HptDrinkMachine Has to be changed 
class HotDrinkMachine{

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
rl.question("Which HotDrink ?",function(answer){

    let drink = hdf.makeDrink(answer);
    drink.consume();

    rl.close();
});

