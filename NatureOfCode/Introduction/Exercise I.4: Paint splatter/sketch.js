function setup() {
    createCanvas(640, 340);

    const numberOfDots = 100;
    for (let i = 0; i < numberOfDots; i++) {
        randomSplatter();
    }
}

function draw() {
    // Nothing to draw.
}

function randomSplatter() {
    const centerX = width / 2;
    const centerY = height / 2;

    noStroke();
    fill('blue');
    ellipse(centerX + randomOffset(), centerY + randomOffset(), 20, 20);
}

function randomOffset() {
    const r = randomGaussian();
    const sd = 10;
    const mean = 0;

    return sd * r + mean;
}
