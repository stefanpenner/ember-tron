import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberTronENV.locationType,
  loadingProgress: 0,
  _doTransition: function() {
    var router = this;
    router.set('loadingProgress', (Math.random() * 40 + 40));
    return this._super.apply(this, arguments).promise.finally(function() {
      router.set('loadingProgress', 100);
    });
  }
});

Router.map(function() {
  this.route('user');
});

export default Router;
