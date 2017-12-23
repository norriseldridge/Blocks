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
    
    this.sprite.rotation += 0.01;
    
    var dist = distance(
        {x: player.sprite.x,
         y: player.sprite.y}, 
        {x: this.sprite.x, 
         y: this.sprite.y});
    if (dist < 20) {
        this.active = true;
        
        this.sprite.alpha = 0.5;
        
        if (this.target != undefined) {
            this.target.alpha = 0;
            this.target.collisionEnabled = false;
        }
    }
};