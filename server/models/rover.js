class Rover {
    constructor(x, y, direction) {
        this._x = x;
        this._y = y;
        this._direction = direction;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get direction() {
        return this._direction;
    }

    move() {
        switch (this._direction){
            case "N":
                this._y += 1;
                break;
            case "S":
                this._y -= 1;
                break;
            case "E":
                this._x += 1;
                break;
            case "W":
                this._x -= 1;
                break;
        }
    }

    changeDirection(instruction) {
        switch (this._direction){
            case "N":
                switch (instruction){
                    case "R":
                        this._direction = "E";
                        break;
                    case "L":
                        this._direction = "W";
                        break;
                }
                break;
            case "S":
                switch (instruction){
                    case "R":
                        this._direction = "W";
                        break;
                    case "L":
                        this._direction = "E";
                        break;
                }
                break;
            case "E":
                switch (instruction){
                    case "R":
                        this._direction = "S";
                        break;
                    case "L":
                        this._direction = "N";
                        break;
                }
                break;
            case "W":
                switch (instruction){
                    case "R":
                        this._direction = "N";
                        break;
                    case "L":
                        this._direction = "S";
                        break;
                }
                break;
        }
    }

    getPosition() {
        const str = "";
        return str.concat(this._x, " ", this._y, " ", this._direction);
    }
}

module.exports = Rover;