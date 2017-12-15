var testLevel = new Level();

testLevel.Initialize = function () {
    // set next level
    this.nextLevel = level1;
    
    // position player
    player.sprite.x = 0;
    player.sprite.y = 0;
    Camera.rotation = Math.PI;
    player.direction = 2;
    InitializeLevel(this);
    
    // temp map
    for (var i = 0; i < 6; ++i) {
        var temp = CreateTile(i * 50, -50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 6; ++i) {
        var temp = CreateTile(-50, i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 5; ++i) {
        var temp = CreateTile(i * 50, 500);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 7; ++i) {
        var temp = CreateTile(300, i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 8; ++i) {
        var temp = CreateTile(50, i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 5; ++i) {
        var temp = CreateTile(150 + i * 50, 450);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 3; ++i) {
        var temp = CreateTile(50 + i * 50, 250);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 4; ++i) {
        this.deathTiles.push(CreateDeathTile(250, i * 50));
        this.deathTiles.push(CreateDeathTile(200, i * 50));
    }
    
    for (var i = 0; i < 4; ++i) {
        this.deathTiles.push(CreateDeathTile(-100 - i * 50, 300 + i * 50));
        this.deathTiles.push(CreateDeathTile(-100 - i * 50, i * 50));
    }
    
    this.goal = CreateGoal(100, 0);
};

testLevel.Update = function () {
    UpdateLevel(this);
};

testLevel.CleanUp = function () {
    CleanUpLevel(this);
};