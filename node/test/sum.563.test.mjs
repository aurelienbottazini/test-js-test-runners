
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 33 to equal 70', (t) => {
  assert.strictEqual(sum(37, 33), 70);
});
