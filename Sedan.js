// This is the original Sedan

var Sedan = (function() {    // iife variabiles are typically capitalized for every word (PascalCase)
	var color = "blue";
	var type = "sedan";

	return {
		manufacture_Date: new Date(),
		getColor: function() {
			return color;
		},
		setColor: function(newColor) {
			color = newColor;
		},
		getType: function() {
			return type;
		}
	}
})();