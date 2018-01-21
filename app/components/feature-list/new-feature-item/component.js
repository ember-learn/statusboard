import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,

  actions: {
    toggle() {
      this.toggleProperty('isOpen');
    }
  }
});
