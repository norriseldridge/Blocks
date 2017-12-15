function Sprite(spriteData) {
    this.img = new Image();
    this.img.src = spriteData.img;
    this.x = spriteData.x;
    this.y = spriteData.y;
    this.width = spriteData.width;
    this.height = spriteData.height;
    
    // defaulted
    this.offset = {
        x: -spriteData.width / 2,
        y: -spriteData.height / 2
    };
    
    // optional values
    this.rotation = (spriteData.rotation == undefined) ? 0 : spriteData.rotation;
    this.alpha = (spriteData.alpha == undefined) ? 1 : spriteData.alpha;
    this.zIndex = (spriteData.zIndex == undefined) ? 0 : spriteData.zIndex;
}
Sprite.prototype.Draw = function () {
    ctx.save();
    // position
    ctx.translate(this.x - Camera.x, this.y - Camera.y);
    
    // alpha
    ctx.globalAlpha = this.alpha;
    
    // rotation
    ctx.rotate(this.rotation);
    
    // do the draw
    ctx.drawImage(this.img, this.offset.x, this.offset.y, this.width, this.height);
    ctx.restore();
};


var sprites = [];
function RegisterSpriteToHandler(sprite) {
    if (sprites.length == 0) {
        sprites.push(sprite);
    }
    else {
        for (var i = 0; i < sprites.length; ++i) {
            var temp = sprites[i];
            if (sprite.zIndex <= temp.zIndex) {
                sprites.unshift(sprite);
                return; // push successful
            }
        }
        
        // default, this is the new last
        sprites.push(sprite);
    }
}

function RemoveSpriteFromHandler(sprite) {
    var index = sprites.indexOf(sprite);
    
    if (index >= 0) {
        sprites.splice(index, 1);
    }
}

function GetAllSpritesExcluding(sprite) {
    var copy = sprites.slice();
    
    var index = sprites.indexOf(sprite);
    if (index >= 0) {
        copy.splice(index, 1);
    }
    
    return copy;
}

function RemoveAllSprites() {
    sprites = [];
}

function CheckCollision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.width &&
          rect1.x + rect1.width > rect2.x &&
          rect1.y < rect2.y + rect2.height &&
          rect1.height + rect1.y > rect2.y) {
        return true; 
    }
    else {
        return false;
    }
}

function GetCollisionNormal(rect1, rect2) {
    var dx = rect1.x - rect2.x;
    var dy = rect1.y - rect2.y;
    
    if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) {
            return {
                x: 1,
                y: 0
            };
        }
        else {
            return {
                x: -1,
                y: 0
            };
        }
    }
    else {
        if (dy > 0) {
            return {
                x: 0,
                y: 1
            };
        }
        else {
            return {
                x: 0,
                y: -1
            };
        }
    }
}

function DrawSprites() {
    sprites.forEach(function (sprite) {
        sprite.Draw();
    });
}
