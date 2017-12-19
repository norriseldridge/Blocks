// html5 globals
var canvas;
var ctx;
var timeOuts = [];

// game constants
var gameName = "blocks";
var fps = 24;
var resetPrompt = "\'r\' to reset...";

// game vars
var gameSpeed = 1;
var player;
var gravity = 0;
var maxGravity = 3;
var gravityAcceleration = 0.01;
var gravityOn = true;
var levelManager = {
    current: undefined,
    newLevel: false
};

function SetNextLevel(level) {
    levelManager.current = Object.assign({}, level);
    levelManager.newLevel = true;
};

function ClearTimeouts() {
    while (timeOuts.length > 0) {
        clearTimeout(timeOuts.pop());
    }
}

function RotateWorld(direction) {
    var delay = 3;
    
    if (direction == "left") {
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
    
    if (direction == "right") {
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
}

// utility
function distance(pos1, pos2) {
    var dx = pos1.x - pos2.x;
    var dy = pos1.y - pos2.y;
    return Math.sqrt((dx * dx) + (dy * dy));
}

function DrawText(text, x, y, fontSize, color) {
    ctx.fillStyle = (color == undefined) ? 'white' : color;
    var size = (fontSize == undefined) ? 40 : fontSize;
    ctx.font = size + 'px Exo';
    ctx.textAlign = 'center';
    
    var lines = text.split('\n');
    
    var yOff = 0;
    lines.forEach(function (line) {
        ctx.fillText(line, x, y + yOff);
        yOff += 40;
    });
}