class Point{
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }

}
// following separtion of concerns
class PointFactory{
    static newCartesianPoint(x,y){
        return new Point(x,y);
    }
    static newPolarPoint(rho,theta){
        return new Point(rho*Math.cos(theta),rho*Math.sin(theta));
    }
}

let p=PointFactory.newCartesianPoint(4,5);
console.log(p);

p=PointFactory.newPolarPoint(2,Math.PI/3);
console.log(p);