var level8 = new Level();

level8.Initialize = function () {
    // set next level
    this.nextLevel = level1;
    
    // position player
    player.sprite.x = 0;
    player.sprite.y = 900;
    Camera.rotation = Math.PI;
    player.direction = 2;
    this.missionPrompt = "I\'m freeee! Free fall\'n!";
    InitializeLevel(this);
    gameSpeed = 2;
    
    this.goal = CreateGoal(0, -1000);
};

level8.Update = function () {
    UpdateLevel(this);
};

level8.CleanUp = function () {
    CleanUpLevel(this);
};