export default class Ball {

    constructor(canvas, game) {
        this.width = canvas.clientWidth;
        this.height = canvas.clientHeight;

        this.paddles = game;

        this.radius = 16;
        this.init();
    }

    init() {
        this.speed = {
            x: -7,
            y: 5
        };

        this.position = {
            x: canvas.clientWidth / 2 - this.radius,
            y: canvas.clientHeight / 2,
        }

    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        this.collision();

        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

    }

    collision() {
        // player
        if (this.position.x - this.radius <= 15 &&
            (this.position.y - this.radius >= this.paddles.player.position.y && this.position.y - this.radius <= this.paddles.player.position.y + 100)) {
            if (this.paddles.player.speed !== 0)
                this.speed.y = -this.speed.x * (this.paddles.player.speed % 5);
            this.speed.x = -this.speed.x;
        }

        // npc
        if (this.position.x + this.radius >= this.paddles.npc.position.x &&
            (this.position.y - this.radius >= this.paddles.npc.position.y && this.position.y - this.radius <= this.paddles.npc.position.y + 100)) {
            this.speed.y = this.speed.x * (this.paddles.npc.speed % 9);
            this.speed.x = -this.speed.x;
            this.position.x += this.speed.x;

        }

        // TOP and bottom walls
        if (this.position.y - this.radius <= 0 || this.position.y >= this.height) this.speed.y = -this.speed.y;

        //LEFT WALL
        if (this.position.x - this.radius <= 0) {
            this.paddles.npc.score += 1;
            this.paddles.updateScore()
            this.resetPosition()
        }

        //RIGHT WALL
        if (this.position.x + this.radius >= this.width) {
            this.paddles.player.score += 1;
            this.paddles.updateScore()
            this.resetPosition()
        }

    }

    resetPosition() {
        this.position = {
            x: canvas.clientWidth / 2 - this.radius,
            y: canvas.clientHeight / 2,
        };
        this.speed.x = -this.speed.x;
        this.speed.y = 5;
    }
}