
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 9 to equal 70', (t) => {
  assert.strictEqual(sum(61, 9), 70);
});
