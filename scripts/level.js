function Level() {
    this.tiles = [];
    this.deathTiles = [];
    this.active = true;
    this.nextLevel = this; // default is just restart the level
    this.promptReset = false;
    this.missionPrompt = "";
    this.missionPromptTime = 0;
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

function CreateDeathTile(x, y) {
    var temp = new Sprite({
        img: "assets/images/spikes.png",
        x: x,
        y: y,
        width: 50,
        height: 50,
        zIndex: 2
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

function InitializeLevel(level) {
    if (level.missionPrompt.length > 0) {
        level.missionPromptTime = 1000; // delay amount
    }
    level.promptReset = false;
    
    player.sprite.alpha = 1;
    levelManager.newLevel = false;
}

function UpdateLevel(level) {
    if (level.active == false) {
        return;
    }
    
    if (level.missionPromptTime > 0) {
        --level.missionPromptTime;
        DrawText(level.missionPrompt, canvas.width / 2, canvas.height / 2 - 150);
    }
    
    // spin the portal
    level.goal.rotation -= 0.01;
    
    // reset this to check again
    level.promptReset = false;
    
    // check for death?
    if (level.deathTiles.length > 0) {
        level.deathTiles.forEach(function(deathTile) {
            // rotate
            deathTile.rotation += 0.05;
            
            // check death
            if (!player.isDead) {
                if (CheckCollision(player.sprite, deathTile)) {
                    level.promptReset = true;
                    player.sprite.alpha = 0;
                    player.isDead = true;
                    Camera.Shake(8, 15);
                    CreateExplosion(50, 4, player.sprite.x, player.sprite.y);
                }
            }
        });
    }
    
    // check for the win
    if (distance({x: player.sprite.x, y: player.sprite.y}, 
                 {x: level.goal.x, y: level.goal.y}) < 20) {
        level.active = false;
        canvas.classList.add('stopped');
        Camera.Shake(2, 50);
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
    
    level.deathTiles.forEach(function (tile) {
        RemoveSpriteFromHandler(tile);
    });
    level.deathTiles = [];
    
    RemoveSpriteFromHandler(level.goal);
}