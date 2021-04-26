class Person{
    constructor(){
    }
    set name(value){this._name=value;}
    set address(value){this._address=value;}
    set companyName(value){this._companyName=value;}
    set position(value){this._position=value;}

    get name(){
        return this._name;
    }
    get address(){
        return this._address;
    }
    get companyName(){
        return this._companyName;
    }
    get position(){
        return this._position;
    }
    toString(){
        console.log(this.name+" "+this.address+" "+this.companyName+" "+this.position);
    }
}

class PersonBuilder{
    constructor(p=new Person()){
        this.person=p;
    }
    get generalinfo(){
        return new PersonGeneralInfoBuilder(this.person);
    }
    get works(){
        return new EmployeePersonBuilder(this.person);
    }
    build(){
        return this.person;
    }
}

class PersonGeneralInfoBuilder extends PersonBuilder{
    constructor(person) {
        super(person);
    }
    name(_name){
        this.person.name=_name;
        return this;
    }
    address(_addr){
        this.person.address=_addr;
        return this;
    }
}

class EmployeePersonBuilder extends PersonBuilder{
    constructor(person){
        super(person);
    }
    companyName(cName){
        this.person.companyName=cName;
        return this;
    }
    position(pos){
        this.person.position=pos;
        return this;
    }
}

let p=new PersonBuilder();

p.generalinfo.address("C-14").name("Bharat").works.companyName("Tek").position("Engg");
p.build().toString();

