class Machine{

    constructor(){
        if(this.constructor.name == "Mahcine")
            throw new Error('Machine is Abstract');
    }
    print(){}
    scan(){}
    fax(){}
}

class ModernPrinter extends Machine{
    constructor(){}
    print(){}
    scan(){}
    fax(){}
}

class OldPrinter extends Machine{
    constructor(){}
    print(){//implemented
    }
    scan(){
        //not implemented
    }
    fax(){
        //not implemented
    }
}

//rather segreated specific functionalties into Multiple interfaces
