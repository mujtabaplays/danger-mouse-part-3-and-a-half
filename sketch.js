var gameState="play"
var count=0;
  
function preload() {
bg1=loadImage("DangerMouseImages/background.jpg")  
bg2=loadImage("DangerMouseImages/background2.jpg") 
dangerguy1img=loadImage("DangerMouseImages/Dangerfrog1.gif")
dangerguy2img=loadImage("DangerMouseImages/dangerguy2.png")

dangermouse1img=loadImage("DangerMouseImages/dangermouse1.png")
dangermouse2img=loadImage("DangerMouseImages/dangermouse2.png")
dangermouse3img=loadImage("DangerMouseImages/dangermouse3.png")
}


function setup() {
  createCanvas(1400,700);
  
  bgsprite=createSprite(700,350)
  bgsprite.addImage(bg1)
  bgsprite.scale=2.7
 // bgsprite.velocityX=5
 
 bgsprite2=createSprite(700,350)
 bgsprite2.addImage(bg2)
 bgsprite2.scale=2.7
 bgsprite2.visible=false


  dangerguy1 = createSprite(Math.round(random(25, 700)),Math.round(random(0, 400)),10,10);

  dangerguy1.addImage(dangerguy1img)
 dangerguy1.velocityX=-5
 dangerguy1.velocityY=7
 dangerguy1.scale=0.8

 dangerguy2 = createSprite(Math.round(random(25, 800)),Math.round(random(25, 700)),10,10);

  dangerguy2.addImage(dangerguy1img)
 dangerguy2.velocityX=-8
 dangerguy2.velocityY=-7
 dangerguy2.scale=0.5

 dangerguy4 = createSprite(Math.round(random(25, 700)),Math.round(random(0, 300)),10,10);

 dangerguy4.addImage(dangerguy1img)
dangerguy4.velocityX=5
dangerguy4.velocityY=4
dangerguy4.scale=0.3

 

  dangermouse=createSprite(420, 550, 50, 50)
  dangermouse.addImage(dangermouse1img)
  dangermouse.scale = 0.2
 //dangermouse.debug=true
 dangermouse.setCollider("rectangle",0,0,350,850)

  wall1=createSprite(10, 350, 10, 1050)
  wall1.visible = false 
  
  wall2=createSprite(1390, 350, 10, 1050) 
  wall2.visible = false
  
  wall3=createSprite(700, 10, 1400, 10) 
  wall3.visible = false
  
  wall4=createSprite(720, 690, 1400, 10) 
  wall4.visible = false

  ground=createSprite(720, 700, 1400, 10)
  ground.visible = false
  
}

function draw() {
  if(gameState==="play"){
  background(0); 
  
  dangerguy1.bounceOff(wall1);
  dangerguy1.bounceOff(wall2);
  dangerguy1.bounceOff(wall3);
  dangerguy1.bounceOff(wall4);

  dangerguy2.bounceOff(wall1);
  dangerguy2.bounceOff(wall2);
  dangerguy2.bounceOff(wall3);
  dangerguy2.bounceOff(wall4);

  dangerguy4.bounceOff(wall1);
  dangerguy4.bounceOff(wall2);
  dangerguy4.bounceOff(wall3);
  dangerguy4.bounceOff(wall4);

  
  if(keyDown(RIGHT_ARROW)){
    dangermouse.x=dangermouse.x+6 
    
    dangermouse.addImage(dangermouse2img)
    dangermouse.visible = true
    }
  
    if(keyDown(LEFT_ARROW)){
    dangermouse.x=dangermouse.x-5
    
    dangermouse.addImage(dangermouse1img)
    
    }
  
    if(keyDown("SPACE") && dangermouse.y>380){
    dangermouse.velocityY = -3
    
    }
    dangermouse.velocityY=dangermouse.velocityY+0.3

if(dangermouse.isTouching(dangerguy1)){
   dangerguy1.destroy()
   count=count+1;
}

if(dangermouse.isTouching(dangerguy2)){
  dangerguy2.destroy()
  count=count+1;
} 


if(dangermouse.isTouching(dangerguy4)){
  dangerguy4.destroy()
  count=count+1;
}


if(count===3){
bgsprite.visible=false
gameState="wait"
}
}

if(gameState==="wait"){
  background(0)
textSize(50) 
fill("purple")
text("GG you have reached level 2 good luck",200,200);
text("press 'w' to go to next level", 250,250)

if(keyDown(RIGHT_ARROW)){
  dangermouse.x=dangermouse.x+6 
  
  dangermouse.addImage(dangermouse2img)
  dangermouse.visible = true
  }

  if(keyDown(LEFT_ARROW)){
  dangermouse.x=dangermouse.x-5
  
  dangermouse.addImage(dangermouse1img)
  
  }

  if(keyDown("SPACE") && dangermouse.y>380){
  dangermouse.velocityY = -3
  
  }
  dangermouse.velocityY=dangermouse.velocityY+0.3

  if(keyDown('w')){
    bgsprite2.visible=true
    var dangerguy3=createSprite(1000, 270, 50, 50);
    dangerguy3.addImage(dangerguy2img)
    dangerguy3.velocityX=-5
    dangerguy3.velocityY=7



  dangerguy3.bounceOff(wall1);
  dangerguy3.bounceOff(wall2);
  dangerguy3.bounceOff(wall3);
  dangerguy3.bounceOff(wall4);
  
  }

  
}

dangermouse.collide(ground)

drawSprites();


}