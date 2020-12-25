function setup() {
  createCanvas(1200,800);
 box1= createSprite(50, 300, 50, 50);
 box1.shapeColor="blue"
  box2=createSprite(1150,300,50,50);
  box2.shapeColor="green"
  box1.debug=true
  box2.debug=true
  box1.velocityX=3
  box2.velocityX=-3
  edges=createEdgeSprites();
  box3= createSprite(600, 50, 50, 50);
 box3.shapeColor="pink"
  box4=createSprite(600,750,50,50);
  box4.shapeColor="purple"
  box3.debug=true
  box4.debug=true
  box3.velocityY=3
  box4.velocityY=-3

}

function draw() {
  background(255,255,0);  
  
  if(box1.x-box2.x<box1.width/2+box2.width/2
    && box2.x-box1.x<box2.width/2+box1.width/2)

    {
   box1.velocityX=-3
   box2.velocityX=3
    }
    if( box3.y-box4.y<box3.height/2+box4.height/2
    && box4.y-box3.y<box4.height/2+box3.height/2){
      box3.velocityY=-3
      box4.velocityY=3 
    }

box1.bounceOff(edges)
box2.bounceOff(edges)
box3.bounceOff(edges)
box4.bounceOff(edges)
  drawSprites();
}