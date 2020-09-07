
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin;

var paperObj;
var ground; 
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
fill("white");

	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(600,670,1200,20)
	dustbin = new Box();
	
	paperObj = new Paper(50,650,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  
  paperObj.display();
  dustbin.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});
	}
}

