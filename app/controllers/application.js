import Ember from 'ember';

export default Ember.Controller.extend({
  loadingProgress: Ember.computed.readOnly('target.loadingProgress')
});
