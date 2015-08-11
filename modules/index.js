/* Imports */
import { Filter } from './functional/Filter';
import { Map } from './functional/Map';
import { Reduce } from './functional/Reduce';

var exampleJS = {
	'Map': Map,
	'Filter': Filter,
	'Reduce': Reduce
};

$(document).ready(function() {

	FastClick.attach(document.body);

	var c = $('.content'),
		title = c.find('.title'),
		desc = c.find('.description'),
		dataCode = c.find('.data-code pre'),
		mainCode = c.find('.main-code pre'),
		resultCode = c.find('.result-code pre'),
		example = c.find('.example'),
		sidebarLink = $('.sidebar a'),
		consoleButtton = $('.console'),
		ex;

	desc.html(getTemplate('Intro'));

	sidebarLink.click(function() {
		var _ = $(this),
			id = _.text().replace(/\s/g, ''),
			type = _.attr('type'),
			name = _.text();

		if(type == 'js') {
			var ex = exampleJS[id];
			title.text(name);
			desc.text(ex.description);
			dataCode.text('var data = ' + ex.dataFormatted());
			mainCode.text(ex.formatted);
			resultCode.text(ex.resultFormatted());
			example.show();
			for(var i = 0; i < 3; i++)
				Prism.highlightElement($('.language-javascript')[i]);
		} else {
			example.hide();
			title.text(name);
			var template = getTemplate(id);
			desc.html(template);
			$('pre, code').addClass('language-javascript');
			for(var k = 0; k < $('.language-javascript').length; k++)
				Prism.highlightElement($('.language-javascript')[k]);
		}
		if($('.sidebar').hasClass('show'))
			$('.sidebar, .sidebar-overlay').removeClass('show');
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

	$('.hamburger-nav, .sidebar-overlay').click(function() {
		$('.sidebar, .sidebar-overlay').toggleClass('show');
	});

});

function getTemplate(id) {
	var path = './modules/templates/' + id + '.hbs';
	return JST[path]({});
}