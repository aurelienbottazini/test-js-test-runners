
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 6 to equal 105', (t) => {
  assert.strictEqual(sum(99, 6), 105);
});
