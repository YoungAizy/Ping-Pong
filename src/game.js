import AI from "./ai.js";
import Ball from "./ball.js";
import InputHandler from "./input.js";
import Player from "./player.js";

const GAMESTATE = {
    GAMEOVER: 0,
    PLAY: 1,
}

export default class Game {

    constructor(canvas) {

        this.gameState = GAMESTATE.PLAY;
        this.winner = "";
        this.gamewidth = canvas.width;
        this.gameheight = canvas.height;


        this.player = new Player(canvas)
        this.npc = new AI(canvas);

        this.ball = new Ball(canvas, this);
        new InputHandler(this.player);
    }

    updateScore() {
        this.player.player.innerText = this.player.score;
        this.npc.aiScore.innerText = this.npc.score;

    }

    updateFrame() {
        //this.scoreCheck()
        if (this.gameState === GAMESTATE.GAMEOVER) return;
        this.ball.update();
        this.player.update()
        this.npc.update()

        this.scoreCheck();
    }

    render(context) {
        context.fillStyle = "black";
        this.ball.draw(context)
        this.player.draw(context)
        this.npc.draw(context)

        if (this.gameState === GAMESTATE.GAMEOVER) this.drawText(context, this.winner);

    }

    drawText(ctx, winner) {
        ctx.rect(0, 0, this.gamewidth, this.gameheight);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        const text = "GAMEOVER!!! " + winner + " is the winner "
        ctx.fillText(text, this.gamewidth / 2, this.gameheight / 2);
    }

    scoreCheck() {
        if (this.player.score === 10) {
            this.winner = "Player 1";
            this.gameState = GAMESTATE.GAMEOVER;
        }
        if (this.npc.score === 10) {
            this.winner = "AI";
            this.gameState = GAMESTATE.GAMEOVER;
        }
    }


}