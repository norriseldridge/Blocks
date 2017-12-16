function Coin(x, y) {
    this.sprite = new Sprite({
        img: "assets/images/coin.png",
        x: x,
        y: y,
        width: 40,
        height: 40,
        zIndex: 4
    });
    this.active = true;
    this.scaleIn = true;
}

Coin.prototype.Update = function () {
    this.sprite.alpha += this.scaleIn ? -0.01 : 0.01;
    this.sprite.rotation += 0.01;
    
    if (this.sprite.alpha < 0.5) {
        this.scaleIn = false;
    }
    else if (this.sprite.alpha > 0.99) {
        this.scaleIn = true;
    }
}