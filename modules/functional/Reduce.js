import { Example } from './../Example'
import { cars } from './../data/cars'

/* Define Dataset */
var data = cars;

/* Main Function */
function func() {
	 /*
	 * Accepts a callback(previousVal, currentVal)
	 * Second Param is initialVal (optional)
	 * Reduces array to one value
	 * */
	var mushedTogether = data.reduce(function(prev, next) {
		return prev += next.name + next.year
	}, '');
	return mushedTogether;
}

/* New Instance */
var Reduce = new Example(func, data);

export { Reduce };