var piggyBank,piggyBankImg;
var coin,coinImg,coin2Img;
const PLAY = 1;
const END =0;
var gameState=PLAY;

function preload(){
  piggyBankImg=loadImage("pbank.png");
  coinImg=loadImage("coin.png");
  coin2Img = loadImage("coin2.png");
}
function setup() {
  createCanvas(400, 400);

  coin = createSprite(200,100);
  coin.addImage(coinImg);
  coin.scale=0.5;
  
  piggyBank = createSprite(200,300,50,20);
  piggyBank.addImage(piggyBankImg)
  piggyBank.scale =0.5;

}


function draw() {
  background("lightblue");

  if(gameState === PLAY){
    if(mousePressedOver(coin)){
      coin.addImage(coin2Img);
      coin.scale=0.03;
      coin.velocityY = 5;
      gameState = END;
    }
  }

  else if(gameState === END ){
    textSize(20);
    fill("red");
    text("$$ You added one dollar $$",100,50);
  }
 
  drawSprites();
  
}
