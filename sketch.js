var bg;
var snowImg;
var snow,snowGroup;


function preload(){
  bg = loadImage("snow3.jpg");
  snowImg = loadImage("snow5.webp")


}






function setup() {
 
  createCanvas(displayWidth,displayHeight);

  snowGroup= new Group()
 
 

}



function draw() {
  background(bg);  
 
  if(keyIsDown(RIGHT_ARROW)){
    console.log("falling")
    createsnow();
  }


  drawSprites();
}
function createsnow(){

  for(i = 0;i <10;i++){
    var snow = createSprite(random(100,displayWidth),random(-10,40))
   snow.addImage(snowImg)
   snow.scale = 0.05
   snow.velocityY = random(2,6)
   snow.lifetime = displayWidth/snow.velocityY;
   snowGroup.add(snow)
 
 
   }
}