
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 38 to equal 70', (t) => {
  assert.strictEqual(sum(32, 38), 70);
});
