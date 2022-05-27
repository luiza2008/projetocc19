var pou
var fundo
var imagempou
var imagemfundo
var degrau
var degraugurpo
var blocoinvisivel
var blocoinvisilgrupo

var gameState = "play"

function preload(){

imagempou = loadImage("POU-PNG-main/pou.png");
imagemfundo = loadImage("nuvemjogo2.png");
}

function setup() {
 createCanvas(500,600);

fundo = createSprite(250,300);
fundo.addImage("fund",imagemfundo);
fundo.velocityY = 1;
fundo.scale = 2

pou = createSprite(200,200,50,50);
pou.addImage("po",imagempou);
pou.scale = 0.25

blocoinvisilgrupo = new Group();
degraugurpo = new Group();
}

function draw() {
 background(0);
 drawSprites();

 if (gameState === "play") {
    if(keyDown(LEFT_ARROW)){
      pou.x = pou.x - 3;
    }

if(keyDown(RIGHT_ARROW)){
        pou.x = pou.x + 3;
      }

if(keyDown("space")){
        pou.velocityY = -10;
      }

      pou.velocityY = pou.velocityY + 0.8

      if(fundo.y > 600 ){

       fundo.y = fundo.height / 2
}

if(degraugurpo.isTouching(pou)){
  pou.velocityY = 0;
}

if(blocoinvisilgrupo.isTouching(pou) || pou.y > 600){
  pou.destroy();
  gameState = "end"
}

gerarpiso()

}

if (gameState === "end"){
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("Fim de Jogo", 250,300)
}
}
function gerarpiso(){

    if (frameCount % 240 === 0) {
        var degrau = createSprite(200, -50, 100, 10);
        blocoinvisivel = createSprite(200,-40)
        blocoinvisivel.width = degrau.width;
        blocoinvisivel.height = 2;

        degrau.x = Math.round(random(120,400));
        blocoinvisivel.x = degrau.x;

        degrau.velocityY = 1;
        blocoinvisivel.velocityY = 1;

        pou.depth = degrau.depth;
        pou.depth +=1;

        degrau.lifetime = 800;
        blocoinvisivel.lifetime = 800;

        degraugurpo.add(degrau);
        blocoinvisivel.debug = false;
        blocoinvisilgrupo.add(blocoinvisivel);
    }
}

