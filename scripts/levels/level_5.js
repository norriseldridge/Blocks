var level5 = new Level();

level5.Initialize = function () {
    // set next level
    this.nextLevel = level6;
    
    // position player
    player.sprite.x = 0;
    player.sprite.y = -200;
    Camera.rotation = Math.PI;
    player.direction = 0;
    this.missionPrompt = "Aaaand opposites..."
    InitializeLevel(this);
    
    // temp map
    for (var i = 0; i < 5; ++i) {
        var temp = CreateTile(i * 50, -50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 3; ++i) {
        var temp = CreateTile(-200, 50 - i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 5; ++i) {
        var temp = CreateTile(-200 + i * 50, -250);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 5; ++i) {
        var temp = CreateTile(-200 + i * 50, -250 - i * 50);
        this.tiles.push(temp);
    }
    
    // coin
    this.coins.push(CreateCoin(0, -400));
    
    this.goal = CreateGoal(100, 0);
};

level5.Update = function () {
    UpdateLevel(this);
};

level5.CleanUp = function () {
    CleanUpLevel(this);
};