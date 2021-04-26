class Tag
{
  static get indentSize() { return 2; }

  constructor(name='', text='')
  {
    this.name = name;
    this.text = text;
    this.children = [];
  }

  toStringImpl(indent)
  {
    let html = [];
    let i = ' '.repeat(indent * Tag.indentSize);
    html.push(`${i}<${this.name}>\n`);
    if (this.text.length > 0)
    {
      html.push(' '.repeat(Tag.indentSize * (indent+1)));
      html.push(this.text);
      html.push('\n');
    }

    for (let child of this.children)
      html.push(child.toStringImpl(indent+1));

    html.push(`${i}</${this.name}>\n`);
    return html.join('');
  }
  toString()
  {
    return this.toStringImpl(0);
  }
  addChildren(tag){
      this.children.push(tag);
  }
}

// If no Builder then we would have build like below 
let ul=new Tag('ul');
ul.children.push(new Tag("li","hello"));
ul.children.push(new Tag("li","world"));

console.log(ul.toString());

class HtmlBuilder{
    constructor(name,text) {
        this.root=new Tag(name,text);        
    }
    addChildren(name,text){
        let c=new Tag(name,text);
        this.root.addChildren(c);
        return this;
    }
    toString(){
        return this.root.toString();
    }
    build(){
        return this.root;
    }
}

let htmlbuilder=new HtmlBuilder("ul");
htmlbuilder.addChildren("li","hello").addChildren("li","world");
console.log(htmlbuilder.toString());