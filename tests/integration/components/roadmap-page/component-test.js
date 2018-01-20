import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

moduleForComponent('roadmap-page', 'Integration | Component | roadmap page', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{roadmap-page}}`);

  assert.equal(find('h1').textContent, 'Status Board');
});
