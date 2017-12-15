var Camera = {
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
    rotation: 0
};

Camera.Shake = function (violence) {
    for (var i = 0; i < 50; ++i) {
        setTimeout(function () {
            Camera.offsetX = violence - (Math.random() * 2 * violence);
            Camera.offsetY = violence - (Math.random() * 2 * violence);
        }, i * 10);
    }
    setTimeout(function () {
        Camera.offsetX = 0;
        Camera.offsetY = 0;
    }, 600);
};