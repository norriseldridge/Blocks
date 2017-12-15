var input = [];

document.onkeydown = function (event) {
    input[event.key] = true;
    
    if (event.key == "a") {
        for (var i = 0; i < 90; ++i) {
            timeOuts.push(setTimeout(function (i) {
                Camera.rotation -= Math.PI / 180;
            }, i * 6, i));
        }
        timeOuts.push(setTimeout(function () {
            player.RotateDirection(-1);
        }, 90 * 6));
    }
    
    if (event.key == "d") {
        for (var i = 0; i < 90; ++i) {
            timeOuts.push(setTimeout(function (i) {
                Camera.rotation += Math.PI / 180;
            }, i * 6, i));
        }
        timeOuts.push(setTimeout(function () {
            player.RotateDirection(1);
        }, 90 * 6));
    }
};

document.onkeyup = function (event) {
    input[event.key] = false;
};