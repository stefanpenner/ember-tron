export default {
  name: 'ember-tron',

  initialize: function(container, app) {
    app.inject('router:main',            'progressService', 'service:ember-tron');
    app.inject('component:ember-tron',   'progressService', 'service:ember-tron');
    app.inject('controller:application', 'progressService', 'service:ember-tron');
  }
};
