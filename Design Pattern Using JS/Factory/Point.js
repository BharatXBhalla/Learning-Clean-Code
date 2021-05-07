class Point{
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }
    static newCartesianPoint(x,y){
        return new Point(x,y);
    }
    static newPolarPoint(rho,theta){
        return new Point(rho*Math.cos(theta),rho*Math.sin(theta));
    }
}

let p=Point.newCartesianPoint(4,5);
console.log(p);

p=Point.newPolarPoint(2,Math.PI/3);
console.log(p);