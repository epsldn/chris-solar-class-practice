class SpacetimeError extends Error{
    constructor(...params){
        super(...params);
        this.name = "SpacetimeError";
        this.message = this.message || "Houston, we have a problem."
    }
}

module.exports = SpacetimeError;
