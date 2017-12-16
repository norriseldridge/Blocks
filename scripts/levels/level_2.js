var level2 = new Level();

level2.Initialize = function () {
    // position player
    player.sprite.x = 0;
    player.sprite.y = 50;
    Camera.rotation = Math.PI / 2;
    player.direction = 1;
    this.nextLevel = level3;
    this.missionPrompt = "Don\'t touch red";
    InitializeLevel(this);
    
    // build level here
    this.tiles.push(CreateTile(0, 0));
    
    for (var i = 0; i < 10; ++i) {
        var temp = CreateTile(-50, i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 7; ++i) {
        var temp = CreateTile(50, i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 8; ++i) {
        var temp = CreateTile(150, i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 5; ++i) {
        var temp = CreateTile(-50 + i * 50, 500);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 4; ++i) {
        var temp = CreateDeathTile(i * 50, 450);
        this.deathTiles.push(temp);
    }
    
    // goal
    this.goal = CreateGoal(100, -100);
    
};

level2.Update = function () {
    UpdateLevel(this);
};

level2.CleanUp = function () {
    CleanUpLevel(this);
};