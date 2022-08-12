export default class AI {

    constructor(canvas) {
        this.aiScore = document.getElementById("npc");
        this.score = 0;
        this.aiScore.innerText = this.score.toString();
        this.init(canvas)
    }

    init(canvas) {


        this.position = {
            x: canvas.clientWidth + 5,
            y: canvas.clientHeight / 2 - 50,
        }
        this.speed = 10;
    }


    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, 15, 100);
    }

    update() {
        this.position.y += this.speed;

        if (this.position.y < 0 || this.position.y + 100 > canvas.clientHeight)
            this.speed = this.speed * -1;
    }
}