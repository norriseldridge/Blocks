var level6 = new Level();

level6.Initialize = function () {
    // set next level
    this.nextLevel = level7;
    
    // position player
    player.sprite.x = 0;
    player.sprite.y = -200;
    Camera.rotation = Math.PI;
    player.direction = 2;
    this.missionPrompt = "Uh... srsly?";
    InitializeLevel(this);
    
    // temp map
    for (var i = 0; i < 2; ++i) {
        var temp = CreateTile(i * 50, -250 - i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 2; ++i) {
        var temp = CreateTile(-100 + i * 50, -250 - i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 2; ++i) {
        var temp = CreateTile(-100 + i * 50, -50 - i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 2; ++i) {
        var temp = CreateTile(i * 50, -50 - i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 2; ++i) {
        var temp = CreateTile(250 - i * 50, -200 - i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 2; ++i) {
        var temp = CreateTile(-300 - i * 50, -150 + i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 4; ++i) {
        var temp = CreateDeathTile(-150, i * -100);
        this.deathTiles.push(temp);
        
        temp = CreateDeathTile(150, 50 + i * -100);
        this.deathTiles.push(temp);
    }
    
    // coin
    this.coins.push(CreateCoin(0, 0));
    this.coins.push(CreateCoin(-100, 0));
    this.coins.push(CreateCoin(-50, -350));
    this.coins.push(CreateCoin(50, -350));
    
    this.goal = CreateGoal(0, -150);
    
    // custom variable
    this.moveDirection = "left";
    this.moveTimer = 100;
};

level6.Update = function () {
    UpdateLevel(this);
    
    this.moveTimer-= 1 / gameSpeed;
    
    if (this.moveTimer <= 0) {
        this.moveDirection = (this.moveDirection == "left") ? "right" : "left";
        this.moveTimer = 100;
    }
    var amount = ((this.moveDirection == "left") ? -1 : 1) * gameSpeed;
    this.deathTiles.forEach(function (tile) {
        tile.x += amount;
    });
};

level6.CleanUp = function () {
    CleanUpLevel(this);
};