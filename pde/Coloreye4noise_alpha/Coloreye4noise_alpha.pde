    float r;
    float g;
    float b;
    float a;
    float diam;
    float x;
    float y;
    float a2;
    float b2;
    float c;
    float d;
    float e;
    float f;
    float j;
    float i;
    float maus = mouseX;
    float maus2 = mouseY;
    float p;
    
float xnoise = 0;
float ynoise = 100;
    
    void setup() {
     size(900,900);
     smooth();
     background(0);
     frameRate(30);
}
    void draw() {
      triangles ();
      antitriangles();
      bubbles ();
      antibubbles();
      pupil();
      pupil2();
      
      
     // Fill all variables with random values
     r = random(255);
     g = random(255);
     b = random(255);
     a = random(255);
     j = random(600);
     i = random(900);
     diam = random(10,450);
     x = noise(xnoise, ynoise)*(random(width*1.2,width));
     y = noise(ynoise, xnoise)*(random(height*1.2,height));
     a2 = random(10,width + 50);
     b2 = random(10,height + 50);
     c = random(10,width + 50);
     c = random(10,height + 50);
     e = random(10,width + 50);
     f = random(10,height + 50);
     p = random(60,90);
}     
     // Use values to draw an ellipse
void bubbles() {
     stroke(0,a);
     fill(r,g,b,a);
     ellipse(x,y,diam,diam);
    
     
      xnoise=xnoise+.009;
      ynoise=ynoise+.009;
    
}    

void pupil() {
  fill(0);
  ellipse(x,y,p,p);
}

void pupil2() {
  fill(r);
  ellipse(y,x,p,p);
  
}

void antibubbles() {
     stroke(r,g,b,a);
     fill(0,100);
     ellipse(y,x,diam,diam);
    
     
      xnoise=xnoise+.0009;
      ynoise=ynoise+.0009;
    
}    

void triangles() {     
     stroke(0);
     strokeWeight(5);
     fill(x,x,b,25);
     triangle(0,0,x-300,y-300,900,900);
}


void antitriangles() {     
     stroke(r,g,b,a);
     strokeWeight(5);
     fill(r,25);
     triangle(900,900,y+300,x+300,0,0);
}


