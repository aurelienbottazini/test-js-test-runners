
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 12 to equal 70', (t) => {
  assert.strictEqual(sum(58, 12), 70);
});
