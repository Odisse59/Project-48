var player, playerImg, blueghost, blueghostImg,bg;
var redghost, reghostImg, yellowghost, yellowghostImg;
var edges;
var star, starImg, star2, star2Img, star3, star3Img;

var starsound2, gameover;

var PLAY = 1, END = 2, WIN = 3

var gameState = PLAY

function preload(){
bg = loadImage("spacebg.png")
blueghostImg = loadImage("blueghost.png")
playerImg = loadImage("pacman.png")
redghostImg = loadImage("redghost.png")
yellowghostImg = loadImage("yellowghost.png")
starImg = loadAnimation("star.gif")
star2Img = loadAnimation("star.gif")
star3Img = loadAnimation("star.gif")
starsound2 = loadSound("starsound2.wav")
gameover = loadSound("gameover.wav")
}

function setup() {
  createCanvas(1000,650);
  player = createSprite(455,150, 50, 50);
  player.addImage(playerImg)
  player.scale = 0.09
  blueghost = createSprite(300, 70, 50, 50);
  blueghost.addImage(blueghostImg)
  blueghost.scale = 0.027
  redghost = createSprite(700, 230, 50, 50);
  redghost.addImage(redghostImg)
  redghost.scale = 0.10
  yellowghost = createSprite(200, 550, 50, 50);
  yellowghost.addImage(yellowghostImg)
  yellowghost.scale = 0.10
  star = createSprite(70,80)
  star.visible = false
  star.addAnimation("starImg",starImg)
  star.scale = 0.3
  star2 = createSprite(70,296)
  star2.visible = false
  star2.addAnimation("star2Img",star2Img)
  star2.scale = 0.3
  star3 = createSprite(70,512)
  star3.visible = false
  star3.addAnimation("star3Img",star3Img)
  star3.scale = 0.3


  wall1 = createSprite(500,150,30,100)
  wall1.shapeColor = "red"
  wall2 = createSprite(300,150,30,100)
  wall2.shapeColor = "red"
  wall3 = createSprite(400,110,230,30)
  wall3.shapeColor = "red"
  wall4 = createSprite(500,190,200,30)
  wall4.shapeColor = "red"
  wall5 = createSprite(300,300,30,200)
  wall5.shapeColor = "red"
  wall6 = createSprite(425,400,300,30)
  wall6.shapeColor = "red"
  wall7 = createSprite(500,150,30,100)
  wall7.shapeColor = "red"
  wall8 = createSprite(560,360,30,100)
  wall8.shapeColor = "red"
  wall9 = createSprite(595,310,100,30)
  wall9.shapeColor = "red"
  wall10 = createSprite(630,400,30,160) 
  wall10.shapeColor = "red"
  wall11 = createSprite(495,490,300,30)
  wall11.shapeColor = "red"
  wall12 = createSprite(640,190,270,30)
  wall12.shapeColor = "red"
  wall13 = createSprite(760,390,30,370)
  wall13.shapeColor = "red"
  wall14 = createSprite(675,590,200,30)
  wall14.shapeColor = "red"
  wall15 = createSprite(465,590,620,30) 
  wall15.shapeColor = "red" 
  wall16 = createSprite(150,455,30,300)
  wall16.shapeColor = "red"
  wall17 = createSprite(150,160,30,300) 
  wall17.shapeColor = "red"
  wall18 = createSprite(400,27,500,30)
  wall18.shapeColor = "red"
  wall19 = createSprite(470,27,670,30)
  wall19.shapeColor = "red"
  wall20 = createSprite(800,62,30,100)
  wall20.shapeColor = "red"
  wall21 = createSprite(820,110,70,30)
  wall21.shapeColor = "red"
  wall22 = createSprite(850,295,30,400)
  wall22.shapeColor = "red"
  wall23 = createSprite(815,500,100,30)
  wall23.shapeColor = "red"
}

function draw() {
  background(bg);  

  edges = createEdgeSprites();
 
  if(gameState === PLAY){

    if(keyDown(LEFT_ARROW)){
      player.x = player.x-3.3
    }
  
    if(keyDown(RIGHT_ARROW)){
      player.x = player.x+3.3
    }
  
    if(keyDown(UP_ARROW)){
      player.y = player.y-3.2
    }
  
    if(keyDown(DOWN_ARROW)){
      player.y = player.y+3.2
    }

   if(redghost.visible === true){
    redghost.y = redghost.y +2.5
    redghost.x = redghost.x -1.8
   }
    
  if(yellowghost.visible === true){
    yellowghost.y = yellowghost.y -2.5
    yellowghost.x = yellowghost.x +1
  }
    
  if(blueghost.visible === true){
    blueghost.x = blueghost.x +.9
    blueghost.y = blueghost.y +1.1
  }

    if(redghost.isTouching(player)){
      redghost.visible = false
      redghost.velocity.x = 0
      redghost.velocity.y =  0
      star.visible = true
      starsound2.play();
    }
  
    if(yellowghost.isTouching(player)){
      yellowghost.visible = false
      yellowghost.velocity.x = 0
      yellowghost.velocity.y = 0
      star2.visible = true
      starsound2.play();
    }
  
    if(blueghost.isTouching(player)){
      blueghost.visible = false
      blueghost.velocity.x = 0
      blueghost.velocity.y = 0
      star3.visible = true
      starsound2.play();
      gameState = WIN
    }
  
  
    player.bounceOff(edges)
    redghost.bounceOff(edges)
    blueghost.bounceOff(edges)
    yellowghost.bounceOff(edges)
  
    redghost.bounce(yellowghost);
    redghost.bounce(blueghost);
    blueghost.bounceOff(yellowghost);

    if(redghost.isTouching(wall16)){
      gameState = END
      gameover.play();
    }
  
    if(yellowghost.isTouching(wall20)){
      gameState = END
      gameover.play();
    }
  
    if(blueghost.isTouching(wall23)){
      gameState = END
      gameover.play();
    }

  }
 
  if(gameState === END){
    player.velocity.x = 0
    player.velocity.y = 0
    redghost.velocity.x = 0
    redghost.velocity.y = 0
    blueghost.velocity.x = 0
    blueghost.velocity.y = 0
    yellowghost.velocity.x =0
    yellowghost.velocity.y = 0
    textSize(60)
    fill("Black")
    text("GAME OVER!",360,280)
    textSize(30)
    text("YOU LOST!",380,310)
    textSize(17)
    text("Press 'R' TO RESET",375,325)
    if(keyCode === 82){
      reset();
    }
    
  }
  
  if(gameState === WIN){
    player.velocity.x = 0
    player.velocity.y = 0
    redghost.velocity.x = 0
    redghost.velocity.y = 0
    blueghost.velocity.x = 0
    blueghost.velocity.y = 0
    yellowghost.velocity.x =0
    yellowghost.velocity.y = 0
    textSize(60)
    fill("Black")
    text("GAME OVER!",360,280)
    textSize(30)
    text("YOU WIN!",380,310)
    textSize(17)
    text("PRESS 'R' TO RESET",375,325)
    if(keyCode === 82){
      reset();
    }
  }


  

  player.collide(wall1)
  player.collide(wall2)
  player.collide(wall3)
  player.collide(wall4)
  player.collide(wall5)
  player.collide(wall6)
  player.collide(wall7)
  player.collide(wall8)
  player.collide(wall9)
  player.collide(wall10)
  player.collide(wall11)
  player.collide(wall12)
  player.collide(wall13)
  player.collide(wall14)
  player.collide(wall15)
  player.collide(wall16)
  player.collide(wall17)
  player.collide(wall18)
  player.collide(wall19)
  player.collide(wall20)
  player.collide(wall21)
  player.collide(wall22)
  player.collide(wall23)

  redghost.collide(wall1)
  redghost.collide(wall2)
  redghost.collide(wall3)
  redghost.collide(wall4)
  redghost.collide(wall5)
  redghost.collide(wall6)
  redghost.collide(wall7)
  redghost.collide(wall8)
  redghost.collide(wall9)
  redghost.collide(wall10)
  redghost.collide(wall11)
  redghost.collide(wall12)
  redghost.collide(wall13)
  redghost.collide(wall14)
  redghost.collide(wall15)
  redghost.collide(wall16)
  redghost.collide(wall17)
  redghost.collide(wall18)
  redghost.collide(wall19)
  redghost.collide(wall20)
  redghost.collide(wall21)
  redghost.collide(wall22)
  redghost.collide(wall23)

  blueghost.collide(wall1)
  blueghost.collide(wall2)
  blueghost.collide(wall3)
  blueghost.collide(wall4)
  blueghost.collide(wall5)
  blueghost.collide(wall6)
  blueghost.collide(wall7)
  blueghost.collide(wall8)
  blueghost.collide(wall9)
  blueghost.collide(wall10)
  blueghost.collide(wall11)
  blueghost.collide(wall12)
  blueghost.collide(wall13)
  blueghost.collide(wall14)
  blueghost.collide(wall15)
  blueghost.collide(wall16)
  blueghost.collide(wall17)
  blueghost.collide(wall18)
  blueghost.collide(wall19)
  blueghost.collide(wall20)
  blueghost.collide(wall21)
  blueghost.collide(wall22)
  blueghost.collide(wall23)

  yellowghost.collide(wall1)
  yellowghost.collide(wall2)
  yellowghost.collide(wall3)
  yellowghost.collide(wall4)
  yellowghost.collide(wall5)
  yellowghost.collide(wall6)
  yellowghost.collide(wall7)
  yellowghost.collide(wall8)
  yellowghost.collide(wall9)
  yellowghost.collide(wall10)
  yellowghost.collide(wall11)
  yellowghost.collide(wall12)
  yellowghost.collide(wall13)
  yellowghost.collide(wall14)
  yellowghost.collide(wall15)
  yellowghost.collide(wall16)
  yellowghost.collide(wall17)
  yellowghost.collide(wall18)
  yellowghost.collide(wall19)
  yellowghost.collide(wall20)
  yellowghost.collide(wall21)
  yellowghost.collide(wall22)
  yellowghost.collide(wall23)




  drawSprites();

}

function reset(){
  gameState = PLAY
  player.x = 455
  player.y = 150
  redghost.x = 700
  redghost.y = 230
  blueghost.x = 300
  blueghost.y = 70
  yellowghost.x = 200
  yellowghost.y = 550
  redghost.visible = true
  blueghost.visible = true
  yellowghost.visible = true
  star.visible = false
  star2.visible = false
  star3.visible = false
}