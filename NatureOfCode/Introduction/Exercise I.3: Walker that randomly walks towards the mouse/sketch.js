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
        if (r < 0.5) {
            this.walkToMouse();
        }
        else {
            this.walkRandom();
        }
    }

    walkRandom() {
        const rx = int(random(3)) - 1;
        const ry = int(random(3)) - 1;
        this.x += rx;
        this.y += ry;
    }

    walkToMouse() {
        // Straightforward walking towards the mouse; not following the
        // shortest path.
        if (this.x < mouseX) {
            this.x++;
        }
        else {
            this.x--;
        }
        if (this.y < mouseY) {
            this.y++;
        }
        else {
            this.y--;
        }
    }
}
