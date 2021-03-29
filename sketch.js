
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,Rock
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  Canvas=createCanvas(600,500);
  monkey=createSprite(100,455,50,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,490,600,20);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  

  
}


function draw() {
background("white");
  Food();
  Rock();
  
   if (ground.x < 300){
      ground.x = ground.width/2;
   }
  
  if(keyDown("SPACE") && monkey.y>=420){
    monkey.velocityY=-10;
  
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  drawSprites();
  
}

function Food(){
  if(frameCount % 80 === 0){
    var banana=createSprite(300,300,50,50);
    banana.y=Math.round(random(120,350));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-5;
    
  }
}
  
  function Rock(){
  if(frameCount % 80 === 0){
    var obstacle=createSprite(300,465,50,50);
    obstacle.x=Math.round(random(120,500));
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.1;
  obstacle.velocityX=-5;
    
  }
  
  
}




