
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 3 to equal 70', (t) => {
  assert.strictEqual(sum(67, 3), 70);
});
