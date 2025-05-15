
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 28 to equal 49', (t) => {
  assert.strictEqual(sum(21, 28), 49);
});
