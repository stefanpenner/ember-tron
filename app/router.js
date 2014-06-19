import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberTronENV.locationType,
  loadingProgress: 0,
  _doTransition: function() {
    var router = this;
    var progressService = this.get('progressService');
    progressService.set('progress', (Math.random() * 40 + 40));
    return this._super.apply(this, arguments).promise.finally(function() {
      progressService.set('progress', 100);
      console.log(100);
    });
  }
});

Router.map(function() {
  this.route('user');
});

export default Router;
