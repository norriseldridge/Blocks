var projectiles = [];

function Projectile(spriteData, vel) {
    this.sprite = new Sprite(spriteData);
    this.vel = vel;
    RegisterSpriteToHandler(this.sprite);
}

Projectile.prototype.Update = function () {
    this.sprite.x += this.vel.x;
    this.sprite.y += this.vel.y;
}

function CreateProjectile(sprite, vel) {
    projectiles.unshift(new Projectile(sprite, vel));
}

function ClearProjectiles() {
    projectiles.forEach(function (proj) {
        RemoveSpriteFromHandler(proj.sprite);
    });
    projectiles = [];
}

function UpdateProjectiles() {
    projectiles.forEach(function (projectile) {
        projectile.Update();
    });
}