const Planet = require("./planet");
const Moon = require("./moon");

class SpaceShip {
    constructor(shipName, nation) {
        this.shipName = shipName;
        this.nation = nation;
        this.astronaut = null;
        this.lightspeedCapability = false;
    }

    detectAlienTechnology() {
        if (this.astronaut.nationality === "Moonman") {
            this.lightspeedCapability = true;
            return "Voyager has detected alien technology on the dark side of the moon!";
        }

    }
}

module.exports = SpaceShip;
