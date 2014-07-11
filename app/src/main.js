/*Vue framework imported*/
var Vue = require('vue')

/*config component imported*/
var config = require('config');
Vue.config(config);

new Vue({

    el: 'body'/*,

    directives: {
        flip: require('./directives/flip')
    },

    filters: {
        reverse: require('./filters/reverse')
    }*/,

    components: {
        navbar : require('navbar'),
        main: require('main'),
        footer : require('footer')
    },

    methods : {},

    computed : {
        formattedPublicationDate: {
            // the getter should return the desired value
            $get: function () {
                var validDate = this.book.publication_date;
                return validDate + 'takinardi';
            },
            // the setter is optional
            $set: function (newValue) {
                return true;
            }
        }       
    },

    data: {
        projectTitle: 'The Project',
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
});