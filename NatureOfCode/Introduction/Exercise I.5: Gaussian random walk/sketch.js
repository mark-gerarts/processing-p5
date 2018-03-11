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
        this.x += this.randomSign() * this.randomOffset();
        this.y += this.randomSign() * this.randomOffset();
    }

    randomOffset() {
        const r = randomGaussian();
        const sd = 1;
        const mean = 0;
        return sd * r + mean;
    }

    randomSign() {
        const r = random(1);
        if (r < 0.5) {
            return -1;
        }
        else {
            return 1;
        }
    }
}
