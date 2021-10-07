var path
var power
var Runner
function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  powerImg = loadImage("power.png")
  RunnerImg = loadImage("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,400,400)
  path.velocityY = -5
  power = createSprite(200,100,400,100)
  power.scale = 0.2
  Runner = createSprite(300,300,50,50)
  Runner.scale = 0.1
  path.addImage(pathImg)
  power.addImage(powerImg)
  Runner.addImage(RunnerImg)
  
}

function draw() {
  background(0)
  console.log(path.y)
  if (path.y < 0){
    path.y = 400
  }
  Runner.addAnimation("RunnerAnim",RunnerImg)
  Runner.x = Mouse.x
  createEdgeSprites(edges)
  edges.visible = false
  Runner.bounce(leftEdge)
  Runner.bounce(rightEdge)
  drawSprites();
}
