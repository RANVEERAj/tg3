const Engine=Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;
var score = 0;

var backgroundImg;

function preload(){
imagew=loadImage("polygon.png")
getBackgroundImg();
bg = loadImage("bg1.jpg");
blackBg = loadImage("bg3.jpg");
}
function setup(){
    engine = Engine.create();
	world = engine.world;
    createCanvas(1100,750)
   

    ground3=new ground(525,720,1100,10)

   play1=new Player(100,470,70,70)
  Sling=new SlingShot(play1.body,{x:170,y:470})

  ground1 = new ground(390,300,250,10);
  ground2 = new ground(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second ground
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);

console.log(play1)

}
function draw(){
  Engine.update(engine);
  imageMode (CENTER)
    rectMode(CENTER);
    if (backgroundImg)
      background(backgroundImg);
    
    fill("white");
    text("SCORE :" + score, 650, 40);

    ground1.display();
    ground2.display();
    ground3.display();
    play1.display();
    Sling.display();

    strokeWeight(2);
    stroke(15);
    fill("brown");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
    fill("grey");
    block16.display();
    fill("skyblue");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    fill("turquoise");
    blocks6.display();
    blocks7.display();
    blocks8.display();
    blocks9.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    
    block13.score();
    block14.score();
    block15.score();
   
    block16.score();
    
    blocks1.score();
    blocks2.score();
    blocks3.score();
    blocks4.score();
    blocks5.score();
   
    blocks6.score();
    blocks7.score();
    blocks8.score();
    
    blocks9.score();
    }
    
  

function mouseDragged()
{
  Matter.Body.setPosition(play1.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
   Sling.fly();
   console.log("isReleased")
}
function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(play1.body,{x:100,y:470})
  Sling.attach(play1.body)
  console.log("keyPressed")
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "bg1.jpg";
  }
  else{
      bg = "bg4.jpg";
      
  }
  

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}