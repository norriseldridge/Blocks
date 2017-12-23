var level9 = new Level();

level9.Initialize = function () {
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
        var temp = CreateTile(-150, -50 + i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 3; ++i) {
        var temp = CreateTile(150, -150 - i * 50);
        this.tiles.push(temp);
        
        var temp = CreateTile(i * 50, -250);
        this.tiles.push(temp);
        
        var temp = CreateTile(-50, -150 - i * 50);
        this.tiles.push(temp);
    }
    
    for (var i = 0; i < 4; ++i) {
        var temp = CreateTile(0, 100 + i * 50);
        this.tiles.push(temp);
        
        var temp = CreateTile(-250, 100 + i * 50);
        this.tiles.push(temp);
        
        var temp = CreateTile(-50 + i * -50, 250);
        this.tiles.push(temp);
        
        if (i != 1) {
            var temp = CreateTile(-50 + i * -50, 100);
            this.tiles.push(temp);
        }
    }
    
    // create switch
    var door = CreateTile(-100, 100);
    this.tiles.push(door);
    var s = CreateSwitch(-100, -200, door);
    this.switches.push(s);
    
    this.goal = CreateGoal(-100, 175);
};

level9.Update = function () {
    UpdateLevel(this);
};

level9.CleanUp = function () {
    CleanUpLevel(this);
};