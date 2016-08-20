console.log("This is the main.js file.");

// GO to the Sedan-Augmented and Sedan files for Sedan functions

console.log("Sedan IIFE: ", Sedan);
console.log("Sedan Color: ", Sedan.getColor());
console.log("Sedan Type: ", Sedan.getType());


// This comes from the Augmented file:
console.log("Sedan set Occupancy: ", Sedan.setOccupancy(9)); // this returns undefined because we didn't set a return in the Augmented file
console.log("Sedan get Occupancy: ", Sedan.getOccupancy());