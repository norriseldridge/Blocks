function OnLoad() {
    // get my html5 specific variables
    canvas = document.getElementById("gc");
    ctx = canvas.getContext("2d");
    
    // set the current state
    Machine.SetState(MainState);
    
    // start the main game loop
    setInterval(Sync, fps / 1000);
}

function Sync() {
    // main loop here
    Machine.Update();
}