export default class Player {

    constructor(canvas) {

        this.player = document.getElementById("player");
        this.score = 0;
        this.player.innerText = this.score;

        this.maxSpeed = 6;

        this.init(canvas)

    }

    init(canvas) {
        this.speed = 0;
        this.position = {
            x: 0,
            y: canvas.clientHeight / 2 - 50,
        }
    }

    stop() {
        this.speed = 0;
    }

    moveUp() {
        this.speed = -this.maxSpeed;
    }

    moveDown() {
        this.speed = this.maxSpeed;
    }


    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, 15, 100);

    }

    update() {
        this.position.y += this.speed;

        if (this.position.y < 0) this.position.y = 0;

        if (this.position.y + 88 > canvas.clientHeight)
            this.position.y = canvas.clientHeight - 88;
    }
}