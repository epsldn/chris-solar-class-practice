const StellarObject = require("./stellar-object");

class Planet extends StellarObject {
    constructor(name, age, mass, habitability) {
        super(name, age, mass);
        this.habitability = habitability;
        this.moons = [];

        if (habitability === true) {
            this.astronauts = [];
        }
    }

    // recruitAstronaut() {

    // }

    // buildSpaceship() {

    // }
}

module.exports = Planet;
