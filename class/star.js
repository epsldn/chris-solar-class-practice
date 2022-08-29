const Planet = require("./planet");
const SpacetimeError = require("./spacetime-error");
const StellarObject = require("./stellar-object");

class Star extends StellarObject {
    constructor(name, age, mass, galaxy, planets) {
        super(name, age, mass);
        this.galaxy = galaxy;
        this.planets = planets;
        galaxy.stars.push(this);
    }

    addPlanet(body) {
        if (body instanceof Planet) {
            this.planets.push(body);
            body.star = this;
        } else {
            throw new SpacetimeError("Must be a planet")
        }
    }

    printPlanets(){
        if(this.planets.length > 0){
            return `The planets orbiting Sol are ${this.planets.map(planet => planet.name).join(" and ")}`;
        } else {
            return "I am a lonely star without any planets!"
        }
    }
}

module.exports = Star;
