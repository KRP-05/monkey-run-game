
var monkey , monkey_running
var banana ,bananaImage, obstacles, obstacleImage
var FoodGroup, obstacleGroup
var score = 0 ;
var Play = 1;
var End = 0;
var gameState = 1;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkeystop = loadAnimation("sprite_0.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300)
  monkey = createSprite(50,250,10,10);
  monkey.addAnimation("lol",monkey_running)
  monkey.scale = 0.1
ground = createSprite(300,280,1200,10);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white")
text("survival time = "+ score,500,50)
  
  monkey.collide(ground);
 
  if(gameState === 1) {
  ground.velocityX = -5
    food();
  obstacle();
  
if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12;
        
    }
    
    monkey.velocityY = monkey.velocityY +0.8
  if(ground.x >0){
    ground.x = ground.width/2
  }
    
    score = Math.round(frameCount/frameRate())
  
    
    if( monkey.isTouching(obstacleGroup)){
      gameState = End;
    }
    //monkey.collide(obstacleGroup)
    
    if(gameState === End){
      ground.velocityX = 0
      obstacleGroup.setVelocityXEach(0);
      bananaGroup.setVelocityXEach (0);
      bananaGroup.setLifetimeEach(-1);
      obstacleGroup.setLifetimeEach(-1);
    }
  }
  
  drawSprites();
}

function food() {
  if(frameCount% 80===0){
  banana = createSprite(600,100,10,10);
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.y = Math.round(random(120,200));
    banana.velocityX = -5;
    banana.lifetime = 120;
    bananaGroup.add(banana)
    
}
}

function obstacle() {
  if(frameCount % 300 === 0 ){
obstacles = createSprite(600,250,10,10);
    obstacles.scale = 0.1;
    obstacles.addImage("o",obstacleImage);
    obstacles.velocityX = -6
     obstacles.collide(ground);
    obstacleGroup.add(obstacles)
  }
}













