/* Imports */
import { Filter } from './functional/Filter';
import { Map } from './functional/Map';
import { Reduce } from './functional/Reduce';

var exampleJS = {
	'Map': Map,
	'Filter': Filter,
	'Reduce': Reduce
};

var exampleText = {
	'Intro': 'This is a running collection of marginalia related to the book Eloquent Javascript (2nd Edition) by Marijn Haverbeke. It was built with the intent of clarifying and solidifying some of the more interesting and/or obscure elements of the Javascript language.',
	'NaN': 'something about this thing here.... '
};


$(document).ready(function() {

	var sidebarLink = $('.sidebar a'),
		consoleButtton = $('.console'),
		ex;

	sidebarLink.click(function() {
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

		if(type == 'js') {
			ex = exampleJS[id];
			title.text(name);
			desc.text(ex.description);
			dataCode.text('var data = ' + ex.dataFormatted());
			mainCode.text(ex.formatted);
			resultCode.text(ex.resultFormatted());
			example.show();
			for(var i = 0; i < 3; i++) {
				Prism.highlightElement($('.language-javascript')[i]);
			}
		} else {
			example.hide();
			ex = exampleText[id];
			title.text(name);
			desc.text(ex);
		}
	});

	consoleButtton.click(function() {
		ex.console();
	});

	$('.toggle, .overlay').click(function() {
		var _ = $(this);
	    _.parent()
			.toggleClass('hidden');
		if(_.hasClass('overlay')) {
			_.toggleClass('show');
		} else {
			_.next().toggleClass('show');
		}
	});



});