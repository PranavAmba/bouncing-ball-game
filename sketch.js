var ball,img,paddle,ballImage;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballImage=loadImage("ball.png");
  img=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(100,200,10,10);
  ball.addImage(ballImage)
  ball.velocityX=5;
  
  paddle=createSprite(350,200,10,100)
  paddle.addImage(img);
  
  ball.velocityX=9;
  ball.velocityY=9;

}

function draw() {
  background(255);
  
  edges=createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(paddle);
  
  paddle.collide(edges);
   
  
  if(keyDown(UP_ARROW))
  {
   paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  drawSprites();
  
}

function randomVelocity()
{
if (ball.bounceOff(paddle)){
 ball.velocityX=5;
 ball.velocityY=-5;
    }
}

