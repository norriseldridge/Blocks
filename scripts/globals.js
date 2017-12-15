// html5 globals
var canvas;
var ctx;
var timeOuts = [];

// game constants
var fps = 60;

// game vars
var player;
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

// utility
function distance(pos1, pos2) {
    var dx = pos1.x - pos2.x;
    var dy = pos1.y - pos2.y;
    return Math.sqrt((dx * dx) + (dy * dy));
}