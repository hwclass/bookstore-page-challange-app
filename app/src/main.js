/*Vue framework imported*/
var Vue = require('vue')

/*config component imported*/
var config = require('config');
//var configMain = require('./config/main')

Vue.config(config);

module.exports = new Vue({

    el: 'html'/*,

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
            $get: function () {
                var validDate = this.book.publication_date;
                var seperationList = validDate.split('/');
                var validMonthOfDate = '';
                for (var i = 0, len = config.months.length; i < len; i++) {
                    if (config.months[i][0].indexOf(seperationList[0]) !== -1) {
                        validMonthOfDate = config.months[i][1];
                    }
                }
                return validMonthOfDate + ' ' + seperationList[1].substring(1, 2) + ' ' + seperationList[2];
            },
            // the setter is optional
            $set: function (newValue) {return true;}
        }       
    },

    data: {
        projectTitle: 'Custom vue.js component project structure',
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