
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 37 to equal 70', (t) => {
  assert.strictEqual(sum(33, 37), 70);
});
