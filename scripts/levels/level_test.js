var testLevel = new Level();

testLevel.Initialize = function () {
    // set next level
    this.nextLevel = level1;
    
    // position player
    player.sprite.x = 0;
    player.sprite.y = 0;
    Camera.rotation = Math.PI;
    player.direction = 2;
    this.missionPrompt = "Hit the switch";
    InitializeLevel(this);
    gameSpeed = 2;
    
    // create a platform to stand on
    for (var i = 0; i < 3; ++i) {
        var temp = CreateTile(-50 + i * 50, -100);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 3; ++i) {
        var temp = CreateTile(-150, -100 + i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 3; ++i) {
        var temp = CreateTile(150, 100 + i * 50);
        this.tiles.push(temp);
        
        var temp = CreateTile(150, -150 - i * 50);
        this.tiles.push(temp);
        
        var temp = CreateTile(i * 50, -150);
        this.tiles.push(temp);
        
        var temp = CreateTile(-50, -50 - i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 4; ++i) {
        var temp = CreateTile(0, 100 + i * 50);
        this.tiles.push(temp);
        
        var temp = CreateTile(-250, 100 + i * 50);
        this.tiles.push(temp);
        
        var temp = CreateTile(-50 + i * -50, 300);
        this.tiles.push(temp);
        
        if (i != 1) {
            var temp = CreateTile(-50 + i * -50, 100);
            this.tiles.push(temp);
        }
    }
    
    
    
    this.goal = CreateGoal(0, -1000);
};

testLevel.Update = function () {
    UpdateLevel(this);
};

testLevel.CleanUp = function () {
    CleanUpLevel(this);
};