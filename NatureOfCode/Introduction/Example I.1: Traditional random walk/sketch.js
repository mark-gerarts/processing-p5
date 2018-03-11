let walker;

function setup() {
    createCanvas(640, 340);
    walker = new Walker();
}

function draw() {
    walker.step();
    walker.display();
}

class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    display() {
        stroke(0);
        point(this.x, this.y);
    }

    step() {
        const rx = int(random(3)) - 1;
        const ry = int(random(3)) - 1;
        this.x += rx;
        this.y += ry;
    }
}
