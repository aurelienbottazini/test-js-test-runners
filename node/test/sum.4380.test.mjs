
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 91 to equal 180', (t) => {
  assert.strictEqual(sum(89, 91), 180);
});
