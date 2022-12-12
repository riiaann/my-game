 var backgroundImg,backGround
 var spaceShip,spaceShipImg
 var starsGroup,starImg,star
 

function preload(){
backgroundImg = loadImage("bg_space_seamless_1.png")
spaceShipImg = loadImage("spaceship.png")
starImg = loadImage("star.png")

}
function setup(){
  createCanvas(1650,820)

 backGround = createSprite(900,450)
 backGround.addImage(backgroundImg)
 backGround.velocityX = -3
 backGround.scale = 2  
 backGround.x = backGround.width*1.5
 

  spaceShip = createSprite(150,400,20,50);
  spaceShip.addImage(spaceShipImg)
  spaceShip.scale = 0.75

  starsGroup = createGroup()
  




}

function draw() {
 background(0)

 if(backGround.x<0) {
  backGround.x = backGround.width/2
 }

 



if (keyDown("UP_ARROW")&& spaceShip.y >= 100) {
  spaceShip.velocityY = -5;
}

if (keyDown("DOWN_ARROW")&& spaceShip.y >= -100 ) {
  spaceShip.velocityY = 5;
}

spawnStars()



drawSprites()
}

function spawnStars() {
  if (frameCount % 55 === 0) {
    star = createSprite(1450,100,40,10)
    star.y = Math.round(random(10,800))
    star.addImage(starImg)
    star.scale = 0.15
    star.velocityX = -3


    star.lifetime = 400

    star.depth = spaceShip.depth

    starsGroup.add(star)
  }
}
