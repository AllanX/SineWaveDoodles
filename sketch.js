var x1 = 0.0;
var y1 = 0.0;
var m = 0.0;

function setup() {
	createCanvas(1000, 1000);
}

function draw() {
  
	background(70);

	noStroke();
	textSize(21);
	fill(100, 200, 100);
	text("Sine Wave Doodles", 10, 20);

	strokeWeight(1);
	stroke(0, 255, 0);
	line (0,500,1000,500);

	var a = 0.0;
	var inc = TWO_PI / 100.0;
	for (var i = 0; i < 250; i++) {
	  line(i * 4, 100, i*4, 100 + sin(a) * 40.0);
	  a = a + inc;
	}

  //translate(width/2, height/2);
  
	var x = 0.0;
	var y = 0.0;
  
  	for (t = 0; t <= 1000; t++) {

		x = getX(t, m);
		y = getY(t, m);

		if (t == 0) {
			x1 = x;
			y1 = y;
		}
		line(x1, y1, x, y);
		//    line(x, y - 10, x, y + 10);
		x1 = x;
		y1 = y;
	}
	m += 0.5;
	if (m > 10)
		m = 0.0;
}

function getX(t, m) {
  return t;
}

function getY(t, m) {
  //* Sin: sin(frequency) * amplitude
    
  return sin(-t / (m * 20.0)) * 200
     + sin(t / (m * 5.0)) * 100
     - sin(t / 10.0) * 50
     + (height / 2);
}

