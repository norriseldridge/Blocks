var level1 = new Level();

level1.Initialize = function () {
    // position player
    player.sprite.x = 0;
    player.sprite.y = 0;
    levelManager.newLevel = false;
    Camera.rotation = 0;
    player.direction = 0;
    
    // build level here
};

level1.Update = function () {
    UpdateLevel(this);
};

level1.CleanUp = function () {
    CleanUpLevel(this);
};