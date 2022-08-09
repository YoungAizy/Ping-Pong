import Game from "./game.js";


const canvas = document.getElementById("canvas");

const context = canvas.getContext('2d');
const game = new Game(canvas);


function gameLoop() {

    context.clearRect(0, 0, 960, 600)

    game.updateFrame();
    game.render(context)

    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop);