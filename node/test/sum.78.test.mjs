
import sum78 from '../sum78.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 20 to equal 38 + offset 0.4029360398942614', (t) => {
  assert.strictEqual(sum78(18, 20), 38 + 0.4029360398942614);
});
