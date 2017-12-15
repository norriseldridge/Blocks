var level1 = new Level();

level1.Initialize = function () {
    // position player
    player.sprite.x = 0;
    player.sprite.y = 0;
    Camera.rotation = Math.PI;
    player.direction = 2;
    this.nextLevel = level2;
    this.missionPrompt = "Use \'a\' and \'d\' to rotate\nGet to the portal";
    InitializeLevel(this);
    
    // build level here
    this.tiles.push(CreateTile(0, -50));
    
    for (var i = 0; i < 10; ++i) {
        var temp = CreateTile(-50, i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 10; ++i) {
        var temp = CreateTile(50, i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 3; ++i) {
        var temp = CreateTile(-50 + i * 50, 550);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 3; ++i) {
        var temp = CreateTile(-200, 550 - i * 50);
        this.tiles.push(temp);
    }
    
    // goal
    this.goal = CreateGoal(0, -100);
    
};

level1.Update = function () {
    UpdateLevel(this);
};

level1.CleanUp = function () {
    CleanUpLevel(this);
};