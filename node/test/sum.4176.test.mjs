
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 14 to equal 70', (t) => {
  assert.strictEqual(sum(56, 14), 70);
});
