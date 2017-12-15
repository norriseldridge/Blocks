var testLevel = new Level();

testLevel.Initialize = function () {
    // set next level
    this.nextLevel = level1;
    
    // position player
    player.sprite.x = 0;
    player.sprite.y = 0;
    levelManager.newLevel = false;
    Camera.rotation = Math.PI;
    player.direction = 2;
    
    // temp map
    for (var i = 0; i < 10; ++i) {
        var temp = new Sprite({
            img: "assets/images/tile.png",
            x: i * 50,
            y: -50,
            width: 50,
            height: 50,
            zIndex: 1
        });
        this.tiles.push(temp);
        RegisterSpriteToHandler(temp);
    }
    
    for (var i = 0; i < 10; ++i) {
        var temp = CreateTile(-50, i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 10; ++i) {
        var temp = CreateTile(i * 50, 500);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 10; ++i) {
        var temp = CreateTile(500, i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 5; ++i) {
        var temp = CreateTile(50, i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 5; ++i) {
        var temp = CreateTile(150 + i * 50, 450);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 5; ++i) {
        var temp = CreateTile(200 + i * 50, 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 3; ++i) {
        var temp = CreateTile(50 + i * 50, 250);
        this.tiles.push(temp);
    }
    
    this.goal = CreateGoal(100, 0);
};

testLevel.Update = function () {
    UpdateLevel(this);
};

testLevel.CleanUp = function () {
    CleanUpLevel(this);
};