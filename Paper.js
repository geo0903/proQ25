class paper
{
    constructor(pointA, pointB){
        var options = {
            pointA: pointA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
       
        }
        this.pointB=pointB
        this.paper1 = Constraint.create(options);
        this.Image=loadImage("paper.png")
        World.add(world, this.paper1);
    }
fly(){
    this.paper1.pointA=null
}
    display(){
        if(this.paper.pointA){
           var pointA = this.paper1.pointA.position;
        var pointB = this.pointB;
        strokeWeight(4);

        }

           
    }
    
}