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
        const r = random(1);
        if (r < 0.4) {
            this.x++;
        }
        else if (r < 0.6) {
            this.x--;
        }
        else if (r < 0.8) {
            this.y++
        }
        else {
            this.y--;
        }
    }
}
