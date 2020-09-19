class Pacman{
    constructor(x, y, width, height) {
        var options = {
          'friction':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.distance = 0;
        this.height = height;
        this.image = loadImage("Ghosts/pacman.png");
        World.add(world, this.body);
     

      }

      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    
}