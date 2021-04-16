class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    // climb "up" the tree (using iteration), counting nodes, until no creator is found
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal);
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let currentVampire1 = this;
    let currentVampire2 = vampire;

    while (currentVampire1) {
      while (currentVampire2) {
        if (currentVampire1 === currentVampire2) {
          return currentVampire1;
        }
        currentVampire2 = currentVampire2.creator;
      }
      currentVampire2 = vampire;
      currentVampire1 = currentVampire1.creator;
    }

    return;
  }
}

// Create new nodes/vampires
const original = new Vampire("Original", 2000);
const ansel    = new Vampire("ansel", 2010);
const bart     = new Vampire("bart", 2010);
const elgort   = new Vampire("elgort", 2015);
const sarah    = new Vampire("sarah", 2015);
const andrew   = new Vampire("andrew", 2020);

// Link offsptring vampires to their creator
original.addOffspring(ansel);
original.addOffspring(bart);

ansel.addOffspring(elgort);
ansel.addOffspring(sarah);

elgort.addOffspring(andrew);

// Tests
// console.log("------------------------------------------------------");
// console.log("Ansel's creator: ", ansel.creator);
// console.log("Number of offspring: ", ansel.numberOfOffspring);

module.exports = Vampire;
