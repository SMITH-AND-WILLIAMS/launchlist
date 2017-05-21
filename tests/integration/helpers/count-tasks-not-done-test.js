
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('count-tasks-not-done', 'helper:count-tasks-not-done', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{count-tasks-not-done inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

