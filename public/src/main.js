import Game, {
    GAMESTATE
} from "./game.js";
import "../style.css";


const canvas = document.getElementById("canvas");

const context = canvas.getContext('2d');
const game = new Game(canvas);

context.rect(0, 0, canvas.width, canvas.height);
context.fillStyle = "rgba(0,0,0,0.5)";
context.fill();

context.font = "30px Arial";
context.fillStyle = "white";
context.textAlign = "center";
const text = "Press spacebar to start game "
context.fillText(text, canvas.width / 2, canvas.height / 2);


function gameLoop() {

    if (game.gameState !== GAMESTATE.SUSPENDED) {
        context.clearRect(0, 0, 960, 600)

        game.updateFrame();
        game.render(context)
    }

    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop);