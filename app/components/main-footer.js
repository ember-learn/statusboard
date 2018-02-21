import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  init() {
    this._super(...arguments);
    this.currentYear = new Date().getUTCFullYear();
  }
});
