var ball,ballI,paddle,paddleI;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballI = loadImage("ball.png");
  paddleI = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /*create the Ball Sprite and the Paddle Sprite */
      ball = createSprite(30,200,10,10);
      paddle = createSprite(350,200,10,100);
  /* assign the images to the sprites */
       ball.addImage(ballI);
       paddle.addImage(paddleI);
  /* give the ball an initial velocity of 9 in the X direction */
        ball.velocityX = 9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
     edges = createEdgeSprites();
     ball.bounceOff(edges);
     paddle.bounceOff(edges);
     randomVelocity();
  
     
  
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
        paddle.velocityY = -4;
        
        
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the DOWN Arrow Key */
        paddle.velocityY = 4;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
   
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  if (ball.bounceOff(paddle)) {
          ball.velocityY = 3;
      }
}

