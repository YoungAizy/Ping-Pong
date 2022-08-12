import {
    GAMESTATE
} from "./game.js";

export default class InputHandler {

    constructor(game) {
        const paddle = game.player;

        document.addEventListener("keydown", (e) => {
            switch (e.keyCode) {
                case 38:
                    paddle.moveUp()
                    break;
                case 40:
                    paddle.moveDown();
                    break;
                case 32:
                    if (game.gameState === GAMESTATE.SUSPENDED || game.gameState === GAMESTATE.GAMEOVER) {
                        game.gameState = GAMESTATE.PLAY;
                        game.reset();
                    }
                    break;
            }
        })

        document.addEventListener("keyup", (e) => {

            switch (e.keyCode) {
                case 38:
                    if (paddle.speed < 0) paddle.stop();
                    break;
                case 34:
                    if (paddle.speed > 0) paddle.stop();
                    break;
            }
        })
    }
}