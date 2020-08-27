var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var player_img;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;

var p1score = 0
var p2score = 0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
     textSize(20);
    fill("white");
    text("Player 1 Score: " + p1score, 10, 30);
    text("Player 2 Score: " + p2score, 10, 60);
   }
   if (gameState === 2) {
    
     game.end();
   }

   if(fruitGroup.isTouching(player1)){
    fruitGroup.destroyEach();
    p1score ++;
    

  }
  if(fruitGroup.isTouching(player2)){
    fruitGroup.destroyEach();
    p2score ++;

  }
}