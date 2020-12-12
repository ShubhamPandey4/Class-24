const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var log2;
var box3;
var box4;
var pig2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    box1 = new Box(800,370,70,70);
    box2 = new Box(1000,370,70,70);
    pig1 = new Pig(900,330); 
    log1 = new Log(900,300,300,PI/2);

    box3 = new Box(800,260,70,70);
    box4 = new Box(1000,260,70,70);
    pig2 = new Pig(900,220); 
    log2 = new Log(900,180,300,PI/2);

    box5 = new Box(900,150,70,70);
    log3 = new Log(850,100,150,PI/6);
    log4 = new Log(950,100,150,-PI/6);
    
    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
   /* console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/

    ground.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    log3.display();
    log4.display();
    box5.display();   
    bird.display();
}