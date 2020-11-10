var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var partical;
var particles = [];
var plinkos = [];
var divisions = [];
var gamestate="start";
var divisionHeight=300;
var score =0;
var turn=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


   function draw() {
     
      background("black");
      rectMode(CENTER);

      textSize(20)
      text("Score : "+score,20,30);
      Engine.update(engine);
    
      textSize(35)
      text(" 500 ", 5, 550);
      text(" 500 ", 80, 550);
      text(" 500 ", 160, 550);
      text(" 500 ", 240, 550);
      text(" 100 ", 320, 550);
      text(" 100 ", 400, 550);
      text(" 100 ", 480, 550);
      text(" 200 ", 560, 550);
      text(" 200 ", 640, 550);
      text(" 200 ", 720, 550);
     
      if(gamestate=="end"){
        fill("orange"); 
        stroke("black");
        textSize(100);
        text("gameover",200,350);
      }

      if(partical!=null){
      partical.display();
      if(partical.body.position.y>760){
      if (partical.body.position.x < 300){
      score=score+500;
      partical=null;
      if(turn>=5) gamestate="end";
      }
      else if (partical.body.position.x < 600 && partical.body.position.x > 301 ) {
      partical.display();
      score=score+100; 
      partical=null;
      if(turn>=5) gamestate="end"; 
      }
      else if(partical.body.position.x<900 && partical.body.position.x>601){
         partical.display();
      score=score+200; 
      partical=null;
      if(turn>=5) gamestate="end";  
      }
      }
      }


     



      


     
      for (var k = 0; k < divisions.length; k++) {
      divisions[k].display();
      }
      for (var i = 0; i < plinkos.length; i++) {
      plinkos[i].display();
      }
   }









   function mousePressed(){
    if(gamestate!=="end"){
      turn++
      partical=new Particle (mouseX, 10, 10, 10); 
    }
    }


