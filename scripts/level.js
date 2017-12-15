function Level() {
    this.tiles = [];
    this.active = true;
    this.nextLevel = this; // default is just restart the level
}

Level.prototype.Initialize = function () {
    
};

Level.prototype.Update = function () {
    
};

Level.prototype.CleanUp = function () {
    
};

function UpdateLevel(level) {
    if (level.active == false) {
        return;
    }
    
    // spin the portal
    level.goal.rotation -= 0.01;
    
    // check for the win
    if (distance({x: player.sprite.x, y: player.sprite.y}, 
                 {x: level.goal.x, y: level.goal.y}) < 20) {
        level.active = false;
        setTimeout(function () {
            // next level
            SetNextLevel(level.nextLevel);
        }, 500);
        
        // clean up
        level.CleanUp();
    }
}

function CleanUpLevel(level) {
    // remove all the tiles
    ClearTimeouts();
    level.tiles.forEach(function (tile) {
        RemoveSpriteFromHandler(tile);
    });
    level.tiles = [];
    
    RemoveSpriteFromHandler(level.goal);
}