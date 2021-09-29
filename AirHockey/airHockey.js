var game_state="serve";
var computer_score= 0;
var player_Score =0;
var goal1;
var goal2;
var striker;
var playerPaddle;
var computerPaddle;
var line1,line2,line3,line4,line5,line6


function setup(){

goal1 =createSprite(windowWidth/2,28,100,20);
goal1.shapeColor ="yellow";

goal2= createSprite(200,372,100,20);
goal2.shapeColor="yellow";

striker =createSprite(200,200,10,10);
striker.shapeColor="white";

playerPaddle= createSprite(200,50,50,10);
playerPaddle.shapeColor ="black";

computerPaddle= createSprite(200,350,50,10);
computerPaddle.shapeColor="black";


line1 = createSprite(385,0,5,800);
line1.shapeColor="white";
line2= createSprite(15,0,5,800);
line2.shapeColor="white";
line3= createSprite(0,15,800,5);
line3.shapeColor="white";
line4= createSprite(0,390,800,5);
line4.shapeColor="white";
line5 =createSprite(0,150,800,5);
line5.shapeColor="white";
line6 = createSprite(0,250,800,5);
line6.shapeColor="white";

}
function draw(){
  background("green"); 
  lines();
  



  
  if(game_state=="serve"){
    strokeWeight(0);
    stroke("red");
    fill("red");
    textSize(20);
    text("Press Space to start",120,180);
  }
  
  strokeWeight(1);
  stroke("white");
  fill("white");
  text(computer_score,20,215);
  text(player_Score,20,185);
  

  striker.bounceOff(playerPaddle);
  striker.bounceOff(computerPaddle);
  striker.bounceOff(line1);
  striker.bounceOff(line2);
  striker.bounceOff(line3);
  striker.bounceOff(line4);

  computerPaddle.x=striker.x;
  
  if(keyDown("left")){
    playerPaddle.x-=5;
  }
  if(keyDown("right")){
    playerPaddle.x+=5;
  }
  
  
    if(keyDown("space")&& game_state=="serve"){
    serve();
    game_state="play";
  }
  

  if(striker.isTouching(goal1)||striker.isTouching(goal2)){
    if(striker.isTouching(goal1)){
      computer_score+=1;
    }
    if(striker.isTouching(goal2)){
      player_Score+=1;
    }
    reset();
    game_state="serve";
  }
  
  if (player_Score === 5 || computer_score === 5){
    game_state = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  if (keyDown("r") && game_state === "over") {
    game_state = "serve";
    computer_score = 0;
    player_Score = 0;
  }
  
  
  
  
  drawSprites();
}

function lines(){
  stroke("black");
  strokeWeight(1);
  for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
}

function serve() {
  striker.velocityX = 3;
  striker.velocityY = 4;
}

function reset() {
  striker.x = 200;
  striker.y = 200;
  striker.velocityX = 0;
  striker.velocityY = 0;
}