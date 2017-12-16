function Player() {
    this.sprite = new Sprite({
        img: "assets/images/player.png",
        x: 0,
        y: 0,
        width: 30,
        height: 30,
        zIndex: 0
    });
    
    this.oldPos = {
        x: 0,
        y: 0
    };
    
    this.direction = 0;
    this.gravity = 2;
    this.isDead = false;
}

Player.prototype.RotateDirection = function (dir) {
    this.direction += dir;
    
    if (this.direction < 0) {
        this.direction = 3;
    }
    
    if (this.direction > 3) {
        this.direction = 0;
    }
};

Player.prototype.HandleCollision = function(sprites) {
    var self = this;
    sprites.forEach(function (sprite) {
        if (CheckCollision(self.sprite, sprite)) {
            var cv = GetCollisionNormal(self.sprite, sprite);
            
            if (cv.x != 0) {
                self.sprite.x = self.oldPos.x;
            }
            
            if (cv.y != 0) {
                self.sprite.y = self.oldPos.y;
            }
        }
    });
};

Player.prototype.Update = function (sprites) {   
    this.HandleCollision(sprites);
    this.oldPos.x = this.sprite.x;
    this.oldPos.y = this.sprite.y;
    
    if (gravityOn) {
        if (this.gravity < 2) {
            this.gravity += 0.005;
        }
        else {
            this.gravity = 2;
        }
        
        switch (this.direction) {
            case 0:
                this.sprite.y += this.gravity * gameSpeed;
                break;
            case 1:
                this.sprite.x += this.gravity * gameSpeed;
                break;
            case 2:
                this.sprite.y -= this.gravity * gameSpeed;
                break;
            case 3:
                this.sprite.x -= this.gravity * gameSpeed;
                break;
        }
    }
    else {
        this.gravity = 0;
    }
};