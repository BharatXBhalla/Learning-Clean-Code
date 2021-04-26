class Journal{
    constructor(){
        this.entries = {};
        Journal.count=0;
    }

    addEntry(text){
        let c = ++Journal.count;
        let entry=`${c}:${text}`;
        this.entries[c]=entry;
        return c;
    }

    removeEntry(index){
        delete this.entries[index];
    }

    toString(){
        return Object.values(this.entries).join('\n');
    }

    /****
     * Bad Code
     * 
     * save(filename)
     * 
     * load(filename) 
     * 
     * Above functions does not solves the purpose of Class Journal 
     * Or We can have some Preprocessing Before Saving annd loading 
     * So we Require Separate of Concerns 
     * Load and Save can be from URL , FileLocation or any other Source 
     * 
     */

}

class PersistenceManager{
    preprocess(j){
        //data preprocessing
    }
    saveToFile(journal,filename){
        fs.writeFileSync(filename,journal.toString());
    }
    loadFromFile(journal,filename){

    }
}

let j=new Journal();
j.addEntry('Hello i am');
j.addEntry('Welcome home');
console.log(j.toString());

let f="c:\d.txt";
let p=new PersistenceManager();
// p.saveToFile(j,f);
