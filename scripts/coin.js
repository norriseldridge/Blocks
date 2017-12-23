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
}

Coin.prototype.Update = function () {
    this.sprite.rotation += 0.01;
}