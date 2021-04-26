class Rectangle{
    constructor(_width,_height){
        this._width=_width;
        this._height=_height;
    }
    get width(){return this._width}
    get height(){return this._height}
    set width(value){this._width=value}
    set height(value){this._height=value}


    get area(){
        return this._height*this._width;
    }
}
class Square extends Rectangle{
    constructor(side){
        super(side,side);
    }
    //quick fix so that if one set width then it  changes both height and width
    set width(value){
        this._width=value;
        this._height=value;
    }
    set height(value){
        this._width=value;
        this._height=value;
    }
    get width(){return this._width}
    get height(){return this._height}

}
 let r=new Rectangle(3,4);
 console.log(r.area);

 let s=new Square(3);
 s.width=4; // here i have the flexibility to change width which is not a good design 
 console.log(s.area);


//Now Supose there is a function which changes multiplies width and height=10

let hypothetical = function(rcc){
    let width = rcc.width;
    rcc.height=10;
    console.log("Assumed"+width+"*"+rcc.height+" But Got "+rcc.area); // assumed it would give width * rcc.height;
};

hypothetical(r);

hypothetical(s);