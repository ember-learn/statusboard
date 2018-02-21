import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  init() {
    this.currentYear = new Date().getUTCFullYear();
  }
});
