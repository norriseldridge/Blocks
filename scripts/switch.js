function Switch(x, y) {
    this.sprite = new Sprite({
        img: "assets/images/switch.png",
        x: x,
        y: y,
        width: 25,
        height: 25
    });
    this.active = false;
    this.target = undefined;
}

Switch.prototype.Update = function() {
    if (this.active)
        return;
    
    if (distance(player.sprite.x, this.sprite.x, player.sprite.y, this.sprite.y) < 20) {
        this.active = true;
        
        this.sprite.width *= -1; // flip the switch visually
        
        if (this.target != undefined) {
            this.target.alpha = 0;
            this.target.collisionEnabled = false;
        }
    }
};