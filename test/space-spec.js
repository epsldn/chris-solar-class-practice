const chai = require('chai');
const expect = chai.expect;

const StellarObject = require('../class/stellar-object.js');
const Galaxy = require('../class/galaxy.js');

// const Star = require('../class/star');
// const Supergiant = require('../class/supergiant.js');

const Planet = require('../class/planet.js');
const Moon = require('../class/moon.js');

const Astronaut = require('../class/astronaut.js');
// const Spaceship = require('../class/spaceship.js');

// const SpacetimeError = require('../class/spacetime-error.js');



describe('StellarObject', () => {

    it('should set name, age (in billions of years), and solar mass (in millions of units) properties', () => {
        let omegaCentauri = new StellarObject('Omega Centauri', 11.5, 4);

        expect(omegaCentauri.name).to.equal('Omega Centauri');
        expect(omegaCentauri.age).to.equal(11.5);
        expect(omegaCentauri.mass).to.equal(4);
    })
})

describe('Galaxy', () => {

    let milkyWay;

    beforeEach(() => {
        milkyWay = new Galaxy('Milky way', 13, 154000, 'spiral', []);
    })

    it('should be a subclass of StellarObject', () => {
        expect(milkyWay instanceof StellarObject).to.be.true;
    })

    it('should have a galaxy type', () => {
        expect(milkyWay.type).to.equal('spiral');
    })

    it('should have an array of stars', () => {
        expect(milkyWay.stars).to.exist;
    })
})

// describe('Star', () => {

//     let milkyWay;
//     let sol;
//     let earth;

//     beforeEach(() => {
//         milkyWay = new Galaxy('Milky way', 13, 154000, 'spiral', []);
//         sol = new Star('Sol', 4.6, 1, milkyWay, []);
//         earth = new Planet('Earth', 4.5, .0000003, true);
//     })

//     it('should be a subclass of StellarObject', () => {
//         expect(sol instanceof StellarObject).to.be.true;
//     })

//     it('should have a galaxy it exists in', () => {
//         expect(sol.galaxy).to.equal(milkyWay);
//     })

//     it('should add itself to its galaxy\'s stars array upon instantiation', () => {
//         expect(milkyWay.stars.includes(sol)).to.be.true;
//     })

//     it('should have an array of planets', () => {
//         expect(sol.planets).to.exist;
//     })

//     describe('addPlanet()', () => {
//         context('if instance of Planet class', () => {
//             it('should be able to add a planet', () => {
//                 expect(sol.planets.length).to.equal(0);
//                 sol.addPlanet(earth);
//                 expect(sol.planets.includes(earth)).to.be.true;
//                 expect(earth.star).to.equal(sol);
//             })
//         })
//         context('if not instance of Planet class', () => {
//             it('should throw an error', () => {
//                 let moon = 'Moon';
//                 try {
//                     sol.addPlanet(moon);
//                     expect('SHOULD NOT GET HERE').to.equal(false);
//                 } catch (error) {
//                     expect(error.message).to.equal('Must be a planet');
//                 }
//             })
//         })
//     })

//     describe('printPlanets()', () => {
//         context('if it has planets', () => {
//             it('should print out a string of all the names of the planets in its orbit', () => {
//                 let mercury = new Planet('Mercury', 4.5, 0.056, false);
//                 let venus = new Planet('Venus', 4.5, 0.815, false);
//                 sol.addPlanet(mercury);
//                 sol.addPlanet(venus);
//                 sol.addPlanet(earth);
//                 expect(sol.printPlanets()).to.equal(`The planets orbiting Sol are Mercury and Venus and Earth`);
//             })
//         })
//         context('if it does not have planets', () => {
//             it('should print a string saying it is lonely', () => {
//                 let betelgeuse = new Star('Betelgeuse', 0.1, 20, milkyWay, []);
//                 expect(betelgeuse.printPlanets()).to.equal('I am a lonely star without any planets!');
//             })
//         })
//     })
// })

// describe('Supergiant', () => {

//     let milkyWay;
//     let betelgeuse;

//     beforeEach(() => {
//         milkyWay = new Galaxy('Milky way', 13, 154000, 'spiral', []);
//         betelgeuse = new Supergiant('Betelgeuse', 0.1, 20, milkyWay, []);
//     })

//     it('should be a subclass of Star', () => {
//         expect(betelgeuse instanceof Star).to.be.true;
//     })

//     it('should be able to go supernova', () => {
//         let planetA = 'planetA', planetB = 'planetB';
//         betelgeuse.planets.push(planetA, planetB);
//         betelgeuse.supernova();
//         expect(betelgeuse.supernova()).to.equal('Betelgeuse explodes in a cosmically dazzling show of light!');
//         expect(betelgeuse.planets.length).to.equal(0);
//     })
// })

describe('Planet', () => {

    let earth;
    let moon;

    beforeEach(() => {
        earth = new Planet('Earth', 4.5, .0000003, true);
        moon = new Moon('Moon', 4.45, .0123, earth);
    })

    it('should be a subclass of StellarObject', () => {
        expect(earth instanceof StellarObject).to.be.true;
    })


    it('should have a property indicating if the planet is habitable', () => {
        expect(earth.habitability).to.be.true;
    })

    it('should have an array of moons', () => {
        expect(earth.moons).to.exist;
    })

    it('should have an array of astronauts if the planet is habitable', () => {
        let mars = new Planet('Mars', 4.5, .00000004, false)
        expect(mars.astronauts).not.to.exist;
        expect(earth.astronauts).to.deep.equal([]);
    })

    describe('recruitAstronaut()', () => {
        it('should recruit a new astronaut and return him/her from the function', () => {
            expect(earth.astronauts).to.deep.equal([]);
            let buzz = earth.recruitAstronaut('Buzz Aldrin', 36, 'USA', 'mechanical engineering');
            expect(earth.astronauts.length).to.equal(1);
            expect(buzz instanceof Astronaut).to.be.true;
        })
    })

    describe('buildSpaceship()', () => {
        context('if astronaut has been properly recruited', () => {
            it('should be able to build a new Spaceship and return it from the function', () => {
                let buzz = earth.recruitAstronaut('Buzz Aldrin', 36, 'USA', 'mechanical engineering');
                expect(buzz.spaceship).to.equal(null);
                earth.buildSpaceship(buzz, 'Icarus', 'USA');
                expect(buzz.spaceship.shipName).to.equal('Icarus');
                expect(buzz.spaceship.astronaut.name).to.equal('Buzz Aldrin');
            })
        })
        context('if astronaut has not been properly recruited', () => {
            it('should throw an error', () => {
                let ivan = new Astronaut('Ivan Smirnoff', 42, 'USSR', 'drinking vodka');
                try {
                    earth.buildSpaceship(ivan, 'Red Glory', 'USSR');
                    expect('SHOULD NOT GET HERE').to.equal(false);
                } catch (error) {
                    expect(error.message).to.equal('Cannot build spaceship for unauthorized astronaut');
                }
            })
        })
    })
})

describe('Moon', () => {
    let earth;
    let moon;

    beforeEach(() => {
        earth = new Planet('Earth', 4.5, .0000003, true);
        moon = new Moon('Moon', 4.45, .0123, earth);
    })

    it('should be a subclass of StellarObject', () => {
        expect(moon instanceof StellarObject).to.be.true;
    })

    it('should add itself to its planet\'s moons array upon instantiation', () => {
        expect(earth.moons.includes(moon)).to.be.true;
    })

    it('should have a colonizationStatus property that defaults to false', () => {
        expect(moon.colonizationStatus).to.be.false;
    })

    it('should contain an array of nations that have successfully sent astronauts to it', () => {
        let buzz = earth.recruitAstronaut('Buzz Aldrin', 36, 'USA', 'mechanical engineering');
        let ivan = earth.recruitAstronaut('Ivan Smirnoff', 42, 'USSR', 'drinking vodka');
        earth.buildSpaceship(buzz, 'Voyager', 'USA');
        earth.buildSpaceship(ivan, 'Red Glory', 'USSR');
        buzz.colonizeMoon(moon);
        ivan.colonizeMoon(moon);
        expect(Moon.flagsPlanted).to.deep.equal(['USA', 'USSR']);
    })
})

describe('Astronaut', () => {
    let buzz;
    let earth;
    let moon;

    beforeEach(() => {
        earth = new Planet('Earth', 4.5, .0000003, true);
        moon = new Moon('Moon', 4.45, .0123, earth);
        buzz = earth.recruitAstronaut('Buzz Aldrin', 36, 'USA', 'mechanical engineering');
    })

    it('should have name, age, nationality, and expertise properties', () => {
        expect(buzz.name).to.equal('Buzz Aldrin');
        expect(buzz.age).to.equal(36);
        expect(buzz.nationality).to.equal('USA');
        expect(buzz.expertise).to.equal('mechanical engineering')
    })

    it('should have a spaceship property that defaults to null', () => {
        expect(buzz.spaceship).to.equal(null);
    })

    it('should be able to start a colony on a nearby moon if they have a spaceship', () => {
        earth.buildSpaceship(buzz, 'Voyager', 'USA');
        expect(buzz.colonizeMoon(moon)).to.equal('Buzz Aldrin begins a lunar colony and is now a Moonman!');
        expect(buzz.nationality).to.equal('Moonman');
        expect(moon.colonizationStatus).to.be.true;
    })

    describe('astronautLogs', () => {
        it('should keep track of every astronaut recruited and their nationality', () => {
            let buzz = earth.recruitAstronaut('Buzz Aldrin', 36, 'USA', 'mechanical engineering');
            let ivan = earth.recruitAstronaut('Ivan Smirnoff', 42, 'USSR', 'drinking vodka');
            expect(Astronaut.astronautLogs).to.deep.equal({ 'Buzz Aldrin': 'USA', 'Ivan Smirnoff': 'USSR' });
        })
    })

    describe('ventureForth()', () => {
        context('if their ship has lightspeed capability', () => {
            it('should boldly go where no one has gone before', () => {
                earth.buildSpaceship(buzz, 'Voyager', 'USA');
                buzz.colonizeMoon(moon);
                buzz.spaceship.detectAlienTechnology();
                expect(buzz.ventureForth()).to.equal('Buzz Aldrin is the first human to explore deep space!');
            })
        })
        context('if their ship does NOT have lightspeed capability', () => {
            it('should throw a Spacetime Error', () => {
                earth.buildSpaceship(buzz, 'Voyager', 'USA');
                buzz.spaceship.lightspeedCapability = false;
                try {
                    buzz.ventureForth();
                    expect('SHOULD NOT GET HERE').to.equal(false);
                } catch (error) {
                    expect(error instanceof SpacetimeError).to.equal(true);
                    expect(error.message).to.equal("Impossible! At least without some extraterrestrial technology...");
                }
            })
        })
    })
})

// describe('Spaceship', () => {
//     let earth = new Planet('Earth', 4.5, .0000003, true);
//     let moon = new Moon('Moon', 4.45, .0123, earth);

//     it('should not have an associated astronaut or lightspeed capability by default', () => {
//         let ship = new Spaceship('Titanic', 'Germany');
//         expect(ship.astronaut).to.equal(null);
//         expect(ship.lightspeedCapability).to.be.false;
//     })

//     it('should detect alien technology if it has been flown to the moon', () => {
//         let buzz = earth.recruitAstronaut('Buzz Aldrin', 36, 'USA', 'mechanical engineering');
//         earth.buildSpaceship(buzz, 'Voyager', 'USA');
//         buzz.colonizeMoon(moon);
//         expect(buzz.spaceship.detectAlienTechnology()).to.equal(`Voyager has detected alien technology on the dark side of the moon!`);
//         expect(buzz.spaceship.lightspeedCapability).to.be.true;
//     })
// })
