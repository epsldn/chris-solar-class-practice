const Astronaut = require("./astronaut");
const StellarObject = require("./stellar-object");
const SpacetimeError = require('../class/spacetime-error.js');
const SpaceShip = require("./spaceship");

class Planet extends StellarObject {
    constructor(name, age, mass, habitability) {
        super(name, age, mass);
        this.habitability = habitability;
        this.moons = [];

        if (habitability === true) {
            this.astronauts = [];
        }
    }

    recruitAstronaut(name, age, nationality, expertise) {
        let recruit = new Astronaut(name, age, nationality, expertise);
        if (this.habitability) this.astronauts.push(recruit);
        return recruit
    }

    buildSpaceship(astronaut, shipName, nationality) {
        if (this.astronauts.includes(astronaut)) {
            astronaut.spaceship = new SpaceShip(shipName, nationality);
            astronaut.spaceship.astronaut = astronaut;
            return astronaut.spaceship;
        } else {
            throw new SpacetimeError("Cannot build spaceship for unauthorized astronaut");
        }
    }
}

let earth = new Planet(('Earth', 4.5, .0000003, true))
let buzz = earth.recruitAstronaut('Buzz Aldrin', 36, 'USA', 'mechanical engineering');
let ivan = earth.recruitAstronaut('Ivan Smirnoff', 42, 'USSR', 'drinking vodka');
module.exports = Planet;
