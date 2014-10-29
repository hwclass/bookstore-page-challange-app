/*Vue framework imported*/
var Vue = require('vue');

module.exports = {
  className: 'navbar navbar-inverse navbar-fixed-top',
  template: require('./template.html')
}

setTimeout(function() {
	
	module.exports = {

		navbar : new Vue({
	    el: 'header',
	    methods : {},
	    computed : {},
	    data: {
	        test: 'takinardi',
	        menuItems : [
	        	{text : 'Home', link : '#home', className : 'active'},
	        	{text : 'About', link : '#about', className : ''},
	        	{text : 'Contact', link : '#contact', className : ''}
	        ],
	        containerContent : {
	        	h1 : 'Bootstrap starter template',
	        	p : 'Use this document as a way to quickly start any new project. All you get is this text and a mostly barebones HTML document.'
	        },
	        currentView : 'main',
	        book : require('data')
	    }
		})

	}

}, 2000);
