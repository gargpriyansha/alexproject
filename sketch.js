const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pacman;
var ghost1, ghost2, ghost3, ghost4, ghost5;
var background_img;
var point;

function preload(){
  background_img = loadImage("Ghosts/background.png");
}
function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  engine = Engine.create();
  world = engine.world;


 pacman = new Pacman(670, 500,50, 50);
 ghost1 = new BlueGhost(620, 350, 50, 50);
 ghost2 = new RedGhost(670,350,50, 50);
 ghost3 = new YellowGhost(720,350,50, 50);
 ghost4 = new PinkGhost(770,350,50, 50);

 point1 = new Points(300,300,10);


 
}

function draw(){
  background(background_img);
  
  ghost1.display();
  ghost2.display();
  ghost3.display();
  ghost4.display();

  pacman.display();  

  point1.display();

}

function keyPressed(){
  if(keyCode === 32){
    gameState = "play";
  }
}

if(keyDown(UP_ARROW)){
  pacman.distance +=10;
}
if(keyDown(DOWN_ARROW)){
  pacman.distance +=-10;
}
if(keyDown(LEFT_ARROW)){
  pacman.distance +=-10;
}
if(keyDown(RIGHT_ARROW)){
  pacman.distance +=10;
}
