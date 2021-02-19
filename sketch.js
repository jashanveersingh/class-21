var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  sprite1=createSprite(100,100,50,80);
  sprite1.shapeColor="green";

  sprite2=createSprite(200,100,50,80);
  sprite2.shapeColor="green";

  sprite3=createSprite(300,100,50,80);
  sprite3.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 

 if(isTouching(movingRect,sprite1)){
  movingRect.shapeColor = "pink";
  sprite1.shapeColor = "pink";

 }
 else{

  movingRect.shapeColor = "green";
  sprite1.shapeColor = "green";



 }


  drawSprites();
}







