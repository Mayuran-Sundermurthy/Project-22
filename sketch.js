const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options = {
		isStatic:true,
		restitution:0.3
	}

	


	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	bob1 = Bodies.circle(314,300,43,ball_options);
	World.add(world,bob1);
	bob2 = Bodies.circle(357,300,43,ball_options);
	World.add(world,bob2);
	bob3 = Bodies.circle(400,300,43,ball_options);
	World.add(world,bob3);
	bob4 = Bodies.circle(443,300,43,ball_options);
	World.add(world,bob4);
	bob5 = Bodies.circle(486,300,43,ball_options);
	World.add(world,bob5);

	rope3 = new rope(roof,bob3,400,400);
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	rope3.display();
  
  //create ellipse shape for multiple bobs here
	ellipse(bob1.position.x,bob1.position.y,43,43);
	ellipse(bob2.position.x,bob2.position.y,43,43);
	ellipse(bob3.position.x,bob3.position.y,43,43);
	ellipse(bob4.position.x,bob4.position.y,43,43);
	ellipse(bob5.position.x,bob5.position.y,43,43);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
