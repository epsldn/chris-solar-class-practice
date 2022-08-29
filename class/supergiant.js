const Star = require("./star");

class Supergiant extends Star {
    supernova() {
        this.planets = [];
        return "Betelgeuse explodes in a cosmically dazzling show of light!";
    }
}
module.exports = Supergiant;
