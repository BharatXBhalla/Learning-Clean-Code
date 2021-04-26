let Color = Object.freeze({
    red : 'red',
    green : 'green',
    blue : 'blue'
}); 

//JS Constants Object Equivalent
let Size = Object.freeze({
    small : 'small',
    medium : 'medium',
    large : 'large'
});

class Product
{
    constructor(name,color,size){
        this.name=name;
        this.color=color;
        this.size=size;
    }
}

class ProductFilter
{
    //inital 
    filterByColor(products,color){ 
        return products.filter(p=>p.color === color);
    }
    //modification 
    filterBySize(products,size){
        return products.filer(p=>p.size === size);
    }
    //Another Filter and so on...
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree',Color.green,Size.large);
let house = new Product('House', Color.blue,Size.large);

let products = [apple,tree,house];

let pf= new ProductFilter();
for(let p of pf.filterByColor(products,Color.green)){
    console.log(`* ${p.name} ${p.size} ${p.color}`);
}

class ColorSpecification{
    constructor(color){
        this.color=color;
    }
    isStatisfied(item){
        return item.color === this.color;
    }
}

class SizeSpecification{
    constructor(size){
        this.size=size;
    }
    isStatisfied(item){
        return item.size === this.size;
    }
}

class Filter{
    filter(items,spec){
        return items.filter(x=> spec.isStatisfied(x));
    }
}

class AndSpecification{
    constructor(...specs){
        this.specs=specs;
    }
    isStatisfied(item){
        return this.specs.every(x => x.isStatisfied(item));
    }
}

let bf=new Filter();
console.log(`Green Products :`);
for(let p of bf.filter(products,new ColorSpecification(Color.green))){
    console.log(`* ${p.name} ${p.size} ${p.color}`);
}
let andSpecs=new AndSpecification(new ColorSpecification(Color.green),new SizeSpecification(Size.small));
for(let p of bf.filter(products,andSpecs)){
    console.log(`* ${p.name} ${p.size} ${p.color}`);
}


