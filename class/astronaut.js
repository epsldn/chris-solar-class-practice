const Moon = require("./moon");
const SpacetimeError = require("./spacetime-error");

class Astronaut {
    constructor(name, age, nationality, expertise) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.expertise = expertise;
        this.spaceship = null;
        Astronaut.astronautLogs[this.name] = this.nationality;
    }

    static astronautLogs = {};

    colonizeMoon(moon) {
        if (this.spaceship !== null) {
            moon.colonizationStatus = true;
            Moon.flagsPlanted.push(this.nationality);
            this.nationality = "Moonman";
            return `${this.name} begins a lunar colony and is now a Moonman!`
        }
    }

    ventureForth() {
        if (this.spaceship.lightspeedCapability === true){
            return "Buzz Aldrin is the first human to explore deep space!";
        } else{
            throw new SpacetimeError ("Impossible! At least without some extraterrestrial technology...");
        }
    }
}
module.exports = Astronaut;
