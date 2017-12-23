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
    
    FadeBlackShake(function () {
        
    });
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
        FadeWhiteShake(function (self) {
            ClearProjectiles();
            levelManager.newLevel = true;
            player.isDead = false;
            self.level.CleanUp();
        }, this);
    }
    
    // projectiles
    UpdateProjectiles();
    
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
    
    // level update
    if (levelManager.newLevel) {
        this.level = levelManager.current;
        this.level.Initialize();
    }
    this.level.Update();
    
    // reset?
    if (this.level.promptReset || player.isDead) {
        DrawText(resetPrompt, canvas.width / 2, canvas.height / 2 - 50);
    }
};
