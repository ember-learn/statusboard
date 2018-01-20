import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

moduleForComponent('mark-down', 'Integration | Component | mark down', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{mark-down text='Test'}}`);

  assert.equal(find('div').textContent.trim(), 'Test');
});
