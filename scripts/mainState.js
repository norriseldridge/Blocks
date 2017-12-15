var MainState = new State();
MainState.Initialize = function () {
    // any set up should go here
    // NOTE: consider that this is run any time we change states.
    // if something needs only set once perhaps cache it somewhere to check for it here later
    player = new Player();
    RegisterSpriteToHandler(player.sprite);
    
    SetNextLevel(level1);
    this.level = levelManager.current;
    this.level.Initialize();
};

MainState.CleanUp = function () {
    // called any time we are switching to a different state!
    // any data that should be saved before switching should be done right here
    RemoveSpriteFromHandler(player.sprite);
};

MainState.Update = function () {
    // handle logic
    Camera.x = player.sprite.x;
    Camera.y = player.sprite.y;
    player.Update(this.level.tiles);
    
    // reset?
    if (input["r"]) {
        levelManager.newLevel = true;
        this.level.CleanUp();
    }
    
    // level update
    if (levelManager.newLevel) {
        this.level = levelManager.current;
        this.level.Initialize();
    }
    this.level.Update();
    
    // handle drawing
    // clear first
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var camX = canvas.width / 2;
    var camY = canvas.height / 2;
    ctx.translate(camX, camY);
    ctx.rotate(Camera.rotation);
    
    DrawSprites();
    
    ctx.rotate(-Camera.rotation);
    ctx.translate(-camX, -camY);
    
    // reset?
    if (this.level.promptReset) {
        ctx.fillStyle = 'white';
        ctx.font = '40px Times New Roman';
        ctx.textAlign = 'center';
        ctx.fillText("\'r\' to reset...", canvas.width / 2, canvas.height / 2 - 50);
    }
};
