import Ember from 'ember';

export default Ember.Controller.extend({
  progress: Ember.computed.readOnly('progressService.progress')
});
