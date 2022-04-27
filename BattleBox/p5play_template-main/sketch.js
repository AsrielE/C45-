var box
var wall
var wall2
var wall3
var wall4
var bullet
var trophy
var enemy

function preload(){
bulletImg = loadImage("pixil-frame-0 (3).png")
trophyImg = loadImage("pixil-frame-0 (7).png")
enemyImg = loadImage("pixil-frame-0 (1).png")
}

function setup() {
  createCanvas(750,650);
  box = createSprite(375,325,40,40)
  wall = createSprite(375,515,375,10)
  wall2 = createSprite(375,135,375,10)
  wall3 = createSprite(560,325,10,375)
  wall4 = createSprite(195,325,10,375)
  bullet = createSprite(1,325,40,40)
  trophy = createSprite(1,325,40,40)
  
  wall.shapeColor = "white"
  wall2.shapeColor = "white"
  wall3.shapeColor = "white"
  wall4.shapeColor = "white"
  box.shapeColor = "yellow"
}

function draw() 
{
  background(30);

if(keyDown("w")){
  box.y = box.y - 3
}
if(keyDown("a")){
  box.x = box.x - 3
}
if(keyDown("d")){
  box.x = box.x + 3
}
if(keyDown("s")){
  box.y = box.y + 3
}
drawSprites()
box.collide(wall3)
box.collide(wall4)
box.bounceOff(wall)
box.bounceOff(wall2)
spawnEnemy()
}
function spawnEnemy(){
  if(frameCount%100===0){
  enemy = createSprite(random(195,560),random(135,515),40,40)
  enemy.addImage(enemyImg)
  enemy.scale = 4
  enemy.lifetime = 300

  }
}



