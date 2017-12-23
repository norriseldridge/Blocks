var MenuState = new State();
MenuState.Initialize = function () {
    canvas.classList.add('menued'); // blur
    music.volume = 0;
    music.play();
    music.onended = function () {
        this.play();
    };
};

MenuState.Update = function () {
    // draw main menu
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    DrawText(gameName, canvas.width / 2, canvas.height / 2, 100, 'white');
    DrawText("press spacebar to play", canvas.width / 2, canvas.height / 2 + 50, 50, 'white');
    
    // fade in music
    if (music.volume < 0.9) {
        music.volume += 0.001;
    }
    else {
        music.volume = 0.9;
    }
    
    // accept input
    if (input[" "]) {
        canvas.classList.remove('menued'); // unblur
        canvas.classList.add('stopped');
        Machine.SetState(MainState);
    }
};

MenuState.CleanUp = function () {
    canvas.classList.remove('stopped');
    music.volume = 0.9;
};