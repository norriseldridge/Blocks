var level4 = new Level();

level4.Initialize = function () {
    // set next level
    this.nextLevel = level5;
    
    // position player
    player.sprite.x = 0;
    player.sprite.y = 0;
    Camera.rotation = Math.PI;
    player.direction = 2;
    this.missionPrompt = "Collect the coin";
    InitializeLevel(this);
    
    // temp map
    for (var i = 0; i < 5; ++i) {
        var temp = CreateTile(i * 50, -50);
        this.tiles.push(temp);
    }
    
    // coin
    this.coins.push(CreateCoin(0, -100));
    
    this.goal = CreateGoal(100, 0);
};

level4.Update = function () {
    UpdateLevel(this);
};

level4.CleanUp = function () {
    CleanUpLevel(this);
};