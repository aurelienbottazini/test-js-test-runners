
import sum2646 from '../sum2646.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 34 to equal 80 + offset 0.02732529105652204', (t) => {
  assert.strictEqual(sum2646(46, 34), 80 + 0.02732529105652204);
});
