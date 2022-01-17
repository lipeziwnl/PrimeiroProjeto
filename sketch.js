var quadrado;
function setup() {
  createCanvas(400,400);
  quadrado=createSprite(100,100,15,15);

}

function draw() 
{
  background(30);
  drawSprites();
  if( keyDown(LEFT_ARROW))
{
  quadrado.position.x=quadrado.position.x-5
}
if( keyDown(RIGHT_ARROW))
{
  quadrado.position.x=quadrado.position.x+5
}
if( keyDown(UP_ARROW))
{
  quadrado.position.y=quadrado.position.y-5
}
if( keyDown(DOWN_ARROW))
{
  quadrado.position.y=quadrado.position.y+5
}

}




