import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

moduleForComponent('roadmap-page/statusboard-header', 'Integration | Component | roadmap page/statusboard header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{roadmap-page/statusboard-header}}`);

  assert.ok(find('div'));
});
