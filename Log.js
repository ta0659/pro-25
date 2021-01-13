class Log {
  constructor(x, y, height,angle) {
    var options = {
       'restitution':0.8,
       'friction':1,
      'density':1.0
    }
    this.body = Bodies.rectangle(x, y,width, height, options);
    this.width = this.width;
    this.height = height;
    this.dustbin = loadImage('dustbingreen.png');
    Matter.Body.setAngle(this.body,angle)
    
   // World.add(World, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);1
    image(this.dustbin,500,145,175,200);
    strokeWeight(4);
    stroke("white")
    fill("white");
    rect(0, 0, this.width, this.height);
    pop();
  }
};