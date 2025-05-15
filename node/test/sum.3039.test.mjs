
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 54 to equal 70', (t) => {
  assert.strictEqual(sum(16, 54), 70);
});
