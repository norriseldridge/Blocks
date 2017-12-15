/***

Defining a State

NOTE: States will be define in their own js scripts.

***/
// what is a state?
function State() { }
State.prototype.Initialize = function () {};
State.prototype.CleanUp = function () {};
State.prototype.Update = function () {};


/***

Defining the StateMachine

***/
// what is the state machine?
function StateMachine() {
    this.currentState = undefined;
}
StateMachine.prototype.SetState = function (newState) {
    if (newState == undefined) {
        alert("Tried setting StateMachine to an undefined state!");
        return;
    }
    
    // clean up the current state before setting a new one
    if (this.currentState != undefined) {
        this.currentState.CleanUp();
    }
    
    // set the state
    this.currentState = newState;
    
    // initialize it
    this.currentState.Initialize();
};

StateMachine.prototype.Update = function () {
    if (this.currentState != undefined) {
        this.currentState.Update();
    }
    else {
        console.log("There is no current state!");
    }
};

// singleton
var Machine = new StateMachine();