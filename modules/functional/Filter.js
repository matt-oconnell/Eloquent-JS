import { Example } from './../Example'
import { cars } from './../data/cars'

/* Define Dataset */
var data = cars;

/* Main Function */
function func() {
	 /*
	 * Accepts a callback(currentVal, i, array)
	 * Return true from callback to accept, false to reject
	 * Not a mutator
	 * */
	var newCars = data.filter(function(obj) {
		return obj.year > 2000
	});
	return newCars;
}

var description = "Here is a brief description about the code below: blah blah blah.";

/* New Instance */
var Filter = new Example(func, data, description);

export { Filter };