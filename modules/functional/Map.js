import { Example } from './../Example'
import { cars } from './../data/cars'

/* Define Dataset */
var data = cars;

/* Main Function */
function func() {
	 /*
	 * Non-mutating
	 * Accepts a callback(currentVal, i, array)
	 * Iterates over each element and returns custom value
	 * */
	var carStrings = data.map(function(obj) {
		return 'This is a ' + obj.name + ' from ' + obj.year
	});
	return carStrings;
}

/* New Instance */
var Map = new Example(func, data);

export { Map };