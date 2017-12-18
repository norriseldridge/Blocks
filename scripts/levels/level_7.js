var level7 = new Level();

level7.Initialize = function () {
    // set next level
    this.nextLevel = level8;
    
    // position player
    player.sprite.x = 0;
    player.sprite.y = 1000;
    Camera.rotation = Math.PI;
    player.direction = 2;
    InitializeLevel(this);
    
    for (var i = 0; i < 4; ++i) {
        var temp = CreateDeathTile(-190, i * 200);
        this.deathTiles.push(temp);
        
        temp = CreateDeathTile(190, 50 + i * 200);
        this.deathTiles.push(temp);
    }
    
    for (var i = 0; i < 20; ++i) {
        var temp = CreateTile(-200, -200 + i * 50);
        this.tiles.push(temp);
        
        temp = CreateTile(200, -200 + i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 9; ++i) {
        var temp = CreateTile(-200 + i * 50, -250);
        this.tiles.push(temp);
    }
    
    this.goal = CreateGoal(0, -150);
    
    // custom variable
    this.moveDirection = "left";
    this.moveTimer = 600;
};

level7.Update = function () {
    UpdateLevel(this);
    
    this.moveTimer-= 1 / gameSpeed;
    
    if (this.moveTimer <= 0) {
        this.moveDirection = (this.moveDirection == "left") ? "right" : "left";
        this.moveTimer = 600;
    }
    var amount = ((this.moveDirection == "left") ? -0.5 : 0.5) * gameSpeed;
    var index = 0;
    this.deathTiles.forEach(function (tile) {
        if (index % 2 == 0) {
            tile.x -= amount;
        }
        else {
            tile.x += amount;
        }
        ++index;
    });
};

level7.CleanUp = function () {
    CleanUpLevel(this);
};