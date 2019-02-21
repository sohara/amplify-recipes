import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | confirm-signup', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:confirm-signup');
    assert.ok(route);
  });
});
