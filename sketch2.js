var targetImage, backImage;
var star_array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noCursor();
  //noStroke();
  targetImage = loadImage("bday-bw.png");
  backImage = loadImage("nightsky.png");
}

function draw() {
  image(backImage, 0, 0, width, height);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
  var curr_position = createVector(mouseX, mouseY);
  if (mouseIsPressed) {

    var target_position = find_in_targetImage();
    var star = new Star(curr_position, target_position);
    star_array.push(star);
    if (star_array.length > 2000) {
      star_array.shift();
    }
  }

  for (var i = 0; i < star_array.length; i++) {

    star_array[i].draw();
    star_array[i].update();
  }

}

function find_in_targetImage() {
  var x;
  var y;
  for (var i = 0; i < 30; i++) {
    x = floor(random(0, targetImage.width));
    y = floor(random(0, targetImage.height));
    if (red(targetImage.get(x, y)) < 255) //then it is black because targetImage is b(lack)-w(hite)
    {
      break;
    }
  }
  return createVector(x, y);
}

function Star(curr_position, target_position) {
  this.curr_position = curr_position;
  this.target_position = target_position;
  this.size = random(2, 10);
}
Star.prototype.update = function() {
  this.curr_position = p5.Vector.lerp(this.curr_position, this.target_position, 0.5);
};
Star.prototype.draw = function() {
  noStroke();
  var alpha = noise(
    this.target_position.x,
    this.target_position.y,
    millis() / 1000.0
  );
  fill(255, 255, 255, 255 * alpha);
  ellipse(this.curr_position.x, this.curr_position.y, this.size, this.size);
};
// function setup(){
//   createCanvas(windowWidth, windowHeight);
//   background(0);
// }
// var arr = [];
// function draw(){
//
//   if(mouseIsPressed){
//   var coordinate = createVector(mouseX,mouseY);
//   var point  = new Point(coordinate);
//   arr.push(point);
//   if (arr.length>1000){
//     arr.shift();
//   }
//   for(var i =0; i<arr.length; i++){
//     arr[i].draw();
//   }
// }
// }
// function Point(coordinate){
//   this.coordinate = coordinate;
// }
// Point.prototype.draw = function(){
//   noStroke();
//   fill(255,0.7);
//
//   ellipse(this.coordinate.x, this.coordinate.y, 10,10);
// };
