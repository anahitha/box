
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
var box = [];
 
var ground;
var roof;
var gSlider;
var i;
var j=0;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
  
    roof = new Ground(350, 380, 800, 20);

}

function mousePressed() {
    if (mouseY < 350) {
        j++;
        // Every time a mouse press occures create a new box.
        newBox();
    }
}

function draw() {
    Engine.update(engine); 
    background("white");
    var fVal = gSlider.value();
    box  = boxes;
    console.log(boxes.length);
    roof.display();
    if(boxes.length>1){
    boxes[1].display();
    }
    if(boxes.length>2){
    boxes[2].display();}
    if(boxes.length>3){
    boxes[3].display();}
    if(boxes.length>4){
    boxes[4].display();}

    if(boxes.length>5){
    boxes[5].display();}

    if(boxes.length>8){
    boxes[8].display();}

    if(boxes.length>9){
    boxes[9].display();}
    if(boxes.length>10){
    boxes[10].display();}
    if(boxes.length>11){
    boxes[11].display();}
    if(boxes.length>12){
    boxes[12].display();}
    if(boxes.length>13){
        boxes[14].display();}
        if(boxes.length>14){
            boxes[15].display();}
            if(boxes.length>15){
                boxes[16].display();}
                if(boxes.length>16){
                    boxes[12].display();}

}

function newBox(){
        boxes[j] = new ColorBox(mouseX, mouseY, 20, 20, "pink"); 
}
 

