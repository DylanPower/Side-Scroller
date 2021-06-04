let hero;
let force;
let gravity;
let mySound;
let sNum = 0;
let enemys = [];

function setup() {
  createCanvas(400, 400);

  //soundFormats('mp3');
  //mySound = loadSound("assets/energy.mp3");
  let img = loadImage("cat.jpg");
  let img2 = loadImage("bolt.jpg");

  hero = new Mover(img);
  force = createVector(-0.01, 0);
  gravity = createVector(0, 0.01);

  for (let i = 0; i < 300; i++) {
    enemys.push(new Baddies(img2));
  }
}

function keyPressed() {
  if (key == " ") {
    let jump = createVector(0, -1);
    hero.applyForce(jump);
  }
}

function mousePressed() {
  sNum++;
}

function draw() {
  if (sNum === 0) {
    open();
  }
  if (sNum === 1) {
    rules();
  } else if (sNum === 2) {
    game();
  } else if (sNum === 3) {
    close();
  }
}

function open() {
  background(200, 500, 100);
  textSize(35);
  text("Welcome to the Game!", 20, 200);
  textSize(25);
  text("Click Anywhere to Start!", 55, 250);
  //mySound.play();
}

function rules() {
  background(0, 0, 0);
  textSize(35);
  text("Rules:", 20, 100);
  textSize(15);
  text("Grab as many Bolts as you can!", 20, 150);
  fill("white")
}

function close() {
  background(500, 100, 100);
  textSize(35);
  text("Thanks for playing!", 50, 200);
  fill("black");
}

function game() {
  background(0, 0, 0);

  hero.applyForce(gravity);
  translate(-hero.pos.x + 1 + 1, 0);
  // if (mouseIsPressed) {
  //    hero.applyForce(force);
  //  }
  hero.update();
  hero.show();
  hero.edges();

  //activates enemys on screen
  for (let i = 0; i < enemys.length; i++) {
    enemys[i].show();
    enemys[i].update();
    hero.hit(enemys[i]);
  }
}
