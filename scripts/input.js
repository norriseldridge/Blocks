var input = [];

document.onkeydown = function (event) {
    input[event.key] = true;
    
    if (event.key == "a") {
        gravityOn = false;
        for (var i = 0; i < 90; ++i) {
            timeOuts.push(setTimeout(function (i) {
                Camera.rotation -= Math.PI / 180;
            }, i * 6, i));
        }
        timeOuts.push(setTimeout(function () {
            player.RotateDirection(-1);
            gravityOn = true;
        }, 90 * 6));
    }
    
    if (event.key == "d") {
        gravityOn = false;
        for (var i = 0; i < 90; ++i) {
            timeOuts.push(setTimeout(function (i) {
                Camera.rotation += Math.PI / 180;
            }, i * 6, i));
        }
        timeOuts.push(setTimeout(function () {
            player.RotateDirection(1);
            gravityOn = true;
        }, 90 * 6));
    }
};

document.onkeyup = function (event) {
    input[event.key] = false;
};