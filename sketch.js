
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1, rope2, rope3, rope4, rope5;
var bob1, bob2, bob3, bob4, bob5;
var roof1;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(width/2,100,600,30);

	bob1 = new bob(280,400,60);
	bob2 = new bob(340,400,60);
	bob3 = new bob(width/2,400,60);
	bob4 = new bob(460,400,60);
	bob5 = new bob(520,400,60);

	rope1 = new rope(bob1.body,roof1.body);
	rope2 = new rope(bob2.body,roof1.body);
	rope3 = new rope(bob3.body,roof1.body,);
	rope4 = new rope(bob4.body,roof1.body);
	rope5 = new rope(bob5.body,roof1.body);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
  drawSprites();
 
}

