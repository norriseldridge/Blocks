var SplashState = new State();
SplashState.Initialize = function () {
    this.splashImage = new Image();
    this.splashImage.src = "assets/images/hackingtons_splash.jpg";
    canvas.classList.remove('menued');
    this.alpha = 0;
    this.time = 0;
};

SplashState.Update = function () {
    // draw nothing
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // fade in splash logo
    if (this.time > 100) {
        ctx.save();
        if (this.time < 350) {
            if (this.alpha < 1) {
                this.alpha += 0.005;
            }
        } else if (this.time > 450) {
            if (this.alpha > 0) {
                this.alpha -= 0.004;
            }
            else {
                this.alpha = 0;
            }
        }
        ctx.globalAlpha = this.alpha;
        ctx.drawImage(this.splashImage, 0, 0, canvas.width, canvas.height);
        ctx.restore();
    }
    
    // move on
    if (this.time > 1200) {
        Machine.SetState(MenuState);
    }
    this.time++;
};

SplashState.CleanUp = function () {
    canvas.classList.add('menued'); // blur
};