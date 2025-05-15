
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 28 to equal 70', (t) => {
  assert.strictEqual(sum(42, 28), 70);
});
