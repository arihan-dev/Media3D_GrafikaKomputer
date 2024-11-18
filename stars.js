let angle = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(200);
  rotateY(angle * 0.5);
  rotateX(angle * 0.3);
  
  // Menggambar bintang 3D dengan warna
  beginShape();
  for (let i = 0; i < TWO_PI; i += PI / 5) {
    let x = cos(i) * 100;
    let y = sin(i) * 100;
    fill(255, 215, 0); // Warna emas
    vertex(x, y, 0);
    fill(255, 165, 0); // Warna oranye
    vertex(x / 2, y / 2, 100);
  }
  endShape(CLOSE);

  angle += 0.03;
}
