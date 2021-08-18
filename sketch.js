
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1,b2,b3,b4,b5,b6;
var thing;
var rope,rope2,rope3,rope4,rope5,rope6;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	b1 = new BALL(400,350);
	b2 = new BALL(460,350);
	b3 = new BALL(340,350);
	b4 = new BALL(280,350);
	b5 = new BALL(520,350);
	b6 = new BALL(580,350);

	thing = new BLOCK(400,100,500,50);

	rope = new ROPE(b1.body,{x: 400, y: 100});
	rope2 = new ROPE(b2.body,{x: 460, y: 100});
	rope3 = new ROPE(b3.body,{x: 340, y: 100});
	rope4 = new ROPE(b5.body,{x: 520, y: 100});
	rope5 = new ROPE(b4.body,{x: 280, y: 100});
	rope6 = new ROPE(b6.body,{x: 580, y: 100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
//   console.log(b6.body.position);

  thing.display();

  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();

  b2.display();
  b1.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();

  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW){
		console.log("UP");
		Matter.Body.setPosition(b6.body, {x: 600, y: 90});
	}
}



