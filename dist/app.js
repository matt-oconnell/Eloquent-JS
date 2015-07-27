(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Example = (function () {
	function Example(func, data, description) {
		_classCallCheck(this, Example);

		this.func = func;
		this.data = data;
		this.description = description || '';
		this.formatted = this.format();
	}

	Example.prototype.format = function format() {
		var s = this.func.toString();
		s = s.substring(this.func.toString().indexOf('{') + 1, s.lastIndexOf('return'));
		var a = s.split('\n');
		a = a.map(function (l) {
			return l.replace(/\t/, '');
		});
		s = a.join('\n');
		return s;
	};

	Example.prototype.dataFormatted = function dataFormatted() {
		return JSON.stringify(this.data, null, 4);
	};

	Example.prototype.resultFormatted = function resultFormatted() {
		return JSON.stringify(this.func(), null, 4);
	};

	Example.prototype.console = (function (_console) {
		function console() {
			return _console.apply(this, arguments);
		}

		console.toString = function () {
			return _console.toString();
		};

		return console;
	})(function () {
		console.log(this.func());
	});

	return Example;
})();

exports.Example = Example;

},{}],2:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var cars = [{ name: 'Honda Accord', year: 2000 }, { name: 'Honda Civic', year: 2010 }, { name: 'Nissan Maxima', year: 1990 }, { name: 'Chevy Corvette', year: 2015 }, { name: 'Ford Mustang', year: 2006 }];

exports.cars = cars;

},{}],3:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _Example = require('./../Example');

var _dataCars = require('./../data/cars');

/* Define Dataset */
var data = _dataCars.cars;

/* Main Function */
function func() {
	/*
 * Accepts a callback(currentVal, i, array)
 * Return true from callback to accept, false to reject
 * Not a mutator
 * */
	var newCars = data.filter(function (obj) {
		return obj.year > 2000;
	});
	return newCars;
}

var description = 'Here is a brief description about the code below: blah blah blah.';

/* New Instance */
var Filter = new _Example.Example(func, data, description);

exports.Filter = Filter;

},{"./../Example":1,"./../data/cars":2}],4:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _Example = require('./../Example');

var _dataCars = require('./../data/cars');

/* Define Dataset */
var data = _dataCars.cars;

/* Main Function */
function func() {
	/*
 * Non-mutating
 * Accepts a callback(currentVal, i, array)
 * Iterates over each element and returns custom value
 * */
	var carStrings = data.map(function (obj) {
		return 'This is a ' + obj.name + ' from ' + obj.year;
	});
	return carStrings;
}

/* New Instance */
var Map = new _Example.Example(func, data);

exports.Map = Map;

},{"./../Example":1,"./../data/cars":2}],5:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _Example = require('./../Example');

var _dataCars = require('./../data/cars');

/* Define Dataset */
var data = _dataCars.cars;

/* Main Function */
function func() {
	/*
 * Accepts a callback(previousVal, currentVal)
 * Second Param is initialVal (optional)
 * Reduces array to one value
 * */
	var mushedTogether = data.reduce(function (prev, next) {
		return prev += next.name + next.year;
	}, '');
	return mushedTogether;
}

/* New Instance */
var Reduce = new _Example.Example(func, data);

exports.Reduce = Reduce;

},{"./../Example":1,"./../data/cars":2}],6:[function(require,module,exports){
/* Imports */
'use strict';

var _functionalFilter = require('./functional/Filter');

var _functionalMap = require('./functional/Map');

var _functionalReduce = require('./functional/Reduce');

var exampleJS = {
	'Map': _functionalMap.Map,
	'Filter': _functionalFilter.Filter,
	'Reduce': _functionalReduce.Reduce
};

var exampleText = {
	'Intro': 'This is a running collection of notes related to the book Eloquent Javascript (2nd Edition) by Marijn Haverbeke. It was built with the intent of clarifying and solidifying some of the more interesting and/or obscure elements of the Javascript language.',
	'NaN': 'something about this thing here.... '
};

$(document).ready(function () {

	var sidebarLink = $('.sidebar a'),
	    consoleButtton = $('.console'),
	    ex;

	sidebarLink.click(function () {
		var _ = $(this),
		    c = $('.content'),
		    id = _.text().replace(/\s/g, ''),
		    type = _.attr('type'),
		    name = _.text(),
		    title = c.find('.title'),
		    desc = c.find('.description'),
		    dataCode = c.find('.data-code pre'),
		    mainCode = c.find('.main-code pre'),
		    resultCode = c.find('.result-code pre'),
		    example = c.find('.example');

		if (type == 'js') {
			ex = exampleJS[id];
			title.text(name);
			desc.text(ex.description);
			dataCode.text('var data = ' + ex.dataFormatted());
			mainCode.text(ex.formatted);
			resultCode.text(ex.resultFormatted());
			example.show();
			for (var i = 0; i < 3; i++) {
				Prism.highlightElement($('.language-javascript')[i]);
			}
		} else {
			example.hide();
			ex = exampleText[id];
			title.text(name);
			desc.text(ex);
		}
		if ($('.sidebar').hasClass('show')) $('.sidebar, .sidebar-overlay').removeClass('show');
	});

	consoleButtton.click(function () {
		ex.console();
	});

	$('.toggle, .overlay').click(function () {
		var _ = $(this);
		_.parent().toggleClass('hidden');
		if (_.hasClass('overlay')) {
			_.toggleClass('show');
		} else {
			_.next().toggleClass('show');
		}
	});

	$('.hamburger-nav, .sidebar-overlay').click(function () {
		$('.sidebar, .sidebar-overlay').toggleClass('show');
	});
});

},{"./functional/Filter":3,"./functional/Map":4,"./functional/Reduce":5}]},{},[1,6,2,3,4,5]);
