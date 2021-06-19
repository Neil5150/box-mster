var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(100,550,75,25);
surface1.shapeColor = "green";
surface2 = createSprite(300,550,75,25);
surface2.shapeColor = "red";
surface3 = createSprite(500,550,75,25);
surface3.shapeColor = "blue";
surface4 = createSprite(700,550,75,25);
surface4.shapeColor = "yellow";
    //create box sprite and give velocity
box = createSprite(random(20,750));
box.shapeColor="white";
box.velocityY=4
}

function draw() {
    background(0,0,0);
 if(surface1.isTouching(box) && box.bounceOff(surface1)){
     box.shapeColor="purple";
 }
 if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor="orange";
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="grey";
}
if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor="pink";
}

edges=createEdgeSprites();

box.bounceOff(edges)
    //add condition to check if box touching surface and make it box
    drawSprites();
}
