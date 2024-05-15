const Plateau = require('../models/plateau');

var MarsRoverService = {
    handleInstructions: function(instructions) {
        const lines = instructions.split('\n');
        const coordinates = lines[0].split(" ");
        const plateau = new Plateau(Number(coordinates[0]), Number(coordinates[1]));

        for (let i = 1; i < lines.length - 1; i += 2) {
            if(lines[i].length === 0){
                // End of the file
                break;
            }
            const roverCoordinates = lines[i].split(" ");
            plateau.addRover(Number(roverCoordinates[0]), Number(roverCoordinates[1]), roverCoordinates[2]);

            const roverInstructions = lines[i+1].split('');
            plateau.executeRoverInstructions(roverInstructions);
        }

        const result = [];
        for (const rover of plateau.rovers){
            result.push(rover.getPosition());
        }
        return result;
    }
}

module.exports = MarsRoverService;
