img = "";

function preload() {
  img = loadImage('kisame.jpg')
} 

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image( img, 0, 0, 640, 420 );
}

function draw() {
    image( img, 0, 0, 640, 420 );
    fill("#FF0000")
    text("kisame", 155, 75);
    noFill();
    stroke("#FF0000");
    rect(150, 60, 250, 250);
}