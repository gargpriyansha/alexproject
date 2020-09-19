class Points{
    constructor(x, y, r) {
        var options = {
            isStatic = true
        }
    
        this.body = bodies.circle(200,100,20,ball_options)
         this.r = radius;
         World .add(world,this.body);
    }

    
  
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS)
        ellipse(0,0,20,20);
        pop();
      }
    
}