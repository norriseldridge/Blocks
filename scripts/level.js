function Level() {
    this.tiles = [];
    this.deathTiles = [];
    this.switches = [];
    this.active = true;
    this.nextLevel = this; // default is just restart the level
    this.promptReset = false;
    this.missionPrompt = "";
    this.missionPromptTime = 0;
    this.coins = [];
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

function CreateCoin(x, y) {
    var temp = new Coin(x, y);
    RegisterSpriteToHandler(temp.sprite);
    return temp;
}

function CreateSwitch(x, y, target) {
    var temp = new Switch(x, y);
    temp.target = target;
    RegisterSpriteToHandler(temp.sprite);
    return temp;
}

function InitializeLevel(level) {
    if (level.missionPrompt.length > 0) {
        level.missionPromptTime = 1000; // delay amount
    }
    level.promptReset = false;
    
    gameSpeed = 1;
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
    
    // check for coins
    GetActiveCoins(level).forEach(function (coin) {
        if (coin.active) {
            coin.Update();
            if (distance({x: player.sprite.x, y: player.sprite.y}, 
                     {x: coin.sprite.x, y: coin.sprite.y}) < 20) {
                coin.active = false;
                coin.sprite.alpha = 0;
                CreateExplosion("assets/images/coin.png", 15, 8, coin.sprite.x, coin.sprite.y);
            }
        }
    });
    
    // spin the portal
    level.goal.rotation -= 0.01 * gameSpeed;
    
    // hide portal?
    level.goal.alpha = (GetActiveCoins(level).length > 0) ? 0 : 1;
    
    // reset this to check again
    level.promptReset = false;
    
    // check for death?
    if (level.deathTiles.length > 0) {
        level.deathTiles.forEach(function(deathTile) {
            // rotate
            deathTile.rotation += 0.05 * gameSpeed;
            
            // check death
            if (!player.isDead) {
                if (CheckCollision(player.sprite, deathTile)) {
                    level.promptReset = true;
                    player.sprite.alpha = 0;
                    player.isDead = true;
                    canvas.classList.add('grayscaled');
                    Camera.Shake(8, 15);
                    CreateExplosion("assets/images/portal.png", 50, 2, player.sprite.x, player.sprite.y);
                }
            }
            else {
                if (gameSpeed > 0.03) {
                    gameSpeed *= 0.999;
                }
            }
        });
    }
    
    // check for switches
    level.switches.forEach(function (s) {
        s.Update();
    });
    
    // check for the win
    if (distance({x: player.sprite.x, y: player.sprite.y}, 
                 {x: level.goal.x, y: level.goal.y}) < 20) {
        // can only win if they got all the coins
        if (CanComplete(level)) {
            level.active = false;
            FadeWhiteShake(function () {
                SetNextLevel(level.nextLevel);
            });
            // clean up
            level.CleanUp();
        }
    } else if (distance({x: player.sprite.x, y: player.sprite.y}, 
                 {x: level.goal.x, y: level.goal.y}) > 2000) {
        level.promptReset = true;
    }
}

function CanComplete(level) {
    if (player.isDead)
        return false;
    
    if (GetActiveCoins(level).length > 0)
        return false;
    
    return true;
}

function GetActiveCoins(level) {
    var active = [];
    level.coins.forEach(function (coin) {
        if (coin.active) {
            active.push(coin);
        }
    });
    
    return active;
}

function FadeWhiteShake(callback, param) {
    canvas.classList.remove('grayscaled');
    canvas.classList.add('stopped');
    Camera.Shake(2, 50);
    setTimeout(function () {
        callback(param);
        canvas.classList.remove('stopped');
    }, 500);
}

function FadeBlackShake(callback, param) {
    canvas.classList.remove('grayscaled');
    canvas.classList.add('stopped-black');
    Camera.Shake(2, 50);
    setTimeout(function () {
        callback(param);
        canvas.classList.remove('stopped-black');
    }, 500);
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
    
    level.switches.forEach(function (s) {
        RemoveSpriteFromHandler(s.sprite);
    });
    level.switches = [];
    
    level.coins.forEach(function (coin) {
        RemoveSpriteFromHandler(coin.sprite);
    });
    level.coins = [];
    
    RemoveSpriteFromHandler(level.goal);
}