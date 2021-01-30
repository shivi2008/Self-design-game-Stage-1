var plane, planeImg;
var castle, castleImg;
var bird, birdImg;
var  runway, runwayImg;
var background, backgroundImg;
//the ground is going to be a invisible sprite.
var ground;

function preload(){
planeImg= loadImage("Images/Plane.png");
castleImg= loadImage("Images/Castle.png");
birdImg= loadImage("Images/Bird.png");
runwayImg= loadImage("Images/Runway.png");
backgroundImg= loadImage("Images/Bg6.jpg");


}

function setup(){
createCanvas(1400,600);
background=createSprite(350,300,150,300);
background.addImage(backgroundImg); 
background.scale= 3;
background.velocityX= -3;

plane= createSprite(120,250,300,120);
plane.addImage(planeImg)
plane.scale=0.5;
}


function draw(){

if(background.x <200){
background.x= background.width/2;
}   

if(keyDown("UP_ARROW")){
plane.y= plane.y-3;
}

if(keyDown("DOWN_ARROW")){
plane.y= plane.y+3;
}

if(keyDown("RIGHT_ARROW")){
plane.x=plane.x+3    
}
   
spawnBirdEnemies();
drawSprites();
text(mouseX+","+mouseY,mouseX,mouseY);
}

function spawnBirdEnemies(){
if(frameCount %80===0){
bird=createSprite(1250,500,120,320);
bird.addImage(birdImg);
bird.scale=0.2;
bird.velocityX= -5;
 
bird.y=Math.round(random(45,358));
}    
}