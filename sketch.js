function preload() {
  //load game assets
 playerImage=loadImage("frog.png")
 pgImage=loadImage("worm.png")
 abImage=loadImage("swampImg.png")
}

score=0

function setup() {
  createCanvas(600,600);
 player=createSprite (100,100,30,30)

 player.addImage(playerImage)
 player.scale=.5
 objectGroup=new Group()
}
 function genO(){
   c=createSprite(random(40,560),random(40,560),20,20)
   c.addImage(pgImage)
   c.scale=random(.1,.3)
   c.shapeColor=("red")
   c.velocityX=random(-4,4)
   c.velocityY=random(-4,4)
  objectGroup.add(c)
 }







function draw() {
  background(abImage );  
player.x=mouseX
player.y=mouseY
if(frameCount%40==0){
  genO()

}
fill("blue")

for (i=0;i<objectGroup.length;i=i+1){
  t=objectGroup.get(i)
  if(player.isTouching(t)){
    t.destroy()
    t=null
    score=score+1
  }
}













  drawSprites()
  textSize(40)
  text("score="+score,300,100)
}
