var MenuState = new State();
MenuState.Initialize = function () {
    
};

MenuState.Update = function () {
    // draw main menu
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    DrawText(gameName, canvas.width / 2, canvas.height / 2, 100);
    DrawText("press spacebar to play", canvas.width / 2, canvas.height / 2 + 50, 20);
    
    // accept input
    if (input[" "]) {
        Machine.SetState(MainState);
    }
};

MenuState.CleanUp = function () {
    
};