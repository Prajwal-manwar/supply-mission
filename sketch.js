var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1Sprite, box2Sprite, box3Sprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
     

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1Sprite=createSprite(width/2, height-55, 200,20);
	box1Sprite.shapeColor=color("red")

	box2Sprite=createSprite(width/1.633, height-100, 20,100);
	box2Sprite.shapeColor=color("red")

	box3Sprite=createSprite(width/2.579, height-100, 20,100);
	box3Sprite.shapeColor=color("red")

    part1 = new Box(width/2, height-55, 80, 20)
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
    box1SpriteBody = Bodies.rectangle(width/2, height-55, 200, 20)
	World.add(world, box1SpriteBody)

	box2SpriteBody = Bodies.rectangle(width/1.633, height-100, 20, 100)
	World.add(world, box2SpriteBody);

	box3SpriteBody = Bodies.rectangle(width/2.579, height-100, 20, 100)
	World.add(world, box3SpriteBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
   
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1SpriteBody.x= box1SpriteBody.position.x
  box1SpriteBody.y= box1SpriteBody.position.y
  box2SpriteBody.x= box1SpriteBody.position.x
  box2SpriteBody.y= box1SpriteBody.position.y
  box3SpriteBody.x= box1SpriteBody.position.x
  box3SpriteBody.y= box1SpriteBody.position.y
  if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false)
    
    
  }
   
  drawSprites();
  
  
}
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false)
    
    
  }
}




