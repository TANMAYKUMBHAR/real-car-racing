class Game {
constructor(){}
getState(){
 var gameStateref=database.ref('gameState');   
 gameStateref.on("value",function(data){
   gameState=data.val();  
 })
}
update(state){
database.ref('/').update({
    gameState:state
});
}
async start(){
    if(gameState===0){
        player=new Player();
        var playerCountref=await database.ref('playerCount').once("value")
        if(playerCountref.exists()){
          playerCount=playerCountref.val();
          player.getCount();
        }
        
        form = new Form();
        form.display();
       }
       car1=createSprite(100,200);
       car1.addImage(car1Img);
       car2=createSprite(300,200);
       car2.addImage(car2Img);
       car3=createSprite(500,200);
       car3.addImage(car3Img);
       car4=createSprite(700,200);
       car4.addImage(car4Img);
       cars=[car1,car2,car3,car4]
}
play(){
  form.hide();
  Player.getplayerinfo();
  if(allplayers!==undefined){
    background(ground);
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
    var index = 0;
    var x = 100;
    var y;
    for(var plr in allplayers){
      index=index+1;
      x=x+180;
      y=displayHeight-allplayers[plr].distance;
      cars[index-1].x=x;
      cars[index-1].y=y;
      if(index===player.index){
      cars[index-1].shapeColor="red"
      camera.position.x=displayWidth/2;
      camera.position.y=cars[index-1].y;
      }
  }
}

if(keyIsDown(UP_ARROW)&&player.index!==null){
  player.distance+=50;
  player.update();
}
if(player.distance>3000){
  gameState=2;
}
drawSprites();
}
end(){
console.log("gameended");
}
}