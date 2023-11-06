class Dot {
    constructor(x,y){
        this.x=x
        this.y=y
    }

    distanceTo(aDot){
        const a = (this.x - aDot.x) ** 2
        const b = (this.y - aDot.y) ** 2
        return Math.sqrt(a+b)

    }
}

const point1 = new Dot(1,4)
const point2 = new Dot(4,7)
console.log(point1.distanceTo(point2));
