function setup() {
    createCanvas(640, 340);
}

function draw() {
    const r = randomGaussian();
    const sd = 60;
    const mean = 320;
    const x = sd * r + mean;

    noStroke();
    fill(0, 10);
    ellipse(x, 180, 16, 16);
}
