export default class InputHandler{

    constructor(paddle) {
        this.paddle = paddle;

        document.addEventListener("keydown", (e) => {
            switch (e.keyCode) {
                case 38:
                    paddle.moveUp()
                    break;
                case 40:
                    paddle.moveDown();
                    break;
                case 27:
                    // console.log("Lool")
                    // game.togglePause();
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