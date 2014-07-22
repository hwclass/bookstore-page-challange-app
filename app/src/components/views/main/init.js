/*Vue framework imported*/
var Vue = require('vue')

/*config component imported*/
var config = require('config');
//var configMain = require('./config/main')

Vue.config(config);

new Vue({
  el: '#middle',
  methods : {},
  computed : {},
  data: {
      content : 'This is a test content for the main view.',
      book : require('data')
  }
});