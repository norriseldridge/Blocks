var input = [];

document.onkeydown = function (event) {
    input[event.key] = true;
    
    if (event.key == "a") {
        RotateWorld("left");
    }
    
    if (event.key == "d") {
        RotateWorld("right");
    }
};

document.onkeyup = function (event) {
    input[event.key] = false;
};
