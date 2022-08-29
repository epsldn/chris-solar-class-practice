const StellarObject = require("./stellar-object");

class Galaxy extends StellarObject {
    constructor(name, age, mass, type, stars) {
        super(name, age, mass);
        this.type = type;
        this.stars = stars;
    }
}

module.exports = Galaxy;
