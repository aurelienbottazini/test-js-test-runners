
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 39 to equal 70', (t) => {
  assert.strictEqual(sum(31, 39), 70);
});
