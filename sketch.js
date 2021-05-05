

var amp;

var x = -150;
var y = 500;
var x2 = 700
var y2 = 0
var y3=500




function preload() {

  soundfile = loadSound('Intro.mp3');
}

function setup() {
  createCanvas(700, 500);

  button = createButton('play')
  button.position(0,500)
  button.mousePressed(visualize)
  soundfile.loop();
  
  
  amp = new p5.Amplitude();
  amp.setInput(soundfile);

  background(0);
  noLoop()
}

function draw() {

  background(0, 0);
  let level = amp.getLevel();
  console.log(soundfile.currentTime())
  // console.log(level)
// noStroke()


  x += 2;

  if (x > 700) {
    x = 0
  }
  if (y2>500){
    y2=0
  }
  if (y3<0){
    y3=500
  }
  if (x2<0){
    x2=700
  }
  if (soundfile.currentTime() > 1 && soundfile.currentTime() < 23.3) {

    fill(level * 1000);
    rect(x, y, 5, level/2 * -width);
  } else
  if (soundfile.currentTime() > 23.3) {
    fill(soundfile.currentTime()*4,0,50)
    //fill(level*1000,0,0)
    //fill(0, soundfile.currentTime() * 2, soundfile.currentTime() * 4);
    rect(x, y, 5, level / 2 * -width);
  }

  if (soundfile.currentTime() > 81) {
    //fill(level*1000,0,0)
    fill(amp,0,50)
    //fill(0, soundfile.currentTime() * 2, soundfile.currentTime() * 4);
    ellipse(250, 250, level * 300)
    ellipse(450, 250, level * 300)
  }
  
  if (soundfile.currentTime() > 43){
    y2 += 2;
    y3-=2;
    x2-=2;
    //red
    fill(soundfile.currentTime()*4,0,50)
    //red level
     //fill(level*1000,0,0)
    //blue
    //fill(0, soundfile.currentTime() * 2, soundfile.currentTime() * 4);
    rect(0,y2,level/2*width,5)
    rect(700,y3,level/2*-width,5)
    rect(x2,0,5,level/2*width)
  }


}

function visualize(){
  loop()
}