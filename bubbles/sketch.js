let bubbles = [];
let scatter = false;

function setup() {
    createCanvas(500, 400);
    for (let i = 0; i < 100; i++) {
        bubble = {
            dx: 0,
            dy: 0,
            x: random(0, width),
            y: random(0, height),
            size: random(1, 100),
            color: {
                r: random(0, 255),
                g: random(0, 255),
                b: random(0, 255)
            }
        };
        bubbles.push(bubble);
    }
};


function draw() {
    background(0);
    fill(250);
    fill(255, 0, 0);
    textSize(15);
    text("Hello, this is a satisfying simulation by Edgar, Ibby, and Silas", 10, 30);
    text("Press SPACE to disperse the bubbles, and press it again to draw them in.", 10, 50);
    text("Click on the bubbles to change their color.", 10, 70);
    for (let bubble of bubbles) {
        bubble.x += bubble.dx;
        bubble.y += bubble.dy;
        bubble.x += random(-2, 2);
        bubble.y += random(-2, 2);
        fill(bubble.color.r, bubble.color.g, bubble.color.b);
        circle(bubble.x, bubble.y, bubble.size);

        if (bubble.x < 0 || bubble.x > width) {
            bubble.dx *= -1;
        }
        if (bubble.y < 0 || bubble.y > height) {
            bubble.dy *= -1;
        }
        if (scatter == false) {
            for (let bubble of bubbles) {
                bubble.dx = 0;
                bubble.dy = 0;

            if (mouseX > bubble.x) {
                bubble.x += 1/50;
            }
            if (mouseX < bubble.x) {
                bubble.x -= 1/50;
            }
            if (mouseY > bubble.y) {
                bubble.y += 1/50;
            }
            if (mouseY < bubble.y) {
                bubble.y -= 1/50;
            }
        }
      }
    }
}

function distance(x1, y1, x2, y2) {
    return sqrt((x2 - x1) ** 2 + (y2 - y1) ^ 2)
}

function mousePressed() {
    for (bubble of bubbles) {
        if (distance(mouseX, mouseY, bubble.x, bubble.y) < bubble.size / 2) {
            bubble.color.r = random(0, 255)
            bubble.color.g = random(0, 255)
            bubble.color.b = random(0, 255)
        }
    }
}

function keyPressed() {
    if (keyCode === 32) {
        scatter = !scatter;
        if (scatter == true) {
            for (let bubble of bubbles) {
                bubble.dx = random(-5, 5);
                bubble.dy = random(-5, 5);
            }
        }

    }
}
