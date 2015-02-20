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
    
float xnoise = 0;
float ynoise = 100;
    
    void setup() {
     size(900,600);
     background(0);
     smooth();
     frameRate(30);
}
    void draw() {
      triangles ();
      bubbles ();
      
     // Fill all variables with random values
     r = random(255);
     g = random(255);
     b = random(255);
     a = random(255);
     j = random(600);
     i = random(900);
     diam = random(10,450);
     x = noise(xnoise, ynoise)*width;
     y = noise(ynoise, xnoise)*height;
     a2 = random(10,width + 50);
     b2 = random(10,height + 50);
     c = random(10,width + 50);
     c = random(10,height + 50);
     e = random(10,width + 50);
     f = random(10,height + 50);
}     
     // Use values to draw an ellipse
void bubbles() {
     stroke(0,a);
     fill(r,g,b,a);
     ellipse(x,y,diam,diam);
    
     
      xnoise=xnoise+.008;
      ynoise=ynoise+.008;
    
}    
    
void triangles() {     
     stroke(r,g,b,a);
     strokeWeight(5);
     fill(34);
     triangle(0,0,x,y,900,x);
}



