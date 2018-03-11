let randomCounts = Array(20).fill(0);

function setup() {
    createCanvas(640, 340);
    console.log(randomCounts);
}

function draw() {
    randomCounts[int(random(randomCounts.length))]++;

    stroke(0);
    fill(175);
    let w = width / randomCounts.length;
    randomCounts.forEach((x, i) => {
        rect(i * w, height - x, w - 1, x);
    });
}
