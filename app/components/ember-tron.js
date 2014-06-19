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
  progressService: null, // set by injection
  // allow progress to be overridden from the template, otherwise default to
  // the progressService
  progress: Ember.computed.oneWay('progressService.progress'),
  progressDidChange: function() {
    var component = this;
    var progress = this.get('progress');

    if (progress === 100) {
      Ember.run.cancel(component._isLoadingTimer);
      Ember.run.cancel(component._progressTimer);

      component._isLoadingTimer = Ember.run.later(function() {
        component.set('isLoading', false);
      }, 500);

      component._progressTimer = Ember.run.later(function(){
        component.set('_progress', 0);
      }, 800);

    } else if (progress) {
      component.set('isLoading', true);
    }

    if (component._progress === 0) {
      component.set('_progress', 0);
      // ensure we start from 0
      Ember.run.next(function() {
        component.set('_progress', progress);
      });
    } else if (component._progress > progress) {
      debugger;
      // do nothing
    } else {
      component.set('_progress', progress);
    }

  }.observes('progressService.progress').on('init')
});
