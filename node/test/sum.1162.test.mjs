
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 12 to equal 75', (t) => {
  assert.strictEqual(sum(63, 12), 75);
});
