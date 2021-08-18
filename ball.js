class BALL {
    constructor(x,y){

        this.options = {
            isStatic: false,
            restitution: 1.0,
            density: 1.0,
            friction: 1.0
        }

        this.raduis = 30;

        this.body = Bodies.circle(x,y,this.raduis,this.options);
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position

        ellipseMode(CENTER);
        fill(155,0,255);
        ellipse(pos.x,pos.y,this.raduis*2);
        
    }
}