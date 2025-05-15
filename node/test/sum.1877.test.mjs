
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 13 to equal 70', (t) => {
  assert.strictEqual(sum(57, 13), 70);
});
