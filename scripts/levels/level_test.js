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
        var temp = new Sprite({
            img: "assets/images/tile.png",
            x: -50,
            y: i * 50,
            width: 50,
            height: 50,
            zIndex: 1
        });
        this.tiles.push(temp);
        RegisterSpriteToHandler(temp);
    }
    
    for (var i = 0; i < 10; ++i) {
        var temp = new Sprite({
            img: "assets/images/tile.png",
            x: i * 50,
            y: 500,
            width: 50,
            height: 50,
            zIndex: 1
        });
        this.tiles.push(temp);
        RegisterSpriteToHandler(temp);
    }
    
    for (var i = 0; i < 10; ++i) {
        var temp = new Sprite({
            img: "assets/images/tile.png",
            x: 500,
            y: i * 50,
            width: 50,
            height: 50,
            zIndex: 1
        });
        this.tiles.push(temp);
        RegisterSpriteToHandler(temp);
    }
    
    for (var i = 0; i < 5; ++i) {
        var temp = new Sprite({
            img: "assets/images/tile.png",
            x: 50,
            y: i * 50,
            width: 50,
            height: 50,
            zIndex: 1
        });
        this.tiles.push(temp);
        RegisterSpriteToHandler(temp);
    }
    
    for (var i = 0; i < 5; ++i) {
        var temp = new Sprite({
            img: "assets/images/tile.png",
            x: i * 50,
            y: 450,
            width: 50,
            height: 50,
            zIndex: 1
        });
        this.tiles.push(temp);
        RegisterSpriteToHandler(temp);
    }
    
    for (var i = 0; i < 5; ++i) {
        var temp = new Sprite({
            img: "assets/images/tile.png",
            x: 200 + i * 50,
            y: 50,
            width: 50,
            height: 50,
            zIndex: 1
        });
        this.tiles.push(temp);
        RegisterSpriteToHandler(temp);
    }
    
    for (var i = 0; i < 3; ++i) {
        var temp = new Sprite({
            img: "assets/images/tile.png",
            x: 300 + i * 50,
            y: 250,
            width: 50,
            height: 50,
            zIndex: 1
        });
        this.tiles.push(temp);
        RegisterSpriteToHandler(temp);
    }
    
    this.goal = new Sprite({
        img: "assets/images/portal.png",
        x: 100,
        y: 0,
        width: 100,
        height: 100,
        zIndex: -1
    });
    RegisterSpriteToHandler(this.goal);
};

testLevel.Update = function () {
    UpdateLevel(this);
};

testLevel.CleanUp = function () {
    CleanUpLevel(this);
};