import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [
    ':ember-tron',
    'isLoading:ember-tron-active'
  ],

  attributeBindings: [
    'style'
  ],

  style: Ember.computed('_progress', function() {
    return "width:" + this.get('_progress') + '%';
  }),

  _progress: 0,
  _isLoadingTimer: null,
  _progressTimer: null,
  progress: Ember.computed(function(key, value) {
     var component = this;

    // we can likely improve this, but it is abit tricky to coordinate
    // concurrent work and the css animation
    if (arguments.length > 1) {
      if (value === 100) {
        Ember.run.cancel(component._isLoadingTimer);
        Ember.run.cancel(component._progressTimer);

        component._isLoadingTimer = Ember.run.later(function() {
          component.set('isLoading', false);
        }, 500);

        component._progressTimer = Ember.run.later(function(){
          component.set('_progress', 0);
        }, 800);

      } else if (value) {
        component.set('isLoading', true);
      }

      if (component._progress === 0) {
        component.set('_progress', 0);
        Ember.run.next(function() {
          component.set('_progress', value);
        });
      } else {
        component.set('_progress', value);
      }
    }
  })
});
