var MenuState = new State();
MenuState.Initialize = function () {
    canvas.classList.add('menued'); // blur
};

MenuState.Update = function () {
    // draw main menu
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    DrawText(gameName, canvas.width / 2, canvas.height / 2, 100, 'black');
    DrawText("press spacebar to play", canvas.width / 2, canvas.height / 2 + 50, 50, 'black');
    
    // accept input
    if (input[" "]) {
        canvas.classList.remove('menued'); // unblur
        canvas.classList.add('stopped');
        Machine.SetState(MainState);
    }
};

MenuState.CleanUp = function () {
    canvas.classList.remove('stopped');
};