
let bottomImg, topImg;

function preload() {
  bottomImg = loadImage('assets/images/royalcats.jpeg');
  topImg = loadImage('assets/images/dog.jpeg');
}
function setup() {
  createCanvas(720, 400);

  image(topImg, 0, 0);
}

function mouseDragged() {
  copy(bottomImg, mouseX, mouseY, 20, 20, mouseX, mouseY, 20, 20);
}
