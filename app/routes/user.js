import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.run.later(resolve, 1000);
    });
  }
});
