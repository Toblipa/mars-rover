const Rover = require('../models/rover');

class Plateau {
    constructor(xMax, yMax) {
        this._xMax = xMax;
        this._yMax = yMax;
        this._rovers = [];
    }

    get xMax() {
        return this._xMax;
    }

    get yMax() {
        return this._yMax;
    }

    get rovers() {
        return this._rovers;
    }

    addRover(x, y, direction) {
        this._rovers.push(new Rover(x, y, direction));
    }

    executeRoverInstructions(movements) {
        const currentRover = this._rovers[this._rovers.length - 1];
        for (const movement of movements){
            switch (movement){
                case "R":
                case "L":
                    currentRover.changeDirection(movement);
                    break;
                case "M":
                    if(this.checkPossibleMovement(currentRover)){
                        currentRover.move();
                    }
                    else {
                        console.error("Rover number " + this._rovers.length + " has collided");
                        //TODO: error
                    }
                    break;
                default:
                    console.error("Movement error");
                    //TODO: error
            }
        }
    }

    checkPossibleMovement(rover) {
        if(rover.x >= this._xMax && rover.direction === "E"){
            return false;
        }
        if(rover.x <= 0 && rover.direction === "W"){
            return false;
        }
        if(rover.y >= this._yMax && rover.direction === "N"){
            return false;
        }
        if(rover.y <= 0 && rover.direction === "S"){
            return false;
        }
        return true;
    }
}

module.exports = Plateau;