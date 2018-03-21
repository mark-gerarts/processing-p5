let squares = [];

function setup() {
    createCanvas(640, 340);

    let centerX = width / 2;
    let centerY = height / 2;
    let w = 100;
    let h = 50;
    let dx = 20;

    for (let i = 0; i < 5; i++) {
        squares.push(new Square(
            centerX - (i * dx),
            centerY + (i * dx),
            w,
            h
        ));
    }
}

function draw() {
    background(255);
    squares.forEach((square) => {
        push();
        square.step();
        square.render();
        pop();
    });
}

class Square {
    constructor(x, y, width, height, delay) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.delay = delay;
    }

    render() {
        rectMode(CENTER);
        fill(51);
        stroke(255, 255, 255);
        rect(0, 0, this.width, this.height);
    }

    step() {
        translate(this.x, this.y);
        rotate(radians(frameCount));
    }
}
