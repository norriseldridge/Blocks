function OnLoad() {
    // get my html5 specific variables
    canvas = document.getElementById("gc");
    ctx = canvas.getContext("2d");
    canvas.addEventListener("touchstart", handleTouch, false);
    canvas.addEventListener("touchend", handleTouch, false);
    
    // set the current state
    Machine.SetState(MainState);
    
    // start the main game loop
    setInterval(Sync, fps / 1000);
}

var startPos = {x: 0, y: 0};
function handleTouch(evt) {
    switch (evt.type) {
        case "touchstart":
            startPos.x = evt.changedTouches[0].clientX;
            startPos.y = evt.changedTouches[0].clientY;
            break;
            
        case "touchend":
            var rect = canvas.getBoundingClientRect();
            if (startPos.x - rect.left > canvas.width / 2) {
                if (startPos.y < evt.changedTouches[0].clientY) {
                    RotateWorld("right");
                }

                if (startPos.y > evt.changedTouches[0].clientY) {
                    RotateWorld("left");
                }
            }
            else if (startPos.x - rect.left < canvas.width / 2) {
                if (startPos.y < evt.changedTouches[0].clientY) {
                    RotateWorld("left");
                }

                if (startPos.y > evt.changedTouches[0].clientY) {
                    RotateWorld("right");
                }
            }
            break;
    }
}

function Sync() {
    // main loop here
    Machine.Update();
}