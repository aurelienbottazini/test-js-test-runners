
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 61 to equal 70', (t) => {
  assert.strictEqual(sum(9, 61), 70);
});
