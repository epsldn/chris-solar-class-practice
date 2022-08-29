const Planet = require("./planet");
const StellarObject = require("./stellar-object");

class Moon extends StellarObject {
    constructor(name, age, mass, planet) {
        super(name, age, mass);
        planet.moons.push(this);
        this.colonizationStatus = false;
    }

    static flagsPlanted = [];
}

module.exports = Moon;
