function Level() {
    this.tiles = [];
    this.active = true;
    this.nextLevel = this; // default is just restart the level
    this.promptReset = false;
}

Level.prototype.Initialize = function () {
    
};

Level.prototype.Update = function () {
    
};

Level.prototype.CleanUp = function () {
    
};

function CreateTile(x, y) {
    var temp = new Sprite({
        img: "assets/images/tile.png",
        x: x,
        y: y,
        width: 50,
        height: 50,
        zIndex: 1
    });
    RegisterSpriteToHandler(temp);
    return temp;
}

function CreateGoal(x, y) {
    var temp = new Sprite({
        img: "assets/images/portal.png",
        x: x,
        y: y,
        width: 100,
        height: 100,
        zIndex: -1
    });
    RegisterSpriteToHandler(temp);
    return temp;
}

function UpdateLevel(level) {
    if (level.active == false) {
        return;
    }
    
    // spin the portal
    level.goal.rotation -= 0.01;
    
    // reset this to check again
    level.promptReset = false;
    
    // check for the win
    if (distance({x: player.sprite.x, y: player.sprite.y}, 
                 {x: level.goal.x, y: level.goal.y}) < 20) {
        level.active = false;
        canvas.classList.add('stopped');
        Camera.Shake(5);
        setTimeout(function () {
            // next level
            SetNextLevel(level.nextLevel);
            canvas.classList.remove('stopped');
        }, 500);
        
        // clean up
        level.CleanUp();
    } else if (distance({x: player.sprite.x, y: player.sprite.y}, 
                 {x: level.goal.x, y: level.goal.y}) > 1000) {
        level.promptReset = true;
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