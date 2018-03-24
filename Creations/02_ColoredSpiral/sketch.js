let spiral;

function setup() {
    spiral = new Spiral(300);
    createCanvas(800, 800);

    // Fixed spiral.
    // translate(width / 2, height / 2);
    // beginShape();
    // for (let i = 0; i < 300; i++) {
    //     curveVertex((i * 2) * sin(i / 5), (i * 2) * cos(i / 5));
    // }
    // endShape();
}

function draw() {
    spiral.step();
    spiral.render();
}

class Spiral {
    constructor(radius) {
        this.radius = radius;
        this.drawPoint = 0;
    }

    step() {
        this.drawPoint += 0.1;
    }

    render() {
        push();
        translate(width / 2, height / 2);
        rotate(radians(frameCount));
        point(this.drawPoint, 0);
        pop();
    }
}
