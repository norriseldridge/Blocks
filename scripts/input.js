var input = [];

document.onkeydown = function (event) {
    input[event.key] = true;
    
    var delay = 3;
    
    if (event.key == "a") {
        gravityOn = false;
        for (var i = 0; i < 90; ++i) {
            timeOuts.push(setTimeout(function (i) {
                Camera.rotation -= Math.PI / 180;
            }, i * delay, i));
        }
        timeOuts.push(setTimeout(function () {
            player.RotateDirection(-1);
            gravityOn = true;
        }, 90 * delay));
    }
    
    if (event.key == "d") {
        gravityOn = false;
        for (var i = 0; i < 90; ++i) {
            timeOuts.push(setTimeout(function (i) {
                Camera.rotation += Math.PI / 180;
            }, i * delay, i));
        }
        timeOuts.push(setTimeout(function () {
            player.RotateDirection(1);
            gravityOn = true;
        }, 90 * delay));
    }
};

document.onkeyup = function (event) {
    input[event.key] = false;
};