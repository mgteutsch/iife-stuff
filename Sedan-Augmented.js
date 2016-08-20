// This allows us to modify the Sedan

var Sedan = (function(newSedan) {
	var max_occupancy = 6;
	var current_occupancy = 0;

	newSedan.getOccupancy = function(occupancy) {
		if (occupancy <= max_occupancy) {
			current_occupancy = occupancy;
		}
		else {
			throw "Cannot exceed maximum occupancy of " + max_occupancy;
		}
		
		return current_occupancy;
	}

	newSedan.setOccupancy = function(occupancy) {
		current_occupancy = occupancy;
	}

	return newSedan;

})(Sedan || {}); // you need to call the original variable. The or {nothing} helps to catch any errors