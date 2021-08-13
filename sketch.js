var piggyBank,piggyBankImg;
var coin,coinImg;

function preload(){
  piggyBankImg=loadImage("pbank.png");
  coinImg=loadImage("200.jpeg")
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

 if(mousePressedOver(coin)){
   coin.velocityY = 3
 }
 
  drawSprites();
  
}
