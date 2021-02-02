var song;
var redRect,blueRect,greenRect,yellowRect,ball
var edges
function preload(){
    song = loadSound("music.mp3");
}


function setup(){
    createCanvas(500,500);
    //create 4 different surfaces
    redRect =createSprite(60,490,125,30)
    redRect.shapeColor="red"

    blueRect =createSprite(186,490,125,30)
    blueRect.shapeColor="blue"

    greenRect =createSprite(311,490,125,30)
    greenRect.shapeColor="green"

    yellowRect =createSprite(437,490,125,30)
    yellowRect.shapeColor="yellow"

    

    //create box sprite and give velocity
    ball=createSprite(random(20,450),20,30,30)
    ball.velocityX=random(4,10)
    ball.velocityY=random(4,10)
    
}

function draw() {
    background("black");
    edges=createEdgeSprites();
   
    
    if(ball.isTouching(edges)){
        console.log("working")
        song.play();  
    }
    if(collision(ball,redRect)){
        ball.shapeColor="red"
    }
    if(collision(ball,blueRect)){
        ball.shapeColor="blue"
        ball.velocityX=0
        ball.velocityY=0
        song.stop();
    }
    if(collision(ball,greenRect)){
        ball.shapeColor="green"
    }
    if(collision(ball,yellowRect)){
        ball.shapeColor="yellow"
    }
    ball.bounceOff(edges);
   drawSprites();
   }
