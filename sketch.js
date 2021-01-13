
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1,log2,log3;
var paper;
var ground1,ground2;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;


  ground1= new Ground(1005,635,140,1);
  ground2= new Ground(1077,572,1,100)
  ground=new Ground(width/2, 650, width, 15 );
	log3 = new Log(430,290,1,1);
  paper= new Paper(150,600,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);

  ground.display();
  ground1.display();
  ground2.display();
  paper.display();
  log3.display();



  keypressed();
  drawSprites();
 
}

function keypressed(){
	if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-2});
   }
}
